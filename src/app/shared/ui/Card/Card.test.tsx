import { render, screen } from 'tests';

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from './Card';

describe('Card Components', () => {
    test('renders Card', () => {
        render(<Card />);
        const card = screen.getByTestId('card');

        expect(card).toBeInTheDocument();
    });

    test('renders CardHeader', () => {
        render(<CardHeader />);
        const cardHeader = screen.getByTestId('card-header');

        expect(cardHeader).toBeInTheDocument();
    });

    test('renders CardFooter', () => {
        render(<CardFooter />);
        const cardFooter = screen.getByTestId('card-footer');

        expect(cardFooter).toBeInTheDocument();
    });

    test('renders CardTitle', () => {
        render(<CardTitle />);
        const cardTitle = screen.getByTestId('card-title');

        expect(cardTitle).toBeInTheDocument();
    });

    test('renders CardDescription', () => {
        render(<CardDescription />);
        const cardDescription = screen.getByTestId('card-description');

        expect(cardDescription).toBeInTheDocument();
    });

    test('renders CardContent', () => {
        render(<CardContent />);
        const cardContent = screen.getByTestId('card-content');

        expect(cardContent).toBeInTheDocument();
    });
});
