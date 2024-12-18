import { cn } from '@/lib/utils';
import { ChangeQtyButtons } from '@/components/ChangeQtyButtons';
import { useStore } from '@/store/store';
import { convertSlug } from '@/utils/functions';
import { Link } from 'react-router-dom';
import InitCartButton from './InitCartButton';

type ItemCardProps = {
	item: {
		id: string;
		name: string;
		price: number;
		img: string;
		imgs: string[];
		category: string;
	};
	className?: string;
};

const ItemCard = ({ className, item }: ItemCardProps) => {
	const cartProducts = useStore((state) => state.products);
	const { name, imgs, price, category, id } = item;
	return (
		<div
			className={cn(
				' p-4 rounded-2xl glass-bg hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors',
				className
			)}
		>
			<figure className='relative h-[170px] w-full img-box aspect-square rounded-lg mb-4'>
				<img src={imgs[0]} alt={name} loading='lazy' className='img-cover' width={296} height={296} />
				<Link
					to={convertSlug('/' + category + '/' + name)}
					className='absolute inset-0 m-4'
				>
					więcej
				</Link>
			</figure>
			<h3 className='mb-3'>{name}</h3>
			<div className='flex items-center justify-between gap-4'>
				<div>
					<div className='flex flex-wrap items-center gap-2'>
						<span className='price'>{price} PLN</span>
					</div>
				</div>

				{cartProducts.find((it) => it.id === id) ? (
					<ChangeQtyButtons productId={id} />
				) : (
					<InitCartButton product={item} />
				)}
			</div>
		</div>
	);
};

export default ItemCard;
