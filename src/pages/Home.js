const React = require("react");

const Home = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Olá, bem-vindo ao meu site!"),
    React.createElement("p", null, "Este é o site que a Maria fez"),
  );
};

module.exports = Home;
