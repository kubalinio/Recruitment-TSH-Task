import { ProductsMeta } from 'api/actions/products/products.types'
import { cn } from 'app/shared/utils/cn'

type Props = {
    meta: ProductsMeta
    handleCurrentPage: (number: string) => void
}

export function Pagination({
    meta,
    handleCurrentPage
}: Props) {
    const { totalPages, currentPage } = meta

    const createBtn = (i: number) => (
        <button key={i} onClick={() => handleCurrentPage(i.toString())} disabled={currentPage === i} className={cn('font-semibold p-1', {
            'text-accent': currentPage === i
        })}>
            {i}
        </button>
    )

    const createDots = () => <div className="">...</div>;

    const renderPageBtns = (start: number, end: number) => (
        Array.from({ length: end - start + 1 }, (_, i) => createBtn(start + i))
    );

    let pagesToDisplay;
    switch (true) {
        case totalPages <= 6:
            // Display pages 1 to 6 
            pagesToDisplay = [...renderPageBtns(1, totalPages)];
            break;

        case currentPage >= 3 && currentPage < totalPages - 5:
            // Display pages c-1 c c+1 ... t-2 t-1 t
            pagesToDisplay = [...renderPageBtns(currentPage - 1, currentPage + 1), createDots(), ...renderPageBtns(totalPages - 2, totalPages)];
            break;

        case currentPage >= totalPages - 5:
            // Display last 5 pages
            pagesToDisplay = [...renderPageBtns(totalPages - 5, totalPages)];
            break;

        default:
            // Display pages 1 2 3 ... t-2 t-1 t
            pagesToDisplay = [...renderPageBtns(1, 3), createDots(), ...renderPageBtns(totalPages - 2, totalPages)];
            break;
    }
    return (
        <div data-testid="pagination" className='flex items-center justify-center w-full gap-x-8'>
            <button onClick={() => handleCurrentPage('1')} disabled={currentPage === 1} className='disabled:text-disabled'>
                First
            </button>
            <div className='flex items-center gap-x-2'>
                {pagesToDisplay}
            </div>
            <button onClick={() => handleCurrentPage(totalPages.toString())} disabled={currentPage === totalPages} className='disabled:text-disabled'>
                Last
            </button>
        </div>
    )
}