'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeOut = {
	visible: { y: 0 },
	hidden: {
		y: '-100%',
		transition: { duration: 1 },
	},
};

const stagger = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
			ease: 'easeIn',
		},
	},
};
const imageScale = {
	hidden: {
		scale: 0,
	},
	show: {
		scale: 1,
		transition: {
			delay: 1.2,
			duration: 0.5,
			type: 'string',
			stiffness: 60,
		},
	},
};
const rotate360 = {
	hidden: {
		rotate: 0,
	},
	show: {
		rotate: 360,
		transition: {
			delay: 1.5,
			duration: 0.5,
			type: 'spring',
			stiffness: 60,
		},
	},
};
const textApper = {
	hidden: {
		scale: 0.2,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			type: 'string',
			stiffness: 60,
		},
	},
};
const spanApper = {
	hidden: {
		scale: 0.2,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			delay: 0.6,
			duration: 0.4,
			type: 'tween',
		},
	},
};

export const Loader = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isVisible]);

	const setLoadingToFalse = () => {
		setTimeout(() => {
			setIsVisible(false);
		}, 1000);
	};

	return (
		<motion.div
			initial='visible'
			variants={fadeOut}
			animate={isVisible ? 'visible' : 'hidden'}
			className='fixed top-0 left-0 h-screen w-screen bg-black flex items-center justify-center z-50'>
			<motion.div
				animate='show'
				initial='hidden'
				variants={stagger}
				onAnimationComplete={setLoadingToFalse}
				className='flex gap-5 items-center'>
				<motion.div
					variants={imageScale}
					initial='hidden'
					animate='show'>
					<motion.div
						variants={rotate360}
						className='w-28 h-28 relative'>
						<Image
							fill
							priority
							alt='Pepinoooo'
							objectFit='cover'
							src='/images/otros/pepino-white.png'
						/>
					</motion.div>
				</motion.div>
				<motion.h1
					variants={textApper}
					className='text-7xl font-semibold text-white'>
					Dog{' '}
					<motion.span
						variants={spanApper}
						className='text-orange block'>
						Dager
					</motion.span>
				</motion.h1>
			</motion.div>
		</motion.div>
	);
};
