import Image from 'next/image';
import { GiGuitarBassHead } from 'react-icons/gi';

export const AboutMe = () => {
	return (
		<section
			id='sobre-mi'
			className='mt-28 mb-20'>
			<div className='container mx-auto flex flex-col-reverse md:flex-row gap-10 md:items-end'>
				{/* Foto */}
				<div className='flex-1'>
					<div className='relative flex-1 aspect-video mb-2'>
						<Image
							fill
							alt='Dog Dager'
							objectFit='cover'
							src='/images/dager-about-me.webp'
						/>
					</div>
					<p className='text-gray text-right'>Porque todos necesitamos un poquito de caos bien organizado</p>
				</div>
				{/* Información */}
				<div className='flex-1 max-w-[400px]'>
					<GiGuitarBassHead className='size-16 mb-2' />
					<h2 className='h2 mb-5'>
						¿Quien es <span className='text-orange'>Dager</span>?
					</h2>
					<p className='text-xl'>
						Soy Mariano, aunque en Internet me conocen como Dot Dager. Creador de contenido apasionado por la programación, la música, y las reflexiones filosóficas (con un toque de humor y
						pepinillos). Aquí comparto mis pasiones y proyectos con el mundo.
					</p>
				</div>
			</div>
		</section>
	);
};
