function draw(element, configuration) {
  element.style.width = configuration.width;
  element.style.height = configuration.height;
  element.style.backgroundColor = configuration.backgroundColor;
  element.style.color = configuration.color;
  element.style.margin = configuration.margin;
  element.style.padding = configuration.padding;
  return element;
}

function draw(
  element,
  { width, height, backgroundColor, color, margin, padding }
) {
  element.style.width = width;
  element.style.height = height;
  element.style.backgroundColor = backgroundColor;
  element.style.color = color;
  element.style.margin = margin;
  element.style.padding = padding;
  return element;
}

const element = document.createElement("li");
draw(element, {
  width: 240,
  height: 200,
  backgroundColor: "white",
  color: "black",
  margin: 0,
  padding: 0
});
