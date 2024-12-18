import { useStore } from '@/store/store';
import toast from 'react-hot-toast';
import { Button } from './ui/button';

type InitCartButtonProps = {
	product: object;
};

const InitCartButton = ({ product }: InitCartButtonProps) => {
	const addProduct = useStore((state) => state.addProduct);

	const handleAdd = (product: any) => {
		addProduct(product);
		toast.success(`${product.name} już w koszyku`);
		console.log(product);
	};
	return (
		<Button onClick={() => handleAdd(product)} variant='secondary'>
			dodaj do koszyka
		</Button>
	);
};

export default InitCartButton;
