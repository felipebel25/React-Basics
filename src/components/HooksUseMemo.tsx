import { useMemo, useState } from 'react'

const users = [
    {
        id: '1', name: 'Foo'
    },
    {
        id: '2', name: 'Bar'
    },
    // 2000 more users
]

export const HooksUseMemo = () => {
    console.log('render')

    // text is just for the input 
    const [text, setText] = useState('');

    // search state to search users
    const [search, setSearch] = useState('');

    // bad way 
    // const filteredUsers = users.filter((user) => user.name.toLowerCase() === search.toLowerCase());

    // we avoid unnecessary expensive computes by using useMemo. We should pass a dependency that in this case is search instead of text that is in the input 
    const filteredUsers = useMemo(() => {
        console.log('recalculating')
        return users.filter((user) => user.name.toLowerCase() === search.toLowerCase());
    }, [search])

    // So the filter is always happening when the state search changes

    return (
        <div className='app'>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setSearch(text)}>Search</button>
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
