import React, { memo, useCallback, useState } from "react"

const initialUsers = [
  {
    id: '1', name: 'Alex'
  },
  {
    id: '2', name: 'Christian'
  },
  {
    id: '2', name: 'Felipe'
  }
]

// as memo allow us to memoize the component if the props don't change the problem consists in functions because functions are re-created each re render
const List = memo(({ users, onRemove }: { users: { id: string, name: string }[], onRemove: (id: string) => void }) => {
  console.log('render List');

  return (
    <ul>
      {users.map((user) => <li key={user.id}>{user.name} <button style={{ marginLeft: "1rem" }} onClick={() => onRemove(user.id)}>X</button></li>)}
    </ul>
  )
})


export const HooksUseCallback = () => {
  console.log('render App');

  // text state for the input 
  const [text, setText] = useState('')

  // users state 
  const [users, setUsers] = useState(initialUsers);


  const removeUser = ((id: string) => {
    setUsers((prevVal) => (prevVal.filter((user) => user.id !== id)))
  });


  // if don't use this hook, every single re render using the input(text state)  will re create this function between re renders
  // so that will makes think to the List Component that we are sending a new onRemove function which is not true because functions are re recreated each re-render
  
  // const removeUser = useCallback((id: string) => {
  //   setUsers((prevVal) => (prevVal.filter((user) => user.id !== id)))
  // }, users);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <List users={users} onRemove={removeUser} />
    </div>
  )
}
