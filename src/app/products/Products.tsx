import { useQuery } from 'app/shared/hooks'

import { ProductCard } from './components/ProductCard'

export function Products() {
    const { data } = useQuery('getProductsList', {})
    console.log(data)

    return (
        <section className='flex flex-wrap justify-center px-6 pt-6 pb-10 mx-auto lg:max-w-7xl xl:justify-between gap-y-8 gap-x-5 lg:py-14'>
            {/* Here Suspense */}
            {data?.items.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}

        </section>
    )
}