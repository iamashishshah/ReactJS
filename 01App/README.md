## Why do we use framework? and what are the bundler?
As your audience includes more users with poor network conditions and low-end devices, you might need to generate HTML from your components to display content early—either on the server, or during the build time. Changing your setup to run some of your code on the server or during the build can be very tricky.


## why do we use react with any framework rather than bundler?

## How does react work?
Virtual DOM mimic the real DOM, then it compares the changes made in virtual DOM to real DOM, then it updates only those part.
(isn't comparing is costely and time comsuming, but the real changes is beinge compared to virtual DOM not to the actual DOM so 
the performance increases but at the same time cost will also increase in backside of virtual DOM)

## Here I'm not using css, I'm just importing it, then how is it attaching to my tags?
```javascript
import './App.css'
export function App() {
  return (
    <>
     <h1>Classic/Vanilla react app</h1>
    </>
  )
}

// When you import a CSS file like import './App.css' in a React component, it triggers your build tool (like Webpack, Vite, or another bundler) to automatically include that CSS in the final bundle.
/*

Here’s how it works:

CSS Import as a Side Effect: When you import App.css, you’re not directly using its content in JavaScript. Instead, importing a CSS file is a "side effect" that tells the bundler to load and apply the styles globally across the application.

Bundler's Role: Tools like Webpack or Vite detect CSS imports in JavaScript files and bundle those styles along with your JavaScript code. When your app is loaded in the browser, the CSS is automatically injected into a <style> tag in the HTML document’s <head> section.

Global Styling: Since CSS in React is usually scoped globally (unless you’re using CSS Modules or other scoping solutions), any styles defined in App.css apply to elements across your app, regardless of whether you reference specific classes or IDs in your JavaScript files.

So, even though you’re not using anything from App.css directly in the component code, importing it ensures its styles are applied globally in the browser.

*/
```

## name of the file can be changed or write however you want but not the function name