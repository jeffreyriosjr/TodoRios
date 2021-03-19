
import TodoList from  './TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
    <div className="container">
    <div className="App">
      <h1 className="text-center">
        The Rios To-Do-List!
      </h1>

      <TodoList />
    </div>
    </div>
  );
};

export default App;
