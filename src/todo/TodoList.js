import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <Fragment>
      {todoList.map((todo) => {
        <TodoItem key={TodoItem.id} item={todoItem} />;
      })}
    </Fragment>
  );
};

export default TodoList;
