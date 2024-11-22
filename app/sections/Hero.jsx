'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

export const Hero = () => {
	return (
		<section
			id='inicio'
			className='h-svh py-20'>
			<div className='container mx-auto h-full flex flex-col md:flex-row items-center md:items-end max-md:justify-center gap-10'>
				{/* Información */}
				<div className='text-center md:text-left md:flex-1'>
					<p className='text-xl text-gray'>Bienvenido al Universo de</p>
					<h1 className='title mb-6 text-orange'>Dog Dager</h1>
					<p className='max-w-[300px]'>Programador, amante de la música, explorador del edutenimiento y arquitecto del caos organizado</p>
				</div>
				{/* Foto */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							delay: 0.2,
							duration: 0.4,
							ease: 'easeIn',
						},
					}}
					className='relative aspect-video w-full md:flex-[2]'>
					<Image
						fill
						priority
						objectFit='cover'
						className='self-start'
						alt='Dog Dager Background'
						src='/images/dog-dager-banner.webp'
					/>
				</motion.div>
			</div>
			{/* Button Down */}
			<Link
				href='#sobre-mi'
				className='w-20 h-20 flex items-center justify-center mx-auto'>
				<IoIosArrowDown className='size-10' />
			</Link>
		</section>
	);
};
