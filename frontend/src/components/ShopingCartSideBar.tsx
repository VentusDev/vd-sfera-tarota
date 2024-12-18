import { useEffect, useState } from 'react';
import { Cart } from '@/components/Cart';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from '@/assets/icons/icons';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@/store/store';

const ShopingCartSideBar = () => {
		const {  quantity } = useStore(
			useShallow((state) => ({
				quantity: state.quantity,
			}))
		);
	const [openCart, setOpenCart] = useState(false);

	const location = useLocation();
    useEffect((
		()=>setOpenCart(false)
		),[location])
	return (
		<>

			<Button
				variant='ghost'
				onClick={() => setOpenCart(!openCart)}
				size='icon'
				className='bg-destructive bottom-0 right-0 m-5 z-50 fixed'
			>
				<ShoppingCart />
				<div className='absolute text-[10px] text-fuchsia-400 w-[1px] h-[26px] items-center justify-center rounded-full'><p>{quantity}</p></div>
			</Button>
            <Sidebar
				toggleClass={!openCart}
				SideBarTitle={'koszyk'}
				children={<Cart />}
			/>
		</>
	);
};

export default ShopingCartSideBar;
