import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

export function Navigation() {
    return (
        <nav className="app__navigation">
            <ul className="app__menu">
                <li className="app__menu-item">
                    <Link className="app__menu-link" to={AppRoute.home}>
                        Home
                    </Link>
                </li>
                <li className="app__menu-item">
                    <Link className="app__menu-link" to={AppRoute.about}>
                        About
                    </Link>
                </li>
                <li className="app__menu-item">
                    <Link className="app__menu-link" to={AppRoute.users}>
                        Users
                    </Link>
                </li>
                <li className="app__menu-item">
                    <Link className="app__menu-link" to={AppRoute.help}>
                        Help
                    </Link>
                </li>
            </ul>
        </nav>
    )
}