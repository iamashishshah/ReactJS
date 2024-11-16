import { createRoot } from 'react-dom/client'
import  { App } from './App.jsx'
import React from 'react';

const reactElement = { // this is my language not of react language
    type: "a",
    props: {
      href: "www.google.com",
      target: "_blank",
      style:
        "text-decoration: none; color: white; background-color: blue; padding: 10px 5px; margin: 5px; font-family: jetBrains mono",
    },
    content: "Click to visit Google",
  };
  
const AnotherReactElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

// here is the react language

const customReact = React.createElement(
    'h1',
    {
        style: "background-color: red; padding: 5px; font-family: jetBrains mono"
    },
    'This is my heading',
    'javascript variable'
)

createRoot(document.getElementById('root')).render(
    customReact
)
