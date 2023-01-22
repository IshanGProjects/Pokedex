# Pokedex

## Available Scripts

In the project directory, you can run:

### `npm install`

This will download all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Project Tech Stack
- React JS
- Node JS (Dependencies)
- CSS
- HTML
- JS
- Axios
- useSound A React Hook for Sound Effects
- nes.css library (https://nostalgic-css.github.io/NES.css/) Link Here

## Project Description
As per the instructions given for this project I wanted to use npx create react app to get a simple project structure going. As for some dependencies, since this template is built for single page apps, I decided to make use of the router. I always found the system for routing in in React to be super interesting as when the URL changes, the router uses the defined routes to determine which component should be displayed. This allows for a single-page application (SPA) experience, where the entire page does not need to be reloaded when navigating between different sections of the application. 

### Some Cool Features
- One of the things I wanted to do was make a cool text scrolling effect. I was able to achieve this with the useEffect library which allows you to manually change the DOM in React components. The best part of the component structure is that component is a really easy utility to incorporrate throughout the application.

- using the useSound  library I also included a sound hook that plays the themsong of the pokemon games when hovering over the home or find pokemon buttons. 
