import { useState, useEffect } from "react";
import Todo from './components/Todo'
  function App() {
    let [todos, setTodos] = useState(
      [{ name: 'item1', timeCreated: '01:00' },
      { name: 'item2', timeCreated: '02:00' },
      { name: 'item3', timeCreated: '03:00' },
      { name: 'item4', timeCreated: '04:00' },
      { name: 'item5', timeCreated: '05:00' },
      { name: 'item6', timeCreated: '06:00' },
      { name: 'item7', timeCreated: '07:00' },
      { name: 'item8', timeCreated: '08:00' },
      { name: 'item9', timeCreated: '09:00' },
      { name: 'item10', timeCreated: '10:00' },
      { name: 'item11', timeCreated: '11:00' },
        { name: 'item12', timeCreated: '12:00' },
      { name: 'item13', timeCreated: '13:00' },
      { name: 'item14', timeCreated: '14:00' },
      { name: 'item15', timeCreated: '15:00' },
      { name: 'item16', timeCreated: '16:00' },
      { name: 'item17', timeCreated: '17:00' },
        { name: 'item18', timeCreated: '18:00' },
      { name: 'item19', timeCreated: '19:00' },
      { name: 'item20', timeCreated: '20:00' },
        { name: 'item21', timeCreated: '21:00' },
      { name: 'item22', timeCreated: '22:00' },
      { name: 'item23', timeCreated: '23:00' },
      { name: 'item24', timeCreated: '24:00' },
      ]);
   const handleInputChange = (id, value) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.name === id) {
        return { ...todo, inputValue: value };
      }
      return todo;
    }));
  }

  const handleClear = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.name === id) {
        return { ...todo, inputValue: "" };
      }
      return todo;
    }));
  }

  const updateTime = () => {
    let time = new Date();
    let updatedTime = time.toLocaleTimeString();
    setTodos(prevTodos => prevTodos.map(todo => {
      return { ...todo, timeUpdated: updatedTime };
    }));
  }

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000); // update time every second

    return () => {
      clearInterval(intervalId); // cleanup interval when component unmounts
    }
  }, []);
    const myStyle = {
      color: 'blue',
    };

   
  return (
    <div>
      <h2 style={myStyle}>My Todo List</h2>
      <h4>A Basic Todo App.</h4>
      <h3>Time: {todos.length > 0 && todos[0].timeUpdated}</h3>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              id={todo.name}
              timeAt={todo.timeCreated}
              inputValue={todo.inputValue}
              onInputChange={handleInputChange}
              onClear={handleClear}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;






