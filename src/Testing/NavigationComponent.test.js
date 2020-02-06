import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import NavigationComponent from '../Components/NavigationComponent';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders learn link "Kontakt"', () => {
  act(() => {
    render(<NavigationComponent />, container);
  });
  expect(container.textContent).toContain("Kontakt");
});
