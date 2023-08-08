import { useState } from "react";
import Form from "./components/Form";
import { Li } from "./style/LiStyled";
import { Ul } from "./style/UlStyled";
import { Div } from "./style/DivStyled";
import { Icon } from "./style/IconStyled";
import { AiFillCloseCircle } from "react-icons/ai";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const deleteTodo = (idx) => {
    const updateTodolist = todoList.filter((_, i) => i !== idx);

    setTodoList(updateTodolist);
  };

  return (
    <>
      <Form todoList={todoList} setTodoList={setTodoList} />
      {!!todoList.length && (
        <Ul>
          {todoList.map((item, idx) => {
            return (
              <Div key={item.id}>
                <Li>{item.text}</Li>
                <Icon>
                  <AiFillCloseCircle onClick={() => deleteTodo(idx)} />
                </Icon>
              </Div>
            );
          })}
        </Ul>
      )}
    </>
  );
};

export default App;
