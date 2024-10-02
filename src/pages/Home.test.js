const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom'); 
const React = require('react');
const Home = require('./Home.js');

test('renderiza o MyComponent', () => {
  render(React.createElement(Home));

  const element = screen.getByText(/This is a simple home page./i);
  expect(element).toBeInTheDocument();
});
