'use client';

import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { AiFillYoutube, AiFillSpotify, AiFillTwitch, AiFillDiscord } from 'react-icons/ai';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './Logo';
import Link from 'next/link';

const links = [
	{
		name: 'Inicio',
		path: '/',
	},
	{
		name: 'Quien Soy',
		path: '#sobre-mi',
	},
	{
		name: 'Canales',
		path: '#canales',
	},
	{
		name: 'Momentos',
		path: '#momentos',
	},
	{
		name: 'Únete al Antro',
		path: '#antro',
	},
];

const socials = [
	{
		link: 'https://www.youtube.com/@DotDager',
		icon: <AiFillYoutube />,
		color: 'text-youtube',
	},
	{
		link: 'https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?nd=1',
		icon: <AiFillSpotify />,
		color: 'text-spotify',
	},
	{
		link: 'https://www.twitch.tv/dagerxiv',
		icon: <AiFillTwitch />,
		color: 'text-twitch',
	},
	{
		link: 'https://discord.com/invite/4NFk6TamAB',
		icon: <AiFillDiscord />,
		color: 'text-discord',
	},
];

const Menu = () => {
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center'>
				<CiMenuFries className='text-[32px] text-orange' />
			</SheetTrigger>
			<SheetContent className='flex flex-col justify-between py-20 items-center'>
				{/* Logo */}
				<div className='text-center scale-150'>
					<Logo />
				</div>
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
					{socials.map((social, index) => (
						<Link
							key={index}
							target='_blank'
							className={`text-gray text-3xl hover:${social.color}`}
							href={social.link}>
							{social.icon}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Menu;
