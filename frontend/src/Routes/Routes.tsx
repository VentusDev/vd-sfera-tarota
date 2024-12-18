import MainLayout from '@/layouts/MainLayout';
import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import LoadingScreen from '@/components/LoadingScreen';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
	(
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);

//  * HOME PAGE
const Home = Loadable(lazy(() => import('@/pages/HomePage')));
const Order = Loadable(lazy(() => import('@/pages/PlaceOrderPage')));
const Product = Loadable(lazy(() => import('@/pages/ItemPage')));
const Category = Loadable(lazy(() => import('@/pages/CategoryPage')));
const Schuffle = Loadable(lazy(() => import('@/pages/SchufflePage')));
const routes: RouteObject[] = [
	{
		element: <MainLayout />,
		children: [
			{ path: '/:category/:itemName', element: <Product /> },
			{ path: '/:category', element: <Category /> },
			{ path: 'zamowienie', element: <Order /> },
			{ path: 'tarot', element: <Schuffle /> },

			{
				index: true,
				path: '*',
				element: <Home />,
			},
		],
	},
];

export default routes;
