const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom'); 
const React = require('react');
const Home = require('../pages/Home.js');

test('renderiza o MyComponent', () => {
  try {
    render(React.createElement(Home));
    const element = screen.getByText(/This is a simple home page./i);
    expect(element).toBeInTheDocument();
  } catch (error) {
    console.error('Erro ao renderizar o componente ou encontrar o texto:', error);
    throw error; // Re-throw the error to ensure the test fails
  }
});