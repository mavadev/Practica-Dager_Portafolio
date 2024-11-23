'use client';

import Logo from './Logo';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { networks } from '@/data/menuData';
import Navegation from './Navegation';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Menu = () => {
	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center ml-auto'>
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
					<Navegation />
					<Link
						target='_blank'
						title='¡UNETE AL ANTRO!'
						href={networks[4].link}
						className={`text-5xl ${networks[4].social.color} hover:opacity-75`}>
						{networks[4].social.icon}
					</Link>
				</nav>

				{/* Redes Sociales */}
				<div className='flex gap-5'>
					{networks.map(
						(network, index) =>
							index < 4 && (
								<Link
									key={index}
									target='_blank'
									href={network.link}
									className={`text-3xl ${network.social.color} hover:opacity-75`}>
									{network.social.icon}
								</Link>
							)
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Menu;
