import { render, screen, act } from 'tests';

import {
    Dialog,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from './Dialog';

describe('Dialog Component', () => {
    test('renders the dialog correctly', () => {
        render(
            <Dialog>
                <DialogTrigger>
                    <button>Open Dialog</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogClose />
                    </DialogHeader>
                    <DialogDescription>Dialog Description</DialogDescription>
                    <DialogFooter>
                        <button>Cancel</button>
                        <button>Confirm</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );

        // Assertions for the rendered content
        expect(screen.getByText('Open Dialog')).toBeInTheDocument();
        act(() => screen.getByText('Open Dialog').click())

        // Additional assertions for the open dialog content
        expect(screen.getByText('Dialog Title')).toBeInTheDocument();
        expect(screen.getByText('Dialog Description')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
        expect(screen.getByText('Confirm')).toBeInTheDocument();
    });
});
