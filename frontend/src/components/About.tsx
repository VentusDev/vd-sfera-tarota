import { v4 as uuidv4 } from 'uuid';

const aboutItems = [
	{
		label: 'lat doświadczenia',
		number: '<5',
	},
	{
		label: 'wróżb',
		number: '<1000',
	},
];

const About = () => {
	return (
		<section id='about' className='section'>
			<div className='container'>
				<h2 className='headline-2 text-end my-5'>o nas</h2>
				<div className='glass-bg p-7 md:p-10'>
					<p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
						Sfera Tarota to miejsce, w którym można wyczuć mistyczną aurę.<br/> Od lat zajmujemy się tematyką Tarota oraz wszelakiego wróżbiarstwa. Postanowiliśmy podzielić się naszą wiedzą z aktualnymi pasjonatami, jak również osobami wkraczającymi w ten mistyczny świat. <br/> Oprócz tematycznych przedmiotów oferujemy również usługi związane z czytaniem kart. Sesje prowadzone są fizycznie jak również w opcji online poprzez wykorzystanie aplikkacji do czytania kart. <br/> Serdecznie zapraszamy do skorzystania z naszych usług! 
					</p>

					<div className='flex flex-wrap items-center gap-4 md:gap-7'>
						{aboutItems.map(({ label, number }) => (
							<div key={uuidv4()}>
								<div className='flex items-center md:mb-2'>
									<span className='text-2xl font-bold md:text-4xl'>
										{number}
									</span>
									<span className='text-red-600 font-semibold md:text-3xl'>
										+
									</span>
								</div>
								<p className='text-sm text-zinc-400'>{label}</p>
							</div>
						))}
						<img
							src='/img/logo_text.svg'
							alt='Sfera Tarota Logo'
							className='ml-auto md:w-[420px]'
							height={130}
							width={280}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
