import { PRODUCTS_DATA } from '@/lib/mockData';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { convertSlug } from '@/utils/functions';
import { Carousel } from '@/components/CarouselElement';
import ItemsSection from '@/components/ItemsSection';

type CategoryPageProps = {
	category: string;
};

const CategoryPage = () => {
	const navigate = useNavigate();
	const { category } = useParams<CategoryPageProps | string | any>();

	useEffect(() => {
		if (
			PRODUCTS_DATA.filter(
				(product) => convertSlug(product.category) === category
			).length < 1
		) {
			navigate('/');
			return;
		}
	}, []);

	let items = PRODUCTS_DATA.filter(
		(product) => convertSlug(product.category) === category
	);

	let images = import.meta.glob(
		'/public/img/category/bizuteria/*.{png,jpg,jpeg,svg}',
		{ eager: true }
	);
	if (category === 'karty') {
		images = import.meta.glob(
			'/public/img/category/karty/*.{png,jpg,jpeg,svg}',
			{ eager: true }
		);
	}
	if (category === 'akcesoria') {
		images = import.meta.glob(
			'/public/img/category/akcesoria/*.{png,jpg,jpeg,svg}',
			{ eager: true }
		);
	}
	

	return (
		<div className='mt-20'>
			<Carousel
				arrayLength={Object.keys(images).length}
				elements={Object.values(images).map((image: any, index) => (
					<div
						key={index}
						className='flex justify-center relative carousel-item flex-shrink-0 w-full max-h-[500px]'
					>
						<img
							key={index}
							src={image.default}
							alt={`Image ${index + 1}`}
							className='object-contain max-h-[500px]'
						/>
					</div>
				))}
				autoplayInterval={5000}
			/>
			<ItemsSection PRODUCTS_DATA={items} title={`produkty z kategorii: ${category}`} />
		</div>
	);
};

export default CategoryPage;
