import { render, act, screen } from 'tests';

import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
    test('renders unchecked checkbox', () => {
        render(<Checkbox data-testid="checkbox" />);
        const checkbox = screen.getByTestId('checkbox');

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toHaveAttribute('data-state', 'checked');
    });

    test('toggles checkbox state on click', () => {
        render(<Checkbox data-testid="checkbox" />);
        const checkbox = screen.getByTestId('checkbox');

        act(() => checkbox.click())

        expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    test('handles click event with provided onClick handler', () => {
        const onClickMock = vitest.fn();
        render(<Checkbox data-testid="checkbox" onClick={onClickMock} />);
        const checkbox = screen.getByTestId('checkbox');

        act(() => checkbox.click())

        expect(checkbox).toHaveAttribute('data-state', 'checked');
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('renders checked checkbox initially with defaultChecked prop', () => {
        render(<Checkbox data-testid="checkbox" defaultChecked />);
        const checkbox = screen.getByTestId('checkbox');

        expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    test('renders disabled checkbox with disabled prop', () => {
        render(<Checkbox data-testid="checkbox" disabled />);
        const checkbox = screen.getByTestId('checkbox');

        expect(checkbox).toBeDisabled();
        expect(checkbox).toHaveClass('disabled:cursor-not-allowed');
        expect(checkbox).toHaveClass('disabled:opacity-50');
    });
});
