import { useSearchParams } from 'react-router-dom'

import { useQuery } from 'app/shared/hooks'
import { Spinner } from 'app/shared/components/Spinner';
import { ApiError, NotFoundProducts, Pagination, ProductCard } from '../components';

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


    if (isError) return <ApiError />

    if (isLoadingAndEnabled) return <Spinner />

    return (
        data && (data.items.length > 0) ? (
            <>
                {data.items.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

                <Pagination meta={data.meta} handleCurrentPage={handleCurrentPage} />
            </>
        ) : <NotFoundProducts />


    )
}