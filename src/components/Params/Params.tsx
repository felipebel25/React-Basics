import { useParams, useSearchParams } from "react-router-dom"

const Params = () => {
    const params = useParams();
    const [searchParams] = useSearchParams()

    return (
        <div>Params {params.slug} - queries: {searchParams.get('page') ?? 'no queries'}</div>
    )
}
export default Params