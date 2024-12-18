import { ChangeQtyButtons } from '@/components/ChangeQtyButtons';
import { CardFooter } from '@/components/ui/card';
import { PRODUCTS_DATA } from '@/lib/mockData';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useStore } from '@/store/store';
import { v4 as uuidv4 } from 'uuid';
import { convertSlug, getRandomItems } from '@/utils/functions';
import InitCartButton from '@/components/InitCartButton';
import SkillCard from '@/components/SkillCard';
import ItemsSection from '@/components/ItemsSection';

type ItemPageProps = {
	category: string;
	name: string;
};

const ItemPage = ({}: ItemPageProps) => {
	const cartProducts = useStore((state) => state.products);
	const navigate = useNavigate();
	const { category, itemName } = useParams<ItemPageProps | any>();

	useEffect(() => {
		if (
			PRODUCTS_DATA.filter(
				(product) =>
					convertSlug(product.category + '/' + product.name) ===
					convertSlug(`${category}/${itemName}`)
			).length < 1
		) {
			navigate('/');
			return;
		}
	}, []);

	let product = PRODUCTS_DATA.filter(
		(product) =>
			convertSlug(product.category + '/' + product.name) ===
			convertSlug(`${category}/${itemName}`)
	)[0];
	const { desc, price, id, name, list, imgs } = product;
	const [imgState, setImgState] = useState('');
	const [randomsItems, setRandomsItems] = useState(
		getRandomItems(
			PRODUCTS_DATA.filter((i) => i.id !== id),
			5
		)
	);

	const handleSetImg = (it:string) => {
		setImgState(it)
	}

	const location = useLocation();
	useEffect(() => {
		setImgState(imgs[0]);
		setRandomsItems(
			getRandomItems(
				PRODUCTS_DATA.filter((i) => i.id !== id),
				5
			)
		);
	}, [location]);

	return (
		<section className='pt-18 lg:pt-36 container py-20 '>
			<div className='grid lg:grid-cols-2 gap-10'>
				<div className='flex flex-col gap-10'>
					<h2 className='text-2xl'>{name}</h2>
					<CardFooter>
						<div className='price'>{price} PLN</div>
						{cartProducts.find((item) => item.id === id) ? (
							<ChangeQtyButtons productId={id} />
						) : (
							<InitCartButton product={product} />
						)}
					</CardFooter>
					{desc && desc}
					{list && (
						<div className='max-h-[300px] overflow-y-scroll grid gap-3'>
							{list.map((item) => (
								<SkillCard imgSrc={''} label={item} desc={''} key={uuidv4()} />
							))}
						</div>
					)}
				</div>

				<div className='flex flex-col gap-4'>
					<div className='flex items-center justify-center h-[500px]'>
						<img
							className=' rounded-lg object-contain object-center h-[500px]'
							src={imgState}
							alt={name}
						/>
					</div>
					{imgs.length > 1 && (
						<div className='flex flex-wrap mx-auto max-md:w-80'>
							{imgs.map((it) => (
								<div className='w-20 flex justify-center' 	key={uuidv4()}>
									<img
										src={it}
										alt={name}
										onClick={() => handleSetImg(it)}
										className='object-fill w-full object-center h-20 rounded-lg cursor-pointer'
									/>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<ItemsSection
				className='overflow-x-scroll max-md:no-scrollbar grid-cols-[repeat(5,_minmax(280px,_1fr))]'
				PRODUCTS_DATA={randomsItems}
				title='zobacz również'
			/>
		</section>
	);
};

export default ItemPage;
