//rendering ------------

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react !",
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// what is children and how to create them ------------------------

// let parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },

//     [
//       React.createElement("h2", {}, "hello im h2 tag"),
//       React.createElement("h3", {}, "hello im h3 tag"),
//     ],
//   ),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
// root.render(parent);

// what we have more structure likem two children --------------------------

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },

    [
      React.createElement("h2", {}, "hello im h2 tag"),
      React.createElement("h3", {}, "hello im h3 tag"),
    ],
  ),
  React.createElement(
    "div",
    { id: "child2" },

    [
      React.createElement("h2", {}, "hello im h2 tag"),
      React.createElement("h3", {}, "hello im h3 tag"),
    ],
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
