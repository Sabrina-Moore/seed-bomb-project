import { Box, Stack, Typography } from "@mui/material";

import colors from "../components/colorPalette";
import "../index.css";
import SeedMap from "../components/SeedMap";

export default function MapPage() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 5 }}>
      <Stack spacing={1} sx={{ mb: 3, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ color: colors.navyBlue, fontWeight: "bold" }}
        >
          Where We've Planted
        </Typography>
        <Typography sx={{ color: colors.grey }}>
          Tap anywhere on the map to drop a pin where you've planted a seed
          bomb. Map is limited to LA County.
        </Typography>
      </Stack>
      <SeedMap />
    </Box>
  );
}
