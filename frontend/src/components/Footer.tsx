import { v4 as uuidv4 } from 'uuid';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const siteMap = [
	{
		label: 'start',
		href: '/',
	},
	{
		label: 'o nas',
		href: '#about',
	},
	{
		label: 'produkty',
		href: '#products',
	},
	{
		label: 'opinie',
		href: '#reviews',
	},
	{
		label: 'kontakt',
		href: '#contact',
	},
	{
		label: 'złóż zamówienie',
		link: '/zamowienie',
	},
	{
		label: 'czytanie kart',
		link: '/tarot',
	},
];

const socials = [
	{
		label: 'Instagram',
		href: '/',
	},
	{
		label: 'Facebook',
		href: '/',
	},
];

const Footer = () => {
	return (
		<footer className='section mt-20 min-h-[400px]'>
			<div className='container text-[12px] md:text-[16px]'>
				<div className='lg:grid lg:grid-cols-2'>
					<div className='mb-10'>
						<h2 className='headline-2 mb-8 text-5xl font-bold'>
							kontakt mailowy
						</h2>
						<a href={`mailto:${import.meta.env.VITE_MAIL}`}>
							<Button>wyślij mail</Button>
						</a>
					</div>

					<div className='grid grid-cols-2 gap-4 lg:pl-20'>
						<div>
							<p className='mb-2'>mapa strony</p>
							<ul>
								{siteMap.map(({ label, href, link }) => {
									if (link) {
										return (
											<li key={uuidv4()}>
												<Link to={link} className='footer-link'>
													{label}
												</Link>
											</li>
										);
									} else {
										return (
											<li key={uuidv4()}>
												<a
													href={import.meta.env.VITE_CLIENT_URL + href}
													className='footer-link'
												>
													{label}
												</a>
											</li>
										);
									}
								})}
							</ul>
						</div>
						<div>
							<p className='mb-2'>portale społecznościowe</p>
							<ul>
								{socials.map(({ label /* , href  */ }) => (
									<li key={uuidv4()}>
										<a
											/* href={href} */ onClick={() =>
												toast.success('odnośnik do ustawienia w wersji PRO ;)')
											}
											className='block-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
											target='_blank'
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-between pt-10 mb-8'>
					<a href='/'>
						<img
							src='/img/logo_text.svg'
							width={150}
							height={100}
							alt='Sfera Tarota Logo'
						/>
					</a>
					<p className='text-zinc-400 text-sm'>
						&copy; 2024{' '}
						<a
							href={import.meta.env.VITE_PORTFOLIO_URL}
							className='text-zinc-200'
						>
							VentusDev
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
