'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import useMaskHidden from '../utils/useMaskHidden';

export const Hero = () => {
	const { size, setIsHovered, mousePosition, handleMouseMove } = useMaskHidden(300);

	return (
		<section
			id='inicio'
			className='h-svh py-20 bg-black'>
			<div className='container mx-auto h-full flex flex-col md:flex-row items-center md:items-end max-md:justify-center gap-10'>
				{/* Información */}
				<div className='text-center md:text-left md:flex-1'>
					<p className='text-2xl text-gray'>Bienvenido al Universo de</p>
					<h1 className='title mb-6 text-orange'>Dog Dager</h1>
					<p className='text-2xl text-gray max-w-[400px]'>Programador, amante de la música, explorador del edutenimiento y f@lopero</p>
				</div>
				{/* Foto */}
				<motion.div
					onMouseMove={handleMouseMove}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							delay: 0.1,
							duration: 0.3,
							ease: 'easeIn',
						},
					}}
					className='relative aspect-video w-full md:flex-[2] rotate-3'>
					<Image
						fill
						priority
						objectFit='cover'
						alt='Dog Dager Background'
						src='/images/dog-dager-banner.webp'
					/>
					<motion.div
						className='mask h-full'
						animate={{
							WebkitMaskSize: `${size}px`,
							WebkitMaskPosition: `${mousePosition.x}px ${mousePosition.y}px`,
						}}
						transition={{ type: 'tween', ease: 'backOut' }}>
						<Image
							fill
							priority
							objectFit='cover'
							alt='Dog Dager Background Oculto'
							src='/images/galeria/dager-pepinos.webp'
						/>
					</motion.div>
				</motion.div>
			</div>
			{/* Button Down */}
			<motion.div
				initial={{ y: 0, opacity: 0 }}
				animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: 'easeOut',
				}}
				className='md:hidden'>
				<Link
					href='#dager'
					className='w-20 h-20 flex items-center justify-center mx-auto'>
					<IoIosArrowDown className='size-10' />
				</Link>
			</motion.div>
		</section>
	);
};
