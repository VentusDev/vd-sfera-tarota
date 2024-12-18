import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Review from '@/components/Review';

import Category from '@/components/Category';
import ItemsSection from '@/components/ItemsSection';
import { PRODUCTS_DATA } from '@/lib/mockData';

const HomePage = () => {
	return (
		<>
			<main className='grid space-y-20 md:space-y-40'>
				<Hero />
				<Category />
				<About />
				<ItemsSection PRODUCTS_DATA={PRODUCTS_DATA} title='produkty'/>
				<Review />
				<Contact />
			</main>
		</>
	);
};

export default HomePage;
