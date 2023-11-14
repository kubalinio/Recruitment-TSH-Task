import { render, screen } from 'tests';

import { Rating } from './Rating';

describe('Rating Component', () => {
    test('renders rating with correct stars', () => {
        render(<Rating data-testid="rating" rating={3} />);
        const rating = screen.getByTestId('rating');
        const stars = rating.querySelectorAll('svg');

        expect(rating).toBeInTheDocument();
        expect(stars.length).toBe(5);

        // Check if the first three stars are filled
        for (let i = 0; i < 3; i++) {
            const star = stars[i];
            expect(star).toHaveAttribute('fill', '#F9A52B');
        }

        // Check if the last two stars are not filled
        for (let i = 3; i < 5; i++) {
            const star = stars[i];
            expect(star).toHaveAttribute('fill', 'transparent');
        }
    });
});