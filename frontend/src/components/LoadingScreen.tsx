import { v4 as uuidv4 } from 'uuid';
import PlayCard from './PlayCard';
import itemCard from '@/img/cardBack.jpg';

const LoadingScreen = () => {
	const cards = [itemCard, itemCard, itemCard];

	return (
		<section className='w-full h-screen bg-black flex flex-col gap-5 justify-center items-center fixed z-[100000]'>
			<div className='flex justify-center items-center flex-wrap perspective-10 p-[20px]'>
				{cards.map((item) => (
					<PlayCard key={uuidv4()} img={item} />
				))}
			</div>
			<h3>Ładowanie...</h3>
		</section>
	);
};

export default LoadingScreen;
