import { useSearchParams } from 'react-router-dom'

import { useQuery } from 'app/shared/hooks'

import { ProductCard } from './components/ProductCard'

export function Products() {
    const [searchParams] = useSearchParams()

    const page = searchParams.get('page');
    const promo = searchParams.get('promo');
    const active = searchParams.get('active');
    const search = searchParams.get('search');


    const { data } = useQuery('getProductsList',
        {
            page: page || undefined,
            active: active || undefined,
            promo: promo || undefined,
            search: search || undefined
        })

    return (
        <section className='flex flex-wrap justify-center px-6 pt-6 pb-10 mx-auto lg:max-w-7xl xl:justify-center gap-y-8 gap-x-5 lg:py-14'>
            {/* Here Suspense */}
            {data?.items.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}

        </section>
    )
}