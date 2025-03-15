import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorBoundry from '@/components/shared/ErrorBoundry';
import Suspense from '@/components/shared/Suspense';

import { ROUTE_PATHS } from '@/utils/constants/route.paths';

import MainLayout from '@/layouts/main-layout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const NewsContentPage = lazy(() => import('@/pages/NewsContentPage'));
const AboutDepartmentPage = lazy(() => import('@/pages/AboutDepartmentPage'));
const EducationalInstitutionsPage = lazy(
  () => import('@/pages/EducationalInstitutionsPage')
);
import NotFound from '@/pages/404/NotFound';

const routes = createBrowserRouter([
  {
    // Main layout
    path: ROUTE_PATHS.ROOT,
    element: (
      <ErrorBoundry>
        <MainLayout />
      </ErrorBoundry>
    ),
    // Main index page
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
      // News details page
      {
        path: `${ROUTE_PATHS.NEWS_CONTENT}/:id`,
        element: (
          <ErrorBoundry>
            <Suspense>
              <NewsContentPage />
            </Suspense>
          </ErrorBoundry>
        ),
      },

      //About department page
      {
        path: ROUTE_PATHS.ABOUT_DEPARTMENT,
        element: (
          <ErrorBoundry>
            <Suspense>
              <AboutDepartmentPage />
            </Suspense>
          </ErrorBoundry>
        ),
      },

      // Educational institutions page
      {
        path: ROUTE_PATHS.EDUCATIONAL_INSTITUTIONS,
        element: (
          <ErrorBoundry>
            <Suspense>
              <EducationalInstitutionsPage />
            </Suspense>
          </ErrorBoundry>
        ),
      },
    ],
  },
  // 404 page
  {
    path: '*',
    element: (
      <ErrorBoundry>
        <Suspense>
          <NotFound />
        </Suspense>
      </ErrorBoundry>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
