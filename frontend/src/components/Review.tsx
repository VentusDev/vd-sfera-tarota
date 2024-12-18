import { v4 as uuidv4 } from 'uuid';
import ReviewCard from './ReviewCard';
import { Carousel } from './CarouselElement';

const reviewList = [
	{
		imgSrc: 'p1.svg',
		name: 'Maria',
		content:
			'Część się sprawdziła, część jeszcze nie. Dalej czekam.',
		company: '',
	},
	{
		imgSrc: 'p2.svg',
		name: 'Michaś',
		content:
			'Mają spoko kamienie. Dziewczyna była zadowolona z prezentu.',
		company: '',
	},
	{
		imgSrc: 'p3.svg',
		name: 'Kornelia',
		content: 'Dobre produkty, sprawdzone wróżby. Poleciłam znajomym.',
		company: '',
	},
	{
		imgSrc: 'p4.svg',
		name: 'Marcel',
		content: 'Nie wiem czy wierzyć czy nie. Zobaczymy.',
		company: '',
	},
];

const Review = () => {
	return (
		<section className='section overflow-hidden min-h-[700px] flex flex-col justify-center' id='reviews'>
			<div className='container mx-auto'>
				<h1 className='headline-2 mb-5 text-right'>opinie</h1>
				<Carousel
					arrayLength={reviewList.length}
					elements={reviewList.map(({ imgSrc, company, content, name }) => (
						<div
							key={uuidv4()}
							className='flex  py-5 justify-center relative carousel-item flex-shrink-0 w-full max-h-[500px]'
						>
							<ReviewCard
								imgSrc={imgSrc}
								company={company}
								content={content}
								name={name}
							/>
						</div>
					))}
					autoplayInterval={6500}
				/>
			</div>
		</section>
	);
};

export default Review;
