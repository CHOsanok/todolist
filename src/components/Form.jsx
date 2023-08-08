import { Textarea } from "../style/TextareaStyled";
import { Button } from "../style/ButtonStyled";
import { Forms } from "../style/FormStyled";
import { useState } from "react";
import { useRef } from "react";

const Form = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const focusText = useRef(null);

  const changeText = (e) => {
    const newText = e.target.value;

    setText(newText);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = { id: Math.random(), text: text };

    setTodoList([...todoList, newTodo]);
    setText("");
    focusText.current.focus();
  };

  return (
    <Forms>
      <Textarea value={text} onChange={(e) => changeText(e)} ref={focusText} />
      <Button onClick={(e) => addTodo(e)} type="submit">
        submit
      </Button>
    </Forms>
  );
};

export default Form;
