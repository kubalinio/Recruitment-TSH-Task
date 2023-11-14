import { render, screen } from 'tests';

import { Button } from './Button';

describe('Button', () => {
    test('renders primary button with default size', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('bg-primary', 'text-white', 'h-10', 'px-4', 'py-[11px]');
    });

    test('renders outline button with small size', () => {
        render(<Button variant="outline" size="sm">Click me</Button>);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('border', 'border-primary', 'bg-white', 'text-primary', 'h-9', 'rounded-md', 'px-3');
    });
});