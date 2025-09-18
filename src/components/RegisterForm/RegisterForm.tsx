import { useState } from "react"

export const RegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('register', userName, email, password);
    }


    return (
        <div>
            <form onSubmit={register}>
                <div>
                    <label>Nick Name</label>
                    <input value={userName} onChange={((e) => setUserName(e.target.value))} />
                </div>
                <div>
                    <label>Email</label>
                    <input value={email} onChange={((e) => setEmail(e.target.value))} />
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} onChange={((e) => setPassword(e.target.value))} />
                </div>
                <button>Register</button>
            </form>

        </div>
    )
}
