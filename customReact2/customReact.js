function componentRender(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.content;
  for (const prop in element.props) {
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);
}

const element = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
    style:
      "text-decoration: none; color: white; background-color: blue; padding: 10px 5px; margin: 5px; font-family: jetBrains mono",
  },
  content: "Click to visit Google",
};

const container = document.getElementById("root");

componentRender(element, container);
