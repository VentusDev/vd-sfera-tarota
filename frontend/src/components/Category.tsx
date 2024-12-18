import { Carousel } from '@/components/CarouselElement';
import { convertSlug } from '@/utils/functions';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const items = [
	{ imgSrc: '/img/karty.jpg', name: 'karty' },
	{ imgSrc: '/img/akcesoria.jpg', name: 'akcesoria' },
	{ imgSrc: '/img/biżuteria.jpg', name: 'biżuteria' },
];

const Category = () => {
	return (
		<div className='container mx-auto my-5'>
			<h1 className='text-3xl font-bold mb-5 text-right'>kategorie</h1>
			<Carousel
				arrayLength={items.length}
				elements={items.map(({ name, imgSrc }) => (
					<Link
						to={`/${convertSlug(name)}`}
						key={uuidv4()}
						className='flex justify-center relative carousel-item flex-shrink-0 w-full max-h-[500px]'
					>
						<img
							src={imgSrc}
							alt={`odnośnik do kategorii ${name}`}
							className='w-auto max-h-[500px]'
							height={500}
							width={1200}
						/>

						<p className='absolute bottom-0 my-5 text-2xl font-bold '>{name}</p>
					</Link>
				))}
				autoplayInterval={5000}
			/>
		</div>
	);
};

export default Category;
