import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from 'app/shared/layouts/DefaultLayout';
import { Home } from 'app/home/Home';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<DefaultLayout><Home /></DefaultLayout>} />

    <Route path="*" element={<DefaultLayout><Home /></DefaultLayout>} />
  </Routes>
);
