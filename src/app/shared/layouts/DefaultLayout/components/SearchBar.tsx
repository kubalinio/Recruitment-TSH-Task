import { CheckboxWithText } from 'app/shared/components/CheckboxWithText'
import { SearchInput } from 'app/shared/components/SearchInput'

export function SearchBar() {
    return (
        <div className='order-3 w-full mt-7 md:order-2 md:w-2/4 md:flex md:items-center md:mt-0 md:gap-x-6'>
            <SearchInput className='md:flex-grow' />

            <div className='flex mt-6 gap-x-8 md:mt-0'>
                <CheckboxWithText id="active" label="Active" />
                <CheckboxWithText id="promo" label="Promo" />
            </div>
        </div>
    )
}