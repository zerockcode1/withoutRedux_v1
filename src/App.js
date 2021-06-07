import logo from './logo.svg';
import './App.css';
import TodoWrapper from "./todo/TodoWrapper";
import TodoWrapper2 from "./todo_redux/TodoWrapper2";
import TodoWrapperRouter from "./todo_router/TodoWrapperRouter";

function App() {
  return (
    <div>
        <TodoWrapperRouter>

        </TodoWrapperRouter>
    </div>
  );
}

export default App;
