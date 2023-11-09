
import logo from 'assets/images/logo.svg';
import { ReactComponent as ViteLogo } from 'assets/images/vite-logo.svg';
import { ReactComponent as VitestLogo } from 'assets/images/vitest-logo.svg';

// type Props = {}
// { }: Props

export function Header() {
    return (
        <header className="app__header">
            <img src={logo} className="app__logo" alt="logo" />
            <p>
                Edit <code>src/layout/Layout.tsx</code> and save to reload.
            </p>
            <a className="app__link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a className="app__link" href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <ViteLogo />
                </a>
                <a className="app__link" href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">
                    <VitestLogo />
                </a>
            </p>
        </header>
    )
}