import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BurgerXMenu from './BurgerXMenu';
import Navbar from './Navbar';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	let activeClass = openMenu ? 'activeMenu' : '';

	const location = useLocation();

	useEffect(() => setOpenMenu(false), [location]);
	return (
		<header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 to zinc'>
			<div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-8 md:grid-cols-[1fr,3fr,1fr]'>
				<h1>
					<a className='logo' href='/'>
						<img
							src='/img/logo_text.svg'
							alt='Sfera Tarota logo'
							width={140}
							height={52}
						/>
					</a>
				</h1>
				<div className='relative flex'>
					<BurgerXMenu
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						activeClass={activeClass}
					/>
					<Navbar openMenu={openMenu} />
				</div>
			</div>
		</header>
	);
};

export default Header;
