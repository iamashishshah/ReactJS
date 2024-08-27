## React Documentation 
`react is a library`
`framework` vs `library`
military vs cool dude: reference

## Legendary way to create React app
`npx create-react-app nameoffolder` 

## BUT WE'RE NOT GONNA MAKE PROJECTS USING 'NPX' BECAUSE IT IS HEAVY
### WE'LL USE 'VITE' 
### what is 'vite'
it is a bundler or library 
-> Q: What does 'vite' do?
ans: Overall, Vite was created to streamline the development process by improving build times, reducing configuration complexity, and enhancing the development experience with modern features and optimizations.

-> Q: what are bundler? what were problems that now bundler are solving?
Ans: A bundler is a tool used in web development to bundle JavaScript files and other assets (such as CSS, images, and fonts) into a single or a few files

## Steps to create project using 'vite' and 'react'

`create folder in which your project folder gonna lie`: change dir to that folder

`want to make project using vite`: run cmd line
```javascript
npm create vite@latest
npm i or npm install // to install node modules
now you're ready to go 
```

### install tailwind in your react project

```javascript
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

@tailwind base;
@tailwind components;
@tailwind utilities;

npm run dev
```

## About react and 'react-dom/client'
> -react-dom creates its own dom and compares with the browser dom and then updates the changes whatever done in react-dom/virtual dom then it injects into main dom
React: Provides the tools and APIs for building and managing React components, handling state, and defining the component structure.
ReactDOM: Provides the methods to render React components into the DOM and manage their lifecycle.

## But isn't that when React-DOM is created and then compares to Real-DOM, it takes time to compare? How this is managed efficiently?

### What does node modules do in that files??

`<link rel="icon" type="image/svg+xml" href="/vite.svg" />`


## `useState`

`useState` is a Hook that lets you add state to functional components.

### Syntax

```javascript
const [state, setState] = useState(initialState);
```
[React Fibre Github link](https://github.com/acdlite/react-fiber-architecture)

[how to transform jsx into js](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform)