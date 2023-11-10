import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from 'app/shared/layouts/DefaultLayout';
import { Products } from 'app/products/Products';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  // <Routes>
  //   <Route path={AppRoute.home} element={<DefaultLayout />}>
  //     <Route path={AppRoute.about} element={<About />} />
  //     <Route path={AppRoute.home} element={<Home />} />
  //     <Route path={AppRoute.help} element={<Help />} />
  //     <Route path={AppRoute.user} element={<User />} />
  //     <Route path={AppRoute.users} element={<UsersList />} />
  //     <Route path="*" element={<Home />} />
  //   </Route>
  // </Routes>

  <Routes>
    <Route path={AppRoute.home} element={<DefaultLayout><Products /></DefaultLayout>} />
  </Routes>

);
