import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler = (uName, uAge, uCollegename)=>{
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,{name:uName, age:uAge, collegename:uCollegename, id:Math.random().toString()},];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
    <UsersList users={usersList}/>
    </div>
  
  );
}

export default App;
