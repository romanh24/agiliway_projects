import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './Home';

it('renders correctly', () => {
  const { queryByTestId } = render(
    <Router>
      <Home />
    </Router>
  );

  expect(queryByTestId('checkout-button')).toBeTruthy();
});
