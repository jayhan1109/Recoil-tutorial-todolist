import React from "react";
import { todoListState } from "../recoil/todo";
import { useSetRecoilState } from "recoil";
import { useState } from "react";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState)
  const addItem
  
};

export default TodoItemCreator;
