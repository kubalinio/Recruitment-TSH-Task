import { useQuery } from 'app/shared/hooks'

export function Products() {
    const { data } = useQuery('getProductsList', {})
    console.log(data)
    return (
        <section className=''>
            {data?.items.map(item => item.name)}
        </section>
    )
}