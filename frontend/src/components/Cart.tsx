import { Delete, CircleX } from '@/assets/icons/icons';
import { useShallow } from 'zustand/react/shallow';

import { ChangeQtyButtons } from '@/components/ChangeQtyButtons';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useStore } from '@/store/store';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export function Cart() {
	const { reset, products, removeProduct, total } = useStore(
		useShallow((state) => ({
			reset: state.reset,
			products: state.products,
			removeProduct: state.removeProduct,
			total: state.total,
			quantity: state.quantity,
			address: state.address,
		}))
	);

	const handleCartReset = () => {
		if (window.confirm('na pewno chcesz opróżnić swój koszyk?')) {
			reset();
			toast.success('koszyk czysty');
		}
	};

	return (
		<>
			<div className='flex gap-2 text-lg items-center mt-10'>
				<Button
					onClick={() => handleCartReset()}
					variant='destructive'
					size='icon'
				>
					<CircleX />
				</Button>
				<h4>opróżnij koszyk</h4>
			</div>
			<div className='space-y-2 overflow-y-scroll h-[50vh] '>
				{products.map((product) => (
					<Card className='flex flex-col' key={product.id}>
						<CardHeader className='flex flex-row items-center gap-2'>
							<CardTitle className='text-sm'>{product.name}</CardTitle>
							<Button
								onClick={() => {
									if (window.confirm('na pewno chcesz usunąć przedmioty?')) {
										removeProduct(product.id);
									}
								}}
								size='icon'
								variant='destructive'
							>
								<Delete />
							</Button>
						</CardHeader>

						<CardFooter>
							<span className='price'>{product.price} PLN</span>
							<ChangeQtyButtons productId={product.id} />
						</CardFooter>
					</Card>
				))}
			</div>
			<p className='price text-center mb-3'>
				Podsumowanie koszyka <br />
				{total} PLN
			</p>
			<Link className='bg-action absolute bottom-5' to='/zamowienie'>
				Złóż zamówienie
			</Link>
		</>
	);
}
