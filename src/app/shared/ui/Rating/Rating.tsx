import React from 'react'
import { StarIcon } from 'lucide-react'

import { cn } from 'app/shared/utils/cn'

export interface RatingProps
    extends React.HTMLAttributes<HTMLDivElement> {
    rating: number
}

const Rating = React.forwardRef<
    HTMLDivElement,
    RatingProps
// eslint-disable-next-line react/prop-types
>(({ rating, className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex items-center gap-2",
            className
        )}
        {...props}
    >
        {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
                className='w-3 h-3'
                key={index + 1}
                color={rating >= index + 1 ? '#F9A52B' : '#B1B5C9'}
                fill={rating >= index + 1 ? '#F9A52B' : 'transparent'}
            />
        ))}
    </div>
))
Rating.displayName = "Rating"
export { Rating }