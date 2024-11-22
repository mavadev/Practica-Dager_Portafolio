import Link from 'next/link';
import Image from 'next/image';
import { GiGuitarBassHead } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

export default function Home() {
	return (
		<section
			id='inicio'
			className='h-screen py-20'>
			<div className='container mx-auto h-full flex flex-col md:flex-row items-center md:items-end max-md:justify-center gap-10'>
				{/* Información */}
				<div className='text-center md:text-left md:flex-1'>
					<GiGuitarBassHead className='size-16 max-md:mx-auto mb-2' />
					<p className='text-xl'>Bienvenido al Universo de</p>
					<h1 className='title mb-6 text-orange'>Dog Dager</h1>
					<p className='max-w-[300px] text-white/80'>Programador, amante de la música, explorador del edutenimiento y arquitecto del caos organizado</p>
				</div>
				{/* Foto */}
				<div className='relative aspect-video w-full md:flex-[2]'>
					<Image
						priority
						layout='fill'
						objectFit='cover'
						className='self-start'
						alt='Dog Dager Background'
						src='/images/dog-dager-banner.webp'
					/>
				</div>
			</div>
			{/* Button Down */}
			<Link
				href='sobre-mi'
				className='w-20 h-20 flex items-center justify-center mx-auto'>
				<IoIosArrowDown className='size-10' />
			</Link>
		</section>
	);
}
