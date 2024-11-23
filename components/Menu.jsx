'use client';

import { CiMenuFries } from 'react-icons/ci';

import Logo from './Logo';
import Link from 'next/link';
import { links, networks } from '@/data/menuData';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Menu = () => {
	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center'>
				<CiMenuFries className='text-[32px] text-orange' />
			</SheetTrigger>
			<SheetContent className='flex flex-col justify-between pt-28 pb-14 items-center'>
				{/* Logo */}
				<SheetTitle>
					<div className='text-center scale-150'>
						<Logo />
					</div>
				</SheetTitle>

				{/* Navegación */}
				<nav className='flex flex-col gap-5 items-center'>
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.path}
							className={`${link.path === true ? 'text-orange text-5xl' : 'text-4xl'} capitalize hover:text-yellow transition-all`}>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Redes Sociales */}
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
			</SheetContent>
		</Sheet>
	);
};

export default Menu;
