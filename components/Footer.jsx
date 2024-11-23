'use client';
import Logo from './Logo';
import Link from 'next/link';
import Navegation from './Navegation';
import { networks } from '@/data/menuData';

export const Footer = () => {
	return (
		<footer className='bg-black py-10 border-t-2 border-gray/5'>
			<div className='container mx-auto'>
				{/* Content */}
				<div className='flex flex-row justify-between'>
					<div className='flex flex-col gap-8 max-md:text-center max-md:items-center flex-1'>
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
					<div className='max-md:hidden'>
						<p className='text-xl uppercase text-gray/50 transition-all text-right mb-2'>enlaces</p>
						<nav className='flex flex-col gap-1 items-end'>
							<Navegation size='small' />
						</nav>
					</div>
				</div>
				<div className='w-full pt-10 flex flex-col md:flex-row items-center justify-between'>
					<p className='text-gray'>
						Diseñado y Desarrollo por Gianmarco para <span className='text-orange'>Dager</span>
					</p>
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
