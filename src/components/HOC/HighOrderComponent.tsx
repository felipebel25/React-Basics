// this is a previous to create custom components
// but now fortunately the modern way is use custom Hooks

import withDataFetching from "./withDataFetching"

// A HOC is like a wrapper for your component, which brings additional functionality.

type Repo = {
    id: number;
    html_url: string;
    full_name: string;
}

type ReposInjectedProps = {
    isLoading: boolean;
    error: string | null;
    data: Repo[];
}


const Repos = ({ isLoading, error, data }: ReposInjectedProps) => {
    if (isLoading) return (
        <div>Loading...</div>
    )
    if (error) return (
        <div>Oops! There's an error please try again.</div>
    )

    return (
        <ul>
            {data.map((repo) => (
                <li key={repo.id}>
                    <a href={repo.html_url} target="__blank" rel="noopener noreferrer" >{repo.full_name}</a>
                </li>
            ))}
        </ul>
    )

}


const HOCExample = () => {
    const Component = withDataFetching(Repos);
    return (
        <Component
            dataSource={'https://api.github.com/users/felipebel25/repos'}
        />

    )
}

export default HOCExample;