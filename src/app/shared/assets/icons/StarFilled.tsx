interface Props {
    className?: string
    color?: string
    fill?: string
}

export function StarFilled({ className, color, fill }: Props) {
    return (
        <span className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={color}>
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill={fill} />
            </svg>
        </span>
    )
}