import { useEffect, useState } from "react"

const withDataFetching = (WrapperComponent: any) => ({ dataSource }: { dataSource: string }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({
        message: '',
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(dataSource);
                const result = await response.json();
                setData(result);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error);
                    console.error("Failed to fetch user data:", error.message);
                } else {
                    console.error("An unexpected error occurred:", error);
                }
            }
            finally {
                setIsLoading(false);
            }

        }
        fetchData()
        return () => {
            setData([])
        }
    }, [])

    return (
        <WrapperComponent
            isLoading={isLoading}
            error={error.message && error.message}
            data={data}
        />
    );

}
export default withDataFetching 