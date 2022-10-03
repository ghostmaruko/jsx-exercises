function sayHello(name) {
  return <h1>Hello, {name}</h1>;
}

function App() {
  return <>{sayHello("Marco")}</>;
}

export default App;
