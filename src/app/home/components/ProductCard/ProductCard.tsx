import { useState } from 'react'

import { Product } from 'api/actions/products/products.types'
import { Badge, Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Rating, Skeleton, } from 'app/shared/ui'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'app/shared/ui'
import { cn } from 'app/shared/utils/cn'

type Props = {
    product: Product
}

export function ProductCard({
    product: {
        active,
        description,
        image,
        name,
        promo,
        rating
    }
}: Props) {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    return (
        <Card data-testid="product-card" className='w-[327px] lg:w-[293px] h-[400px] flex flex-col justify-between '>
            <CardHeader className='relative w-full max-h-[170px] overflow-hidden rounded-t-lg'>

                {!isImageLoaded && <Skeleton className='w-full h-[170px]' />}

                <img src={image} alt={name} className={cn('object-cover w-full h-full', {
                    'grayscale': !active,
                    'hidden': !isImageLoaded
                })} onLoad={() => setIsImageLoaded(true)} />

                {(promo && isImageLoaded) && <Badge variant={'promo'} className='absolute left-0 top-4'>Promo</Badge>}

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

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={'primary'} disabled={!active}>
                            {active ? 'Show Details' : 'Unavailable'}
                        </Button>
                    </DialogTrigger>

                    <DialogContent className='border-none rounded-lg p-0 w-80 md:w-auto md:max-w-[600px]'>
                        <DialogHeader className='w-full h-[354px] overflow-hidden rounded-t-lg p-0 mb-6'>
                            <img src={image} alt={name} className={cn('object-cover w-full h-full')} />
                        </DialogHeader>

                        <DialogTitle data-testid="modal-product-title" className='px-6 mb-2'>
                            {name}
                        </DialogTitle>

                        <DialogDescription data-testid="modal-product-desc" className='px-6 pb-6'>
                            {description}
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card >
    )
}