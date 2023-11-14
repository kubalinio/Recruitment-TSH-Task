import { render, screen } from 'tests';

import { Badge } from './Badge';

describe('Badge', () => {
    test('renders default badge', () => {
        render(<Badge>Default Badge</Badge>);
        const badge = screen.getByText('Default Badge');

        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass('border-transparent', 'bg-gray-900', 'text-gray-50', 'hover:bg-gray-900/80');
    });

    test('renders promo badge', () => {
        render(<Badge variant="promo">Promo Badge</Badge>);
        const badge = screen.getByText('Promo Badge');

        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass('border-transparent', 'bg-secondary', 'px-4', 'py-1', 'text-white', 'text-sm', 'pointer-events-none');
    });
});
