import { useLocation } from 'react-router-dom';
import useIntersectionObserver from './hooks/useIntersectionObserver';

type NavbarTypes = {
	openMenu: boolean | null;
};

const Navbar = ({ openMenu }: NavbarTypes) => {

	const location = useLocation();

	useIntersectionObserver();

	let sideList = [
		{
			path: '#home',
			title: 'start',
			className: `nav-link`,
		},
		{
			path: '#about',
			title: 'o nas',
			className: 'nav-link',
		},
		{
			path: '#products',
			title: 'produkty',
			className: 'nav-link',
		},
		{
			path: '#reviews',
			title: 'opinie',
			className: 'nav-link',
		},
		{
			path: '#contact',
			title: 'kontakt',
			className: 'nav-link',
		},
	];

	if (location.pathname !== '/') {
		sideList = [
			{
				path: '/',
				title: 'strona główna',
				className: 'nav-link',
			},
		];
	}
	return (
		<nav className={`navbar ${openMenu ? 'active' : ''}`}>
			{sideList.map(({ path, title, className }, key) => {
				return (
					<a href={`${path}`} key={key} className={`${className} `}>
						{title}
					</a>
				);
			})}
		</nav>
	);
};

export default Navbar;
