import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { CheckboxWithText } from 'app/shared/components/CheckboxWithText'
import { SearchInput } from 'app/shared/components/SearchInput'
import { useDebounce } from 'app/shared/hooks'

export function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [activeCheck, setActiveCheck] = useState(searchParams.get('active') ?? 'false')
    const [promoCheck, setPromoCheck] = useState(searchParams.get('promo') ?? 'false')
    const [searchValue, setSearchValue] = useState(searchParams.get('search') ?? '')
    const debouncedSearchValue = useDebounce<string>(searchValue, 500)

    const handleSearch = (value: string) => {
        setSearchValue(value)
    }

    useEffect(() => {
        setSearchParams((prev) => {
            prev.delete('page');
            debouncedSearchValue !== '' ? prev.set('search', debouncedSearchValue) : prev.delete('search')
            return prev;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchValue])

    const sortProducts = async (data: { promo: string } | { active: string }) => {
        if (data) {
            setSearchParams((prev) => {
                prev.delete('page');
                if ('active' in data) {
                    setActiveCheck(data.active && data.active);
                    data.active === 'true' ? prev.set('active', data.active) : prev.delete('active')
                }

                if ('promo' in data) {
                    setPromoCheck(data.promo && data.promo);
                    data.promo === 'true' ? prev.set('promo', data.promo) : prev.delete('promo')
                }

                return prev;
            });
        }
    }

    return (
        <div className='order-3 w-full mt-7 md:order-2 md:w-2/4 md:flex md:items-center md:mt-0 md:gap-x-6'>
            <SearchInput className='md:flex-grow' value={searchValue} onChange={handleSearch} />

            <div className='flex mt-6 gap-x-8 md:mt-0'>
                <CheckboxWithText id="active" label="Active" checked={activeCheck === 'true' ? true : false} onCheckedChange={checked => sortProducts({ active: checked.toString() })} />
                <CheckboxWithText id="promo" label="Promo" checked={promoCheck === 'true' ? true : false} onCheckedChange={checked => sortProducts({ promo: checked.toString() })} />
            </div>
        </div>
    )
}