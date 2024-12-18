import { useEffect, type FC, type ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import ShopingCartSideBar from '@/components/ShopingCartSideBar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useHashFragment } from '@/components/hooks/useHashFragment';
import { Button } from '@/components/ui/button';
import { useEffectOnce } from '@/components/hooks/useEffectOnce';

interface MainLayoutProps {
	children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	useHashFragment();

	const location = useLocation();
	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1));
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}, [location]);

	const demoToast = () => {
		toast(
			(t) => (
				<section className='grid'>
					<p>
						Cześć.🫡 <br />
						Strona, którą odwiedzasz jest wersją demo stworzoną pod moje
						portfolio. <br />
						Miłego przeglądania!
					</p>
					<div className='flex justify-between'>
						<Button
							variant='destructive'
							className='mt-10'
							onClick={() => {
								toast.dismiss(t.id);
								localStorage.setItem('vd-poker-szop-consent', 'true');
							}}
						>
							Dzięki!
						</Button>
						<a
							href='https://ventus-dev.netlify.app'
							target='_blank'
							className='hover:text-red-700 transition-colors'
						>
							dowiedz się więcej
							<img className='m-auto' src='/img/vd.svg' width={80} />
						</a>
					</div>
				</section>
			),
			{
				position: 'bottom-center',
				duration: 10000000,
			}
		);
	};

	useEffectOnce(() => {
		if (!localStorage.getItem('vd-poker-szop-consent')) {
			demoToast();
		}
	});

	return (
		<>
			<Header />
			{children || <Outlet />}
			<Footer />
			<Toaster />
			<ShopingCartSideBar />
		</>
	);
};

export default MainLayout;
