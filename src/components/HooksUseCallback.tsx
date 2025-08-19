import React, { memo, useCallback, useState } from "react"

const initialUsers = [
  {
    id: '1', name: 'Foo'
  },
  {
    id: '2', name: 'Bar'
  }
]

const List = memo(({ users, onRemove }: { users: { id: string, name: string }[], onRemove: (id: string) => void }) => {
  console.log('render List');

  return (
    <ul>
      {users.map((user) => <li key={user.id}>{user.name} <span onClick={() => onRemove(user.id)}>X</span></li>)}
    </ul>
  )
})


export const HooksUseCallback = () => {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState('')

  console.log('render App');

  // if don't use this hook, every single re render using text will re create this function between re renders
  // so that will makes think to the List Component that we are sending a new onRemove function which is not true
  const removeUser = useCallback((id: string) => {
    setUsers((prevVal) => (prevVal.filter((user) => user.id !== id)))
  }, users)

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <List users={users} onRemove={removeUser} />
    </div>
  )
}
