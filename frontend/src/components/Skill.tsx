import { v4 as uuidv4 } from 'uuid';
import SkillCard from './SkillCard';

const skillItem = [
	{
		imgSrc: '/img/logo.svg',
		label: 'lorem',
		desc: 'lorem ipsum dolor',
	},
	{
		imgSrc: '/img/logo.svg',
		label: 'lorem',
		desc: 'lorem ipsum dolor',
	},
	{
		imgSrc: '/img/logo.svg',
		label: 'lorem',
		desc: 'lorem ipsum dolor',
	},
	{
		imgSrc: '/img/logo.svg',
		label: 'lorem',
		desc: 'lorem ipsum dolor',
	},
	{
		imgSrc: '/img/logo.svg',
		label: 'lorem',
		desc: 'lorem ipsum dolor',
	},
	{
		imgSrc: '/img/logo.svg',
		label: 'lorem',
		desc: 'lorem ipsum dolor',
	},
];


const Skill = () => {
	return (
		<section className='section'>
			<div className='container'>
				<h2 className='headline-2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h2>

				<p className=''>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
					velit cupiditate? Obcaecati ex pariatur at delectus natus autem omnis,
					hic impedit dolores molestiae. Provident dolor quo aliquam qui
					nesciunt excepturi!
				</p>

				<div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
					{skillItem.map(({ imgSrc, label, desc }) => (
						<SkillCard
							imgSrc={imgSrc}
							label={label}
							desc={desc}
							key={uuidv4()}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skill;
