import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import axios from 'axios';
import EventsExample from './components/EventsExample';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  const fetchUsers = async () => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data))
    } catch (e) {
      alert(e)
    }
  }

  const fetchTodos = async () => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => setTodos(res.data))
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <EventsExample />

      <Card onClick={() => console.log('====>CLICK<====')} variant={CardVariant.outlined} width='200px' height='200px'>
        <button>Button</button>
        <div>asdasdas</div>
      </Card>
      
      {/*<UserList users={users} />*/}

      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </div>
  );
};

export default App;