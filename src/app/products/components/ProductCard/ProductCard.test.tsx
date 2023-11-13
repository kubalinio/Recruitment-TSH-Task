import { render, screen, act } from 'tests';
import { Product } from 'api/actions/products/products.types';

import { ProductCard } from './ProductCard';

const mockProduct: Product = {
    id: '1',
    active: true,
    description: 'Sample Description',
    image: 'sample-image.jpg',
    name: 'Sample Product',
    promo: true,
    rating: 4,
};

describe('ProductCard', () => {
    it('renders product card correctly', () => {
        render(<ProductCard product={mockProduct} />);

        // Assertions for the rendered content
        expect(screen.getByTestId('product-card')).toBeInTheDocument();
        expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
        expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
        expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
        expect(screen.getByText('Show Details')).toBeInTheDocument();
    });

    it('displays promo badge when promo is true', () => {
        render(<ProductCard product={mockProduct} />);

        // Assertion for the presence of promo badge
        expect(screen.getByText('Promo')).toBeInTheDocument();
    });

    it('displays "Unavailable" button when product is not active', () => {
        const notActiveProduct = { ...mockProduct, active: false };
        render(<ProductCard product={notActiveProduct} />);

        // Assertion for the "Unavailable" button
        expect(screen.getByText('Unavailable')).toBeInTheDocument();
    });

    it('opens the dialog when "Show Details" button is clicked', () => {
        render(<ProductCard product={mockProduct} />);

        // Click on the "Show Details" button to trigger the dialog
        act(() => screen.getByText('Show Details').click())

        // Assertions for the opened dialog content
        expect(screen.getByTestId('modal-product-title')).toBeInTheDocument();
        expect(screen.getByTestId('modal-product-desc')).toBeInTheDocument();
    });

});