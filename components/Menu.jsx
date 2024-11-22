'use client';

import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

import Logo from './Logo';
import Link from 'next/link';
import { links, networks } from '@/data/menuData';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Menu = () => {
	const pathname = usePathname();

	return (
		<Sheet modal={true}>
			<SheetTrigger className='flex justify-center items-center'>
				<CiMenuFries className='text-[32px] text-orange' />
			</SheetTrigger>
			<SheetContent className='flex flex-col justify-between py-28 items-center'>
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
							className={`${link.path === pathname ? 'text-orange text-3xl' : 'text-2xl'} capitalize font-secondary hover:text-yellow transition-all`}>
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
							className={`text-gray text-3xl hover:${network.social.color}`}>
							{network.social.icon}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Menu;
