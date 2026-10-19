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

// what we have more structure like two children --------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// we created element using react => it gives us react element(js obj) => rendered as html elemment in root(dom) --------------------------

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "this is a heading from react",
// );
// console.log(heading);

//we created elemnet using jsx =>babel trasnpiles jsx into react.createElement => react elemnt(js obj) => html element -----------------------------

const jsxheading = <h1>this is a heading from jsx</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(jsxheading);

// root.render(jsxheading);

//what is component , fucntional component, class based componnent========================================

//fucntional component--------------------

const number = 1000;

const HeadingComponent = () => {
  return <h1>hello i m react heading component .</h1>;
};

const Headingcompo = () => (
  <div>hello i am also fucntional compo but return is omiited only. </div>
);
//component composition =------------------------- rendering another component inside another compo
const SecondCompo = () => (
  <div>
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()};<h2>hello I am heading after rendered Headingcompo</h2>
    {jsxheading};
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecondCompo />);
