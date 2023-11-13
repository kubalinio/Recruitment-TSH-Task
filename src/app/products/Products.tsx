import { useSearchParams } from 'react-router-dom'

import { useQuery } from 'app/shared/hooks'

import { ProductCard } from './components/ProductCard'
import { Pagination } from './components/Pagination';

export function Products() {
    const [searchParams, setSearchParams] = useSearchParams()

    const page = searchParams.get('page');
    const promo = searchParams.get('promo');
    const active = searchParams.get('active');
    const search = searchParams.get('search');

    const handleCurrentPage = (pageNum: string) => {
        setSearchParams((prev) => {
            prev.set('page', pageNum)
            return prev;
        });
    }

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
            {data && (data.items.length > 0) ? (
                <>
                    {data?.items.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                    <Pagination meta={data.meta} handleCurrentPage={handleCurrentPage} />
                </>
            ) : <div>No Items</div>
            }

        </section>
    )
}