# Seed Bomb Project

<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Seed Bomb Project</h1>

<h3 align="center">
  Optional tag line. 
</h3>

<br />

 <p align="center">
    Optional subtitle. 
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
         <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#running-the-app">Running the App</a>
      <ul>
        <li><a href="#getting-started">Getting Started</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Contributions</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#how-to-make-code-changes-in-the-terminal">Making Changes</a></li>
        <li><a href="#file-structure">File Structure </a></li>
        <li><a href="#creating-your-own-supabase">Creating a Supabase Project</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->


## About The Project



<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Features

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Tech Stack

- **Reactjs**
- **Vite**
- **Supabase** for database storage
- **JavaScript**
- 💾 **AsyncStorage** for local session storage

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Running the App
This prototype is run using Reactjs and Vite. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Getting Started

1. Open terminal on your computer. 
2. List the files and folders inside your current directory, move into a sub-folder or file, or move backwards to a parent directory
```sh
ls
cd filename
cd ..
```
3. In your terminal (or documents folder), make a new folder directory to house the code
```sh
mkdir foldername
```
4. Move terminal location into the folder
```sh
cd foldername
```
5. Clone this repository
```sh
git clone https://github.com/your-github-name/repo-name.git .
```
6. Install project dependencies with the code 
```sh
npm install
```
7. Run the code
```sh
code .
```
8. Install dependencies
```sh
npm install
```
9. Run the simulator
```sh
npm run dev
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributions
Contributors are welcome! If you'd like to improve the problem, fix a bug, add a feature, or anything else you can think of, we'd love your input. 

Before getting started:
1. Read through the code carefully as well as any open issues and pull requests.
2. Make your pull requests detailed and specific - don't commit a lot of changes and push them all together as it makes reading and debugging more difficult.
3. Please include screenshots or screen recordings in your pull requests and issues. 

Thanks for your help and we appreciate your interest in our feature!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites
Before contributing, ensure you have the following installed:
- Install **Git** for terminal command interactions with Github. 
- Install **Visual Studio Code** or any other preferred code editor or IDE.
- Install **Vite** for 

### Getting Started
1. Check your installations
```bash
node --version
npm --version
git --version
```
2. Fork the repository 
   - Navigate to our Repo and click the fork button on the top right corner
   - Choose your own account as the owner
3. Create a local folder on your computer and navigate inside that folder in your terminal
4. Clone your forked repository inside that folder
 ```sh
 git clone https://github.com/github_username/repo_name.git .
 ```
5. Install NPM packages/dependencies
```sh
npm install
```
6. Open the code
```sh
code .
```
5. Create your own .env.local file to connect to a supabase project
```js
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_KEY=
```
7. Run the code
```sh
npm run dev
```
9. Test the code and make changes


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### How to make code changes in the terminal

1. Create and switch to a new development branch
```sh
git switch -c branch-name
```
3. Make your code changes on that branch
   - Save the individual file
5. Stage the changed files. While you could use the shortcut "." after the file name to add all changed files, I encourage you to be careful of what files you push.
```sh
git add fileName otherFileName
```
6. Make your commit
```sh
git commit -m "Description of code"
```
7. Push your code
```sh
git push origin branch-name
```
9. On this repository, navigate to the "Pull Requests" tab inside your github repo and create a new request. Be aware that you will need to change the branches to be set to your own forked repo not the original forked repo called "Starter26" or this repo called "Showcase-Repo."
10. After your Pull request is made and has been merged, you will then want to update your local main. Move from your development branch to main.
```sh
git switch main
```
12. Pull the remote main to your local main.
```sh
git pull origin main
```
14. If you are not the one who made the code changes, you will need to update your local development branch now. Switch to your development branch to merge with main. 
```sh
git switch branch-name
git merge main
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### File Structure



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Creating your own Supabase
This code relies on dynamic rendering from fetching from and inserting into supabase tables. 
1. Create a supabase account
2. Create a new project
   - Link to your github repository
   - Name your project
   - Create a database password
3. Connect to your project ("connect" button near the top)
   - Framework = Expo React Native
   - Run npm installation inside terminal
   - create .env.local file if you haven't already and add supabase_url and supabase_key
   - Ensure that gitignore properly lists .env.local
5. Create tables


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Helpful Resources
If you're new to Reactjs or Vite, these resources can help:

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>









