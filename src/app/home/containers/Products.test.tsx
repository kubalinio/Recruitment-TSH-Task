
// Products.test.tsx
import { ReactNode, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, waitFor, screen } from 'tests';

import { Products } from './Products';

// Mock useQuery hook
vitest.mock('app/shared/hooks', () => ({
    useQuery: vitest.fn(() => ({
        data: {
            items: [
                {
                    name: 'Handmade Plastic Tuna',
                    description: 'New range of formal shirts are designed keeping you in mind.',
                    rating: 3,
                    image: 'https://picsum.photos/500/500',
                    promo: true,
                    active: true,
                    id: '80a18bef-1242-4f99-912f-bccd0533f761',
                },
            ],
            meta: {
                currentPage: 1,
                itemCount: 8,
                itemsPerPage: 8,
                totalItems: 15,
                totalPages: 2,
            },
        },
        isLoadingAndEnabled: false,
        isError: false,
    })),
}));

let mockSearchParam = '';

vitest.mock('react-router-dom', async () => {
    const actual = await vitest.importActual<typeof import('react-router-dom')>('react-router-dom');

    return {
        ...actual,
        MemoryRouter: ({ children }: { children: ReactNode }) => <div>{children}</div>,
        useSearchParams: () => {
            const [params, setParams] = useState(new URLSearchParams(mockSearchParam));
            return [
                params,
                (newParams: string) => {
                    mockSearchParam = newParams;
                    setParams(new URLSearchParams(newParams));
                }
            ];
        }
    }
});

const Wrapper = () => {
    return <MemoryRouter initialEntries={['/']}>
        <Products />
    </MemoryRouter>
}

describe('Products', () => {
    afterEach(() => {
        vitest.clearAllMocks();
    });

    test('renders products and pagination', async () => {
        render(<Wrapper />);

        await waitFor(() => {
            expect(screen.getByTestId('product-card')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByTestId('pagination')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Handmade Plastic Tuna')).toBeInTheDocument();
        });
    });

    // test('renders error message when data loading fails', async () => {
    //     // Set the useQuery mock to simulate an error state
    //     vitest.mock('app/shared/hooks', () => ({
    //         useQuery: vitest.fn(() => ({
    //             isLoadingAndEnabled: false,
    //             isError: true,
    //         })),
    //     }));

    //     render(
    //         <MemoryRouter initialEntries={['/']}>
    //             <Products />
    //         </MemoryRouter>
    //     );

    //     // Wait for the error message to appear
    //     await waitFor(() => {
    //         expect(screen.getByText('Something goes wrong ...')).toBeInTheDocument()
    //     });
    // });
});
