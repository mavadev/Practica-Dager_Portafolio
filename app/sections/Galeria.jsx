import Image from 'next/image';

export const Galeria = () => {
	const elements = Array.from({ length: 12 });

	return (
		<section className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-20'>
			{elements.map((_, index) => (
				<div
					key={index}
					className=' relative aspect-video'>
					<Image
						fill
						objectFit='cover'
						alt={`Dog Dager Foto ${index + 1}`}
						src={`/images/galeria/dager-foto-${index + 1}.webp`}
					/>
				</div>
			))}
		</section>
	);
};
