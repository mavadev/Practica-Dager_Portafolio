'use client';
import { motion } from 'framer-motion';
import LumberGame from './LumberGame';
import Logo from './Logo';
import Menu from './Menu';

const headerApper = {
	hidden: { y: '-100%' },
	show: {
		y: 0,
		transition: {
			delay: 3,
			duration: 0.6,
			type: 'spring',
			stiffness: 30,
		},
	},
};

const Header = () => {
	return (
		<motion.header
			animate='show'
			initial='hidden'
			variants={headerApper}
			className={`py-5 w-full fixed z-20 bg-black`}>
			<div className='container mx-auto flex items-center gap-2'>
				{/* LumberJack */}
				<LumberGame />
				{/* Logo */}
				<Logo />
				{/* Navegacion */}
				<Menu />
			</div>
		</motion.header>
	);
};

export default Header;
