import { ReactNode } from 'react';

import { Header } from './containers/Header';

interface DefaultLayoutProps {
    children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <>
            <Header />
            <main className='bg-[#F8F8FA]'>
                {children}
            </main>
        </>
    );
};
