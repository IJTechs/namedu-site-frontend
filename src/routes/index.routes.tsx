import ErrorBoundry from '@components/shared/ErrorBoundry';
import Suspense from '@components/shared/Suspense';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

const HomePage = lazy(() => import('@pages/Home/Home'));
const NewsPage = lazy(() => import('@pages/News/News'));
import { ROUTE_PATHS } from '@/constants/route.paths';
import NotFound from '@/pages/404/NotFound';

const routes = createBrowserRouter([
  {
    path: ROUTE_PATHS.ROOT,
    element: (
      <ErrorBoundry>
        <MainLayout />
      </ErrorBoundry>
    ),
    children: [
      {
        index: true,
        element: (
          <ErrorBoundry>
            <Suspense>
              <HomePage />
            </Suspense>
          </ErrorBoundry>
        ),
      },
      {
        path: `${ROUTE_PATHS.NEWS_DETAILS}/:id`,
        element: (
          <ErrorBoundry>
            <Suspense>
              <NewsPage />
            </Suspense>
          </ErrorBoundry>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
