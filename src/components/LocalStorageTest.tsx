import { useLocalStorage } from "./hooks/useLocalStorage"

export const LocalStorageTest = () => {
    const [data, setData] = useLocalStorage('name', '')
    return (
        <input
            type="text"
            name="name"
            value={data}
            onChange={(e) => setData(e.target.value)}
        />
    )
}
