import { useCardsStore } from '@/store/cardsStore';
import React, { useEffect, useRef, useState } from 'react';
import Modal from '@/components/Modal';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useEffectOnce } from '@/components/hooks/useEffectOnce';

const SchufflePage: React.FC = () => {
	const demoToast = () => {
		toast(
			(t) => (
				<section className='grid'>
					<p>
						Cześć.🫡 <br />
						Właśnie testujesz aplikację tarota w wersji demo. <br />
						Przełóż dwukrotnie talię i wybierz trzy karty. <br />
						Miłego wróżenia!
					</p>
					<div className='flex justify-between'>
						<Button
							variant='destructive'
							className='mt-10'
							onClick={() => {
								toast.dismiss(t.id);
								localStorage.setItem('vd-poker-szop-consent', 'true');
							}}
						>
							Dzięki!
						</Button>
						<a
							href='https://ventus-dev.netlify.app'
							target='_blank'
							className='hover:text-red-700 transition-colors'
						>
							dowiedz się więcej
							<img className='m-auto' src='/img/vd.svg' width={80} />
						</a>
					</div>
				</section>
			),
			{
				position: 'bottom-center',
				duration: 10000000,
			}
		);
	};

	const refs = useRef<(HTMLLabelElement | HTMLDivElement | null)[]>([]);

	const items = new Array(3); //set array lenght
	items.fill('★');
	const schuffleCount = 2;

	const { fetchCardsList, cards, setCardsList } = useCardsStore();

	const [schuffle, setSchuffle] = useState(0);
	const [selectedCards, setSelectedCards] = useState<any[]>([]);

	const fetchList = async () => {
		await fetchCardsList();
	};

	useEffect(() => {
		fetchList();
	}, []);

	useEffectOnce(() => {
		demoToast();
	});

	useEffect(() => {
		const container = document.querySelector('.container');
		if (container) {
			container.scrollIntoView();
		}
	}, []);

	const getPreviousSiblings = (elem: any) => {
		let siblings = [];
		let sibling = elem.previousElementSibling;
		while (sibling) {
			siblings.push(sibling);
			sibling = sibling.previousElementSibling;
		}
		siblings.push(elem);
		return siblings;
	};
	let filteredCards: HTMLDivElement[] = [];
	const getNextSiblings = (elem: any) => {
		let siblings = [];
		let sibling = elem.nextElementSibling;
		while (sibling) {
			siblings.push(sibling);
			sibling = sibling.nextElementSibling;
		}
		return siblings;
	};

	const handleSchuffle = (e: any) => {
		let cardsX = [...cards];
		if (schuffle === 0) {
			cardsX = [...cardsX].sort(() => 0.5 - Math.random());
		}
		if (schuffle < schuffleCount) {
			if (e.target instanceof Element) {
				const target = e?.target as HTMLInputElement;
				const X = Number(target.getAttribute('data-set'));

				const prevSiblings = getPreviousSiblings(target);

				const nextSiblings = getNextSiblings(target);
				filteredCards = [...prevSiblings, ...nextSiblings];
				prevSiblings.forEach((it) => {
					const x = Number(it.getAttribute('data-set'));
					it.style.transform = `translate(${x}px,-${100 - x}px)`;
				});

				nextSiblings.forEach((it) => {
					const x = Number(it.getAttribute('data-set'));
					it.style.transform = `translate(${x}px,${300 + x}px)`;
				});

				setTimeout(() => {
					prevSiblings.forEach((it) => {
						const x = Number(it.getAttribute('data-set'));
						it.style.transform = `translate(${x}px,${5 * x}px)`;
					});

					nextSiblings.forEach((it) => {
						const x = Number(it.getAttribute('data-set'));
						it.style.transform = `translate(${x}px,${5 * x}px)`;
					});

					let y = cardsX.splice(X);
					setCardsList(y.concat(cardsX));
				}, 500);

				setSchuffle((prev) => prev + 1);
			}
		} else if (
			schuffle >= schuffleCount &&
			schuffle < items.length + schuffleCount
		) {
			if (selectedCards.includes(e.target)) return;
			e.target.style.transform = `translate(0px,0px)`;
			setSchuffle((prev) => prev + 1);
			setSelectedCards((selectedCards) => [...selectedCards, e.target]);
			const ref = refs!.current[schuffle - schuffleCount];

			if (refs.current[schuffle - schuffleCount]) {
				e.target.style.top = ref?.offsetTop + 'px';
				e.target.style.left = ref?.offsetLeft + 'px';
				e.target.classList.add('selectedCard');

				setTimeout(() => {
					e.target.classList.add('hidden');
					if (ref) {
						ref.classList.remove('opacity-0');
						setRev(Math.random() < 0.5);
						if (rev) {
							ref.style.removeProperty('transform');
							ref.style.transform = 'rotate(180deg)';
						}
					}
				}, 150);
			}
			if (schuffle === items.length + 1) {
				const prevSiblings = getPreviousSiblings(e.target);
				const nextSiblings = getNextSiblings(e.target);
				filteredCards = [...prevSiblings, ...nextSiblings];
				filteredCards.forEach((it) => {
					if (!it.classList.contains('selectedCard')) {
						const x = Number(it.getAttribute('data-set'));
						it.style.transform = `translate(${x}px,-${300 - x}px)`;
					}
				});
			}
		}
	};

	const [open, setOpen] = useState(false);
	const [modalDesc, setModalDesc] = useState<string[]>([]);

	const handleSetOpen = (desc: string) => {
		let descArr = desc.split('#$%');
		setModalDesc(descArr);
		setOpen(true);
	};

	const [rev, setRev] = useState(false);

	return (
		<>
			<Modal open={open} onClose={() => setOpen(false)}>
				<div className='max-md:py-10'>
					<div className='mx-auto my-4 px-3'>
						<h3 className='text-lg font-black text-gray-200'>opis karty</h3>
						<p className='text-sm text-white'>{modalDesc[0]}</p>
						<h3 className='text-lg font-black text-gray-200'>
							karta do góry: znaczenie
						</h3>
						<p className='text-sm text-white'>{modalDesc[1]}</p>
						<h3 className='text-lg font-black text-gray-200'>
							karta w dół: znaczenie
						</h3>
						<p className='text-sm text-white'>{modalDesc[2]}</p>
					</div>
				</div>
			</Modal>
			<div className='container min-h-screen '>
				<div
					className='bg-white w-full min-h-screen relative mt-[450px] grid grid-cols-2 bg-center bg-cover'
					style={{ backgroundImage: `url("/img/starsBg.svg")` }}
				>
					{cards?.map((item, key) => (
						<div
							key={key}
							onClick={(e) => handleSchuffle(e)}
							className={`dynamic-card card-bg absolute right-[90px] card-size transition-[transform] z-30 cursor-pointer`}
							data-set={key}
							data-set-name={item.name}
							data-set-image={
								import.meta.env.VITE_BACKEND_URL + '/images' + item.image
							}
							data-set-desc={
								item.desc + '#$%' + item.meaningUp + '#$%' + item.meaningRev
							}
							style={{
								backgroundImage: `url("/img/cardBack.jpg")`,
								transform: ` translate(${key}px, ${key * 5}px)`,
							}}
						></div>
					))}
					{items.map((_, index) => (
						<>
							<label
								ref={(el) => (refs.current[index] = el)}
								key={index}
								className={`mb-1 card-size selectedCard relative cursor-pointer opacity-0 block rotate-label`}
							>
								<input type='checkbox' />
								<div
									style={{
										backgroundImage: `url(${selectedCards[index]?.getAttribute(
											'data-set-image'
										)})`,
									}}
									className={`back rotate-y-180 card-back z-40 card-bg `}
								></div>
								<div
									className='front card-back z-40 card-bg'
									style={{ backgroundImage: `url("/img/cardBack.jpg")` }}
								></div>
							</label>
							{selectedCards[index] && (
								<div className=' mb-1 selectedCard right-0 z-20 flex flex-col justify-between text-center  p-1 glass-bg min-w-[150px] max-w-[200px]'>
									<h4>{selectedCards[index]?.getAttribute('data-set-name')}</h4>
									<h6>
										{index === 0
											? 'przeszłość'
											: index === 1
											? 'teraźniejszość'
											: 'przyszłość'}
									</h6>
									<Button
										variant={'outline'}
										className=' mx-auto'
										onClick={() =>
											handleSetOpen(
												selectedCards[index]?.getAttribute('data-set-desc')
											)
										}
									>
										opis karty
									</Button>
								</div>
							)}
						</>
					))}
				</div>
				<Button
					variant={'destructive'}
					onClick={() => {
						setSchuffle(0),
							setSelectedCards([]),
							Array.from(
								document.getElementsByClassName(
									'dynamic-card'
								) as HTMLCollectionOf<HTMLElement>
							).forEach((it, k) => {
								it.style.top = '0px';
								it.style.right = '90px';
								it.style.removeProperty('left');
								it.classList.remove('selectedCard');
								it.classList.remove('hidden');
								refs.current.forEach((i) => {
									i?.classList.add('opacity-0');
									const input = i?.querySelector('input');
									if (input != undefined) {
										input.checked = false;
									}
								});

								it.style.transform = `translate(0px,0px)`;
								it.style.transform = `translate(${k}px,${5 * k}px)`;
							});
					}}
				>
					ponowne rozdanie
				</Button>
				{/* 				<div className='cross-container'>
					<div className='row-span-2 card-10'>10</div>
					<div className='row-span-2 card-9'>9</div>
					<div className='row-span-2 card-5'>5</div>
					<div className='row-span-2 card-7'>7</div>
					<div className='row-span-2 card-6'>6</div>
					<div className='row-span-2 card-1'>1</div>
					<div className='row-span-2 card-2'>2</div>

					<div className='row-span-2 card-8'>8</div>
					<div className='row-span-2 card-3'>3</div>
					<div className='row-span-2 card-4'>4</div>
				</div> */}
			</div>
		</>
	);
};

export default SchufflePage;
