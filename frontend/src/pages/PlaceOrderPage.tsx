import { CircleX } from '@/assets/icons/icons';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/store';
import ItemsSection from '@/components/ItemsSection';
import toast from 'react-hot-toast';

const PlaceOrderPage = () => {
	const { reset, products, total } = useStore(
		useShallow((state) => ({
			reset: state.reset,
			products: state.products,
			total: state.total,
		}))
	);

	return (
		<>
			<section id='cart' className='container my-20 flex flex-col'>
				<div className='flex gap-2 text-lg items-center justify-end'>
					<h1>opróżnij koszyk</h1>
					<Button onClick={reset} variant='destructive' size='icon'>
						<CircleX />
					</Button>
				</div>
				<ItemsSection PRODUCTS_DATA={products} title='zawartość koszyka' />
				<p className='price mt-10 w-[280px] text-center mx-auto'>
					Podsumowanie koszyka <br /> {total} PLN
				</p>
			</section>

			<section className='section container' id='contact'>
				<form
					action='https://getform.io/f/bkkkrjwb'
					method='POST'
					className=' grid gap-5 lg:grid-cols-2'
				>
					<div className='mb-4'>
						<label htmlFor='name' className='label'>
							imię
						</label>
						<input
							type='text'
							name='name'
							id='name'
							autoComplete='name'
							required
							placeholder='Miejsce na imię'
							className='text-field'
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='lastName' className='label'>
							nazwisko
						</label>
						<input
							type='text'
							name='lastName'
							id='lastName'
							autoComplete='lastName'
							required
							placeholder='Miejsce na nazwisko'
							className='text-field'
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='email' className='label'>
							email
						</label>
						<input
							type='text'
							name='email'
							id='email'
							autoComplete='email'
							required
							placeholder='Miejsce na e-mail'
							className='text-field'
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='street' className='label'>
							ulica
						</label>
						<input
							type='text'
							name='street'
							id='street'
							autoComplete='street'
							required
							placeholder='Miejsce na nazwę ulicy'
							className='text-field'
						/>
					</div>

					<div className='mb-4'>
						<label htmlFor='zipCode' className='label'>
							kod pocztowy
						</label>
						<input
							type='number'
							name='zipCode'
							id='zipCode'
							autoComplete='zipCode'
							required
							placeholder='Miejsce na kod pocztowy'
							className='text-field'
						/>
					</div>

					<div className='mb-4'>
						<label htmlFor='city' className='label'>
							miasto
						</label>
						<input
							type='text'
							name='city'
							id='city'
							autoComplete='city'
							required
							placeholder='Miejsce na nazwę miejscowości'
							className='text-field'
						/>
					</div>

					<div className='mb-4'>
						<label htmlFor='message' className='label'>
							dodatkowe informacje do zamówienia
						</label>
						<textarea
							name='message'
							id='message'
							autoComplete='message'
							placeholder='Jeśli jest coś istotnego co chcesz nam przekazać, nie krępuj się!'
							required
							className='text-field resize-y min-h-32 max-h-80'
						/>
						<button
							type='button'
							onClick={()=>toast.error('Nie można złożyć zamówienia w wersji DEMO')}
							className='btn btn-secondary [&]:max-w-full w-full justify-center mt-5'
						>
							zamów
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default PlaceOrderPage;
