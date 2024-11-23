'use client';

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { GiGuitarBassHead } from 'react-icons/gi';

const elements = Array.from({ length: 10 }).map((_, index) => ({
	original: `/images/galeria/dager-foto-${index}.webp`,
	thumbnail: `/images/galeria/dager-foto-${index}.webp`,
}));

export const AboutMe = () => {
	return (
		<section
			id='dager'
			className='mt-28 mb-20'>
			<div className='container mx-auto flex flex-col-reverse md:flex-row gap-10 md:items-end'>
				{/* Foto */}
				<div className='flex-1 overflow-hidden'>
					<ImageGallery
						autoPlay
						lazyLoad
						showNav={false}
						items={elements}
						slideInterval={3000}
						showPlayButton={false}
						additionalClass='w-full'
						showFullscreenButton={false}
					/>
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
