import { useSearchParams } from 'react-router-dom'

import { useQuery } from 'app/shared/hooks'
import { Spinner } from 'app/shared/components/Spinner';

import { ProductCard } from './components/ProductCard'
import { Pagination } from './components/Pagination';
import { NotFoundProducts } from './components/NotFoundProducts';
import { ApiError } from './components/ApiError';

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

    const { data, isLoadingAndEnabled, isError } = useQuery('getProductsList',
        {
            page: page || undefined,
            active: active || undefined,
            promo: promo || undefined,
            search: search || undefined
        })


    if (!isError) return <ApiError />

    if (isLoadingAndEnabled) return <Spinner />

    return (
        <section className='flex flex-wrap justify-center px-6 pt-6 pb-10 mx-auto lg:max-w-7xl xl:justify-center gap-y-8 gap-x-5 lg:py-14'>
            {data && (data.items.length > 0) ? (
                <>
                    {data.items.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                    <Pagination meta={data.meta} handleCurrentPage={handleCurrentPage} />
                </>
            ) : <NotFoundProducts />
            }
        </section>
    )
}