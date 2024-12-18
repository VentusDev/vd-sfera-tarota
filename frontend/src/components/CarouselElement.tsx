import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CarouselProps {
	arrayLength: number;
	autoplayInterval?: number;
	elements: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
	arrayLength,
	autoplayInterval = 3000,
	elements,
}) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		const autoplayTimer = setInterval(() => {
			handleNextClick();
		}, autoplayInterval);

		return () => clearInterval(autoplayTimer);
	}, [currentIndex, autoplayInterval]);

	const handlePrevClick = () => {
		setCurrentIndex((currentIndex - 1 + arrayLength) % arrayLength);
	};

	const handleNextClick = () => {
		setCurrentIndex((currentIndex + 1) % arrayLength);
	};

	const handleDotClick = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className='relative min-h-[500px]'>
			<div className='carousel overflow-hidden'>
				<div
					className='carousel-inner flex transition-transform duration-500'
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{elements}
				</div>
			</div>
			<button
				className='absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-gray-400 transition-colors duration-300'
				onClick={handlePrevClick}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 19l-7-7 7-7'
					/>
				</svg>
			</button>
			<button
				className='absolute right-0 top-1/2 -translate-y-1/2  rounded-full p-2 hover:bg-gray-400 transition-colors duration-300'
				onClick={handleNextClick}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M9 5l7 7-7 7'
					/>
				</svg>
			</button>
			<div className='carousel-dots flex justify-center mt-4'>
				{Array.apply(0, Array(arrayLength)).map((_, index) => {
					return (
						<button
							key={uuidv4()}
							className={`carousel-dot mx-1 w-3 h-3 rounded-full ${
								index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
							}`}
							onClick={() => handleDotClick(index)}
						/>
					);
				})}
			</div>
		</div>
	);
};

type CarouselElementProps = {
	title?: string;
	elements?: React.ReactNode;
	arrayLength: number;
};

const CarouselElement: React.FC<CarouselElementProps> = ({
	title,
	elements,
	arrayLength,
}) => {
	return (
		<div className='container mx-auto'>
			<h1 className='text-3xl font-bold mb-4'>{title}</h1>
			<Carousel
				arrayLength={arrayLength}
				elements={elements}
				autoplayInterval={5000}
			/>
		</div>
	);
};

export { Carousel, CarouselElement };
