import { useState } from "react";
import Form from "./components/Form";
import { Li } from "./style/LiStyled";
import { Ul } from "./style/UlStyled";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Ul>
        {todoList.map((item, idx) => {
          return <Li key={idx}>{item.text}</Li>;
        })}
      </Ul>
    </>
  );
};

export default App;
