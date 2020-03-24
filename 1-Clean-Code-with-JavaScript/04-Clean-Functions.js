// first approach : Object.assign
function draw(element, config) {
  let defaults = {
    width: 200,
    height: 200,
    margin: 28,
    padding: 14
  };

  config = Object.assign(defaults, config);
  return element;
}

// second approach : spread operator
function draw(element, config) {
  let defaults = {
    width: 200,
    height: 200,
    margin: 28,
    padding: 14
  };

  config = { ...defaults, ...config };
  return element;
}


// *************** using short circut **********************
// function draw(element, config) {
//   element.style.width = config.width || 200;
//   element.style.height = config.height || 200;
//   //   element.style.backgroundColor = config.backgroundColor;
//   //   element.style.color = config.color;
//   element.style.margin = config.margin || 0;
//   element.style.padding = config.padding || 4;
//   return element;
// }
