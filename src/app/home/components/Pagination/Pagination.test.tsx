import { render, act } from 'tests';
import { ProductsMeta } from 'api/actions/products/products.types';

import { Pagination } from './Pagination';

// Mock handleCurrentPage function
const mockHandleCurrentPage = vitest.fn();

// Mock ProductsMeta
const mockMeta: ProductsMeta = {
    totalPages: 10,
    currentPage: 6,
    itemCount: 8,
    itemsPerPage: 8,
    totalItems: 74
};

const setup = () => {
    const { container, getByTestId, getByText, getByRole } = render(
        <Pagination meta={mockMeta} handleCurrentPage={mockHandleCurrentPage} />
    );

    return { container, getByTestId, getByText, getByRole };
};

describe('Pagination', () => {
    test('renders pagination component', () => {
        const { getByTestId } = setup();
        const paginationElement = getByTestId('pagination');

        expect(paginationElement).toBeInTheDocument();
    });

    test('renders correct number of buttons based on totalPages', () => {
        const { getByTestId } = setup();
        const paginationElement = getByTestId('pagination');

        const buttons = Array.from(paginationElement.querySelectorAll('button'));

        // Assuming totalPages is 10, so there should be 8 buttons (First, Last, and 6 page buttons(1,2,3 ... 8,9,10))
        expect(buttons.length).toBe(8);
    });

    test('handles button click events correctly', async () => {
        const { getByTestId } = setup();

        // Trigger button clicks
        act(() => getByTestId('pag-first-button').click())
        act(() => getByTestId('pag-last-button').click())

        // Ensure that handleCurrentPage was called with the correct arguments
        expect(mockHandleCurrentPage).toHaveBeenCalledWith('1');
        expect(mockHandleCurrentPage).toHaveBeenCalledWith('10');
    });

    test('renders correct number of buttons in last page', async () => {
        const { getByTestId, getByRole } = setup();
        const paginationElement = getByTestId('pagination');
        const lastButton = getByRole('button', { name: /last/i });

        // Trigger button clicks
        act(() => lastButton.click())

        // Ensure that handleCurrentPage was called with the correct arguments
        expect(mockHandleCurrentPage).toHaveBeenCalledWith('10');

        const buttons = Array.from(paginationElement.querySelectorAll('button'));

        expect(buttons.length).toBe(8);
    });

    test('checks if the current page is active', () => {
        const { getByRole } = setup();

        // Check if the button corresponding to the current page has the 'text-accent' class
        const activePageButton = getByRole('button', { name: '6' });
        expect(activePageButton).toHaveClass('text-accent');
    });
})






