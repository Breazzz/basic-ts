import React, { FC, useState } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
  const [checked, setChecked] = useState(todo.completed)

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      {todo.id} - {todo.title}
    </div>
  );
};

export default TodoItem;