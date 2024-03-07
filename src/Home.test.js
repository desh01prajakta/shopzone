// import "whatwg-fetch"
import React from "react";
import { render, screen } from '@testing-library/react';
import Home from "./component/Home";
import "@testing-library/jest-dom"
import { Provider } from 'react-redux'
import store from './redux/store.js'
import{BrowserRouter} from 'react-router-dom'

/**
 * @jest-environment jsdom
 */

describe("Home component", () => {
  test("displays the title", () => {
    // Render the Home component
    render(
      <BrowserRouter>
      <Provider store= {store}>
      <Home />
      </Provider>
      </BrowserRouter>);

    // Find the title"
    const featuredTitle = screen.getByRole("heading", {name:"Welcome To Shopzone!"});
         
    expect(featuredTitle).toBeInTheDocument();
  });
  test("displays paragraph", () => {
  render(
    <BrowserRouter>
    <Provider store= {store}>
    <Home />
    </Provider>
    </BrowserRouter>);  
  const title = screen.getByText("Start shopping and win exciting prices!");
         
  expect(title).toBeInTheDocument();
  })
})

