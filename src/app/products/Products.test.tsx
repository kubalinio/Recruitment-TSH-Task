import { render, screen, waitFor } from 'tests';

import { Products } from './Products';

// Mock the useQuery hook
vitest.mock('app/shared/hooks', () => ({
    useQuery: vitest.fn(() => ({
        data: {
            items: [
                {
                    "name": "Handmade Plastic Tuna",
                    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                    "rating": 3,
                    "image": "https://picsum.photos/500/500",
                    "promo": true,
                    "active": true,
                    "id": "80a18bef-1242-4f99-912f-bccd0533f761"
                }
            ],
            meta: {
                "currentPage": 1,
                "itemCount": 8,
                "itemsPerPage": 8,
                "totalItems": 15,
                "totalPages": 2
            },
        },
        isLoadingAndEnabled: false,
        isError: false,
    })),
}));

// Mock the useSearchParams hook
vitest.mock('react-router-dom', async () => {
    const actual = await vitest.importActual<typeof import('react-router-dom')>('react-router-dom');
    return {
        ...actual,
        useSearchParams: () => ({
            get: vitest.fn(),
            set: vitest.fn(),
        }),
    };
});

describe('Products', () => {
    test('renders products and pagination'), async () => {
        render(
            < Products />
        );

        // Wait for data to be loaded
        await waitFor(() => {
            expect(screen.getByTestId('product-card')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByTestId('pagination')).toBeInTheDocument();
        });
    }
}); 
