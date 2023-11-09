import { Route, Routes } from 'react-router-dom';

import { About } from 'app/about/About';
import { Help } from 'app/help/Help';
import { Home } from 'app/home/Home';
import { User } from 'app/user/User';
import { UsersList } from 'app/usersList/UsersList';
import { DefaultLayout } from 'app/layout/DefaultLayout';

import { AppRoute } from './AppRoute.enum';


export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<DefaultLayout />}>
      <Route path={AppRoute.home} element={<Home />} />
      <Route path={AppRoute.about} element={<About />} />
      <Route path={AppRoute.help} element={<Help />} />
      <Route path={AppRoute.user} element={<User />} />
      <Route path={AppRoute.users} element={<UsersList />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);
