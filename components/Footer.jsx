'use client';

import Logo from './Logo';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { links, networks } from '@/data/menuData';

export const Footer = () => {
	const [currentSection, setCurrentSection] = useState('');

	// Detecta cambios en el fragmento de la URL
	useEffect(() => {
		// Función para actualizar el estado con el hash actual
		const updateHash = () => {
			setCurrentSection(window.location.hash);
		};

		// Actualiza el estado al cargar la página con el hash inicial
		updateHash();

		// Escucha el cambio de hash cuando la URL cambia
		window.addEventListener('hashchange', updateHash);

		// Limpia el event listener cuando el componente se desmonta
		return () => {
			window.removeEventListener('hashchange', updateHash);
		};
	}, []);

	return (
		<footer className='bg-black py-10'>
			<div className='container mx-auto'>
				{/* Content */}
				<div className='flex flex-col md:flex-row justify-between'>
					<div className='flex flex-col gap-5 max-md:text-center max-md:items-center'>
						{/* Logo */}
						<Logo />
						{/* Redes */}
						<div className='flex gap-5'>
							{networks.map((network, index) => (
								<Link
									key={index}
									target='_blank'
									href={network.link}
									className={`text-3xl ${network.social.color} hover:opacity-75`}>
									{network.social.icon}
								</Link>
							))}
						</div>
					</div>

					{/* Links */}
					<div>
						<p className='text-xl uppercase text-orange/50 transition-all text-right mb-2'>enlaces</p>
						<nav className='hidden md:flex flex-col gap-1 text-right'>
							{links.map((link, index) => (
								<Link
									key={index}
									href={link.path}
									className={`${currentSection === link.path ? 'text-orange text-xl' : 'text-gray text-lg'} uppercase  hover:text-yellow transition-all`}>
									{link.name}
								</Link>
							))}
						</nav>
					</div>
				</div>

				{/* Footer */}
				<div className='w-full pt-10 flex flex-col md:flex-row items-center justify-between'>
					{/* Atte */}
					<p className='text-gray'>
						Diseñado y Desarrollo por Gianmarco para <span className='text-orange'>Dager</span>
					</p>
					{/* Terminos/Troll */}
					<Link
						target='_blank'
						className='underline text-gray'
						href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
						<p>Términos y Condiciones</p>
					</Link>
				</div>
			</div>
		</footer>
	);
};
