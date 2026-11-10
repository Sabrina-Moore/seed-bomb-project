import { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "../index.css";
import mapPin from "../assets/map-pin.png"; //added map pin marker
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { supabase } from "../../utils/supabase";
import colors from "./colorPalette";

// Rough bounding box around mainland LA County

const LA_COUNTY_BOUNDS = [
  [-118.95, 33.7], // southwest corner
  [-117.65, 34.82], // northeast corner
];
const LA_COUNTY_CENTER = [-118.2437, 34.0522];
const TABLE_NAME = "planted_seed_bombs";

export default function SeedMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  const [pendingCoords, setPendingCoords] = useState(null); // {lat, lng} while dialog is open
  const [note, setNote] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (mapRef.current) return; // init once

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: LA_COUNTY_CENTER,
      zoom: 11,
      minZoom: 6,
      maxBounds: LA_COUNTY_BOUNDS,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");
    map.on("load", loadExistingPins);
    map.on("click", (e) => {
      // added code so if clicking on an existing event, it doesn't open dialog
      if (e.originalEvent.target.closest(".maplibregl-marker")) return;
      setPendingCoords({ lat: e.lngLat.lat, lng: e.lngLat.lng });
    });

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadExistingPins() {
    const { data, error } = await supabase.from(TABLE_NAME).select("*");
    if (error) {
      console.error("Error loading pins:", error);
      return;
    }
    data.forEach(addMarkerToMap);
  }

  function addMarkerToMap(pin) {
    //new marker 
      const markerElement = document.createElement("img");
      markerElement.src = mapPin;
      markerElement.alt = "Seed bomb planted";
      markerElement.style.width = "36px";
      markerElement.style.height = "36px";

      new maplibregl.Marker({ element: markerElement, anchor: "bottom" })
      .setLngLat([pin.lng, pin.lat])
      .setPopup(
        new maplibregl.Popup({ offset: 24, className: "pin-popup"  }).setHTML(
          `${
            pin.notes ? pin.notes.replace(/</g, "&lt;") : "No Description."
          }<br/><em>${new Date(pin.created_at).toLocaleDateString()}</em>`,
        ),
      )
      .addTo(mapRef.current);
  }

  async function handleSavePin() {
    if (!pendingCoords) return;
    const { lat, lng } = pendingCoords;

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([{ lat, lng, notes: note || null }])
      .select()
      .single();

    if (error) {
      console.error("Error saving pin:", error);
      setToast({
        severity: "error",
        message: "Couldn't save your pin — please try again.",
      });
    } else {
      addMarkerToMap(data);
      setToast({
        severity: "success",
        message: "Pin dropped — thanks for planting! 🌸",
      });
      setPendingCoords(null);
      setNote("");
    }
  }

  return (
    <Box sx={{ width: "100%", height: "75vh", position: "relative" }}>
      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />

      <Dialog
        open={Boolean(pendingCoords)}
        onClose={() => {
          setPendingCoords(null);
          setNote("");
        }}
        fullWidth
        maxWidth="xs"
        slotProps={{ paper: { sx: { borderRadius: 4 } } }} //rounded edges
      >
        <DialogTitle sx={{color: colors.orange}}>Drop Your Pin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            multiline
            minRows={2}
            label="Description (optional)"
            placeholder="e.g. planted near the trailhead by the creek"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            sx={{ mt: 1, 
               "& .MuiOutlinedInput-root": { color: colors.orange },
                "& .MuiInputLabel-root": { color: colors.navyBlue },
                "& .MuiInputBase-input::placeholder": { color: colors.navyBlue, opacity: 0.6 },
            }} //making dialog text more visual
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setPendingCoords(null);
              setNote("");
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: colors.green }}
            onClick={handleSavePin}
          >
            Drop Pin
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={4000}
        onClose={() => setToast(null)}
      >
        {toast ? (
          <Alert severity={toast.severity} sx={{ width: "100%" }}>
            {toast.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Box>
  );
}

