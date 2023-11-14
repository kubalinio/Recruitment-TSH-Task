import { render, screen } from 'tests';

import { Input } from './Input';

describe('Input Component', () => {
    test('renders default input', () => {
        render(<Input data-testid="input" type='text' />);
        const input = screen.getByTestId('input');

        expect(input).toBeInTheDocument();
        expect(input).toHaveClass('border-input');
        expect(input).toHaveAttribute('type', 'text'); // Assuming default type is text
    });

    test('renders search input', () => {
        render(<Input data-testid="input" variant="search" />);
        const input = screen.getByTestId('input');

        expect(input).toBeInTheDocument();
        expect(input).toHaveClass('border-transparent');
        expect(input).toHaveClass('bg-transparent');
        expect(input).toHaveClass('h-full');
        expect(input).toHaveClass('py-3');
        expect(input).toHaveClass('focus-visible:ring-0');
        expect(input).toHaveClass('focus-visible:ring-offset-0');
    });

    test('renders disabled input with disabled prop', () => {
        render(<Input data-testid="input" disabled />);
        const input = screen.getByTestId('input');

        expect(input).toBeDisabled();
        expect(input).toHaveClass('disabled:cursor-not-allowed');
        expect(input).toHaveClass('disabled:opacity-50');
    });
});
