import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorBoundry from '@components/shared/ErrorBoundry';
import Suspense from '@components/shared/Suspense';

import MainLayout from '@/layouts/MainLayout';

const HomePage = lazy(() => import('@pages/Home/Home'));
const NewsPage = lazy(() => import('@pages/News/News'));

const routes = createBrowserRouter([
  {
    path: '/',
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
        path: 'news/:news_id',
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
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
