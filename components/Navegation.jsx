import Link from 'next/link';
import { links } from '@/data/menuData';
import { useEffect, useState } from 'react';

const Navegation = ({ size }) => {
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.4,
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		links.forEach(link => {
			const element = document.getElementById(link.path);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	});

	return (
		<>
			{links.map((link, index) => (
				<Link
					key={index}
					href={`#${link.path}`}
					className={`${link.path === activeSection && 'text-orange'} ${size == 'small' ? 'text-2xl' : 'text-4xl'} capitalize hover:text-yellow transition-colors`}>
					{link.name}
				</Link>
			))}
		</>
	);
};

export default Navegation;
