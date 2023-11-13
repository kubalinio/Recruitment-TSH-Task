import { SearchIcon } from '../assets/icons'
import { Input } from '../ui'
import { cn } from '../utils/cn'

interface SearchInputProps {
    className?: string;
    onChange: (value: string) => void
    value: string
}

export function SearchInput({ className, onChange, value }: SearchInputProps) {
    return (
        <div className={cn('relative', className)}>
            <Input value={value} onChange={(e) => onChange(e.target.value)} variant='search' className='px-2 transition-all duration-200 border border-gray-500 rounded-md cursor-pointer hover:border-accent focus:border-accent active:border-accent' placeholder='Search' />

            <SearchIcon className='absolute -translate-y-1/2 pointer-events-none right-2 top-1/2' />
        </div>
    )
}