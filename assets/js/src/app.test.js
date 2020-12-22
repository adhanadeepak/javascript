import React from "react";
import ReactDOM from "react-dom";
import App from './app';
const jsdom = require('mocha-jsdom');


let rootContainer;

beforeEach(() => {
  //
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  //
  document.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
    jsdom();
  it("Renders Hello World Title", () => {
    //
    act(() => {
        ReactDOM.render(<App />, rootContainer);
      });
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("Hello World");
  });
});