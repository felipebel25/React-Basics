import React, { useMemo, useState } from 'react'

const users = [
    {
        id: '1', name: 'Foo'
    },
    {
        id: '1', name: 'Bar'
    }
]

export const HooksUseMemo = () => {
    const [search, setSearch] = useState('')
    const [text, setText] = useState('')
    
    // we avoid unnecessary computes by using useMemo and we should pass a dependency that in this case is search
    const filteredUsers = useMemo(() => {
        return users.filter((user) => user.name.toLowerCase() === search.toLowerCase()) 
    }, [search])


    return (
        <div className='app'>
            <input  type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={()=> setSearch(text)}>Search</button>
            {text}  {search}

            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
