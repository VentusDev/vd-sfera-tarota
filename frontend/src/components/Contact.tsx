import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const socialLinks = [
	{
		href: 'https://github.com/VentusDev',
		icon: (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z'
					fill='currentColor'
				/>
			</svg>
		),
		alt: 'GitHub',
	},
	{
		href: '',
		icon: (
			<svg
				width='25'
				height='24'
				viewBox='0 0 25 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z'
					fill='currentColor'
				/>
			</svg>
		),
		alt: 'Instagram',
	},
];

const Contact = () => {
	return (
		<section className='section min-h-[700px]' id='contact'>
			<div className='container lg:grid lg:grid-cols-2 lg:items-stretch'>
				<div className='lg:mb-0 lg:flex lg:flex-col '>
				<div className='mb-12 grid justify-between bg-cover size-[280px] md:size-[450px] xl:size-[500px] px-5'  style={{backgroundImage: `url("/img/contact.jpg")`}}>
					<h2 className='headline-2 mt-4 '>
						Złapmy ze Sobą kontakt!
					</h2></div>
					<p className='text-zinc-400 mt-3 mb-8 max-w-[34ch]'>
						Zapraszamy do kontaktu przez nasze media społecznościowe. <br/>Warto
						śledzić nas na bieżąco!
					</p>

					<div className='flex items-center gap-2 mt-auto'>
						{socialLinks.map(({ icon, alt }) => (
							<a
								className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80'
								/* href={href} */
								onClick={() =>
									toast.success('odnośniki nie są ustawione w wersji DEMO')
								}
								key={uuidv4()}
								target='_blank'
								aria-label={alt}
							>
								{icon}
							</a>
						))}
					</div>
				</div>
				<form action='https://getform.io/f/bkkkrjwb' method='POST' className=''>
					<div className='xl:pl-10 2xl:pl-20'>
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
								placeholder='Proszę wpisać imię'
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
								placeholder='Prosze wpisać e-mail'
								className='text-field'
							/>
						</div>
						<div className='mb-4'>
							<label htmlFor='message' className='label'>
								wiadomość
							</label>
							<textarea
								name='message'
								id='message'
								autoComplete='message'
								placeholder='W czym możemy pomóc?'
								required
								className='text-field resize-y min-h-32 max-h-80'
							/>
						</div>

						<button
							type='submit'
							className='btn btn-secondary [&]:max-w-full w-full justify-center'
						>
							wyślij
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
