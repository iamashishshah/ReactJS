// in the custom react, we can't add like bundler project because we're not depending upon any library or anything else
// so we've to pass as object


function customRender(reactElement, container){
    /*
    const domElememt = document.createElement(reactElement.type)
    domElememt.innerHTML = reactElement.innerHTML
    domElememt.setAttribute("style", reactElement.props.style)
    container.appendChild(domElememt)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        console.log(prop)
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "www.google.com",
        target: "_blank",
        style: 'color: white; text-decoration: none; font-family: jetBrains mono',
    },
    children: 'click me to visit google'
}

const reactContainer = document.getElementById("root")


// what do you want to render and where do you want to render
customRender(reactElement, reactContainer)