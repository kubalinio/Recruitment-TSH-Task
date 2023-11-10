import './wdyr';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/browser';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'app/shared/styles/globals.css';

import { AppProviders } from 'app/shared/providers/AppProviders';
import { AppRoutes } from 'app/shared/routing/AppRoutes';

const openReactQueryDevtools = import.meta.env.DEV;

if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({ dsn: import.meta.env.VITE_SENTRY_DSN });
}

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <AppProviders>
    <AppRoutes />
    {openReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
  </AppProviders>,
);
