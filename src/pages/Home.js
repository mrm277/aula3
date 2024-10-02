const React = require('react');

const Home = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Welcome to the Home Page'),
    React.createElement('p', null, 'This is a simple home page.')
  );
};

module.exports = Home;
