import { useState } from 'react';
import './App.css';
import { InputForm } from "./components/InputForm";
import {Title} from "./components/Title";
import { TodoList } from './components/TodoList';

function App() {
  // 下記宣言理由はInputFormとTodoListでもtaskListとsetTaskListを使うから
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList}/>
      <TodoList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
