import './App.css';
// import Example1 from './components/examples/Example1';
// import Example2 from './components/examples/Example2';
// import Example3 from './components/examples/Example3';
// import Example4 from './components/examples/Example4';
import Header from './components/Header';
import Todo from './components/TodoList/Todo';
import { useState, useEffect } from 'react';
function App() {

  const [color, setColor] = useState("dark");

  useEffect(() => {
    document.body.className = color;
    if(color === 'light') {
      setColor('light')
    } else {
      setColor('dark')
    }
  }, [color]);
  return (
    <div className="App">
      <Header color={color} setColor={setColor} />
        <Todo color={color} setColor={setColor} />
      {/* <Example1 />
      <Example2 />
      <Example3 />
      <Example4 /> */}
    </div>
  );
}

export default App;
