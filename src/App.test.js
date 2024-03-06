import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


test('render home page', () => {
    render(
        <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const homeElement = screen.getByText(/Welcome To Shopzone!/i);
  expect(homeElement).toBeInTheDocument();
})

