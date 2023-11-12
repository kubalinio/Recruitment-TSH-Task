import { Link } from 'react-router-dom'

import { Product } from 'api/actions/products/products.types'
import { Badge, Rating, buttonVariants } from 'app/shared/ui'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'app/shared/ui'
import { cn } from 'app/shared/utils/cn'



type Props = {
    product: Product
}

export function ProductCard({
    product: {
        id,
        active,
        description,
        image,
        name,
        promo,
        rating
    }
}: Props) {
    return (
        <Card className='w-[327px] lg:w-[288px] h-[400px] flex flex-col justify-between '>
            <CardHeader className='relative w-full max-h-[170px] overflow-hidden rounded-t-lg'>
                <img src={image} alt={name} className={cn('object-cover w-full h-full', {
                    'grayscale': !active
                })} />

                {promo && <Badge variant={'promo'} className='absolute left-0 top-4'>Promo</Badge>}
            </CardHeader>
            <CardContent className='px-4'>
                <CardTitle className='mb-2 line-clamp-1' title={name}>
                    {name}
                </CardTitle>

                <CardDescription className='h-16 line-clamp-3'>
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter className='flex flex-col justify-start px-4 pb-6'>
                <Rating className='mb-4' rating={rating} />

                <Link className={buttonVariants({
                    variant: 'primary',
                    className: !active ? 'pointer-events-none bg-disabled' : ''
                })}
                    to={`/products/${id}`}
                >
                    {active ? 'Show Details' : 'Unavailable'}
                </Link>
            </CardFooter>
        </Card >
    )
}