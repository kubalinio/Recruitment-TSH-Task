import { CheckboxWithText } from 'app/shared/components/CheckboxWithText'
import { SearchInput } from 'app/shared/components/SearchInput'

export function SearchBar() {
    return (
        <div className='order-3 w-full mt-7'>
            <SearchInput />

            <div className='flex mt-6 gap-x-8'>
                <CheckboxWithText id="active" label="Active" />
                <CheckboxWithText id="promo" label="Promo" />
            </div>

        </div>
    )
}