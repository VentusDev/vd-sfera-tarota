import { useEffect } from 'react';

const useIntersectionObserver = () => {
	useEffect(() => {
		// Use setTimeout to update the message after 2000 milliseconds (2 seconds)
		const timeoutId = setTimeout(() => {
			const sections = document.querySelectorAll('section');

			const observer = new IntersectionObserver(
				(entries) => {

					entries.forEach((entry) => {
						const anchor = document.querySelector(
							'a[href="#' + entry.target.id + '"]'
						);

						anchor?.classList.toggle('active', entry.isIntersecting);
					});
				},
				{ threshold: 0.1 }
			);

			sections.forEach((section) => observer.observe(section));

			return () => observer.disconnect();
		}, 1000);

		// Cleanup function to clear the timeout if the component unmounts
		return () => clearTimeout(timeoutId);
	}, []);
};

export default useIntersectionObserver;
