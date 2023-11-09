import { Outlet } from 'react-router-dom';

import './Layout.css';
import { Header } from './containers/Header';
import { Navigation } from './containers/Navigation';

export const DefaultLayout = () => {
    return (
        <body className="app">
            <Header />
            <Navigation />
            <main className="app__main">
                <Outlet />
            </main>
        </body>
    );
};
