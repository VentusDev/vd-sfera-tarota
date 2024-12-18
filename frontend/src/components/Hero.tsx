import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Hero = () => {
	return (
		<section id='home' className='pt-18 lg:pt-36 mt-20'>
			<div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
				<div>
					<div className='flex items-center gap-3'>
						<figure className='img-box w-9 h-9 rounded-lg'>
							<img
								src='/img/logo.svg'
								width={60}
								height={74}
								alt='Logo nas'
								className='img-cover'
							/>
						</figure>

						<div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
							<span className='relative w-2 h-2 rounded-full bg-fuchsia-400'>
								<span className='absolute w-2 h-2 rounded-full bg-fuchsia-400 animate-ping'></span>
							</span>
							sprawdźmy przyszłość
						</div>
					</div>
					<h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 lg:mb-10'>
					...wróżby spełniają się niekiedy, jeżeli człowiek im trochę pomaga.
					</h2>
					<p className='text-rose-500 py-8 lg:text-xl'>
							--Alfred Szklarski
						</p>
					<div className='flex items-center gap-3'>
						<a href='#about' title='dowiedz się więcej'>
							<Button>więcej o nas</Button>
						</a>
						<Link to='/tarot' title='wywróż sobie przyszłość'>
							<Button>czytanie kart</Button>
						</Link>
					</div>
				</div>

				<figure className='w-full max-w-[480px] ml-auto overflow-hidden '>
					<img
						src='img/hero.png'
						width={656}
						height={800}
						alt='Sfera Tarota, choose a card'
						className='w-full'
					/>
				</figure>
			</div>
		</section>
	);
};

export default Hero;
