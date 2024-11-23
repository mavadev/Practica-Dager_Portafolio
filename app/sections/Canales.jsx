import Link from 'next/link';
import Image from 'next/image';
import { channels } from '@/data/channels';
import AnimatedSection from './AnimatedSection';

export const Canales = () => {
	return (
		<AnimatedSection
			id='canales'
			className='mb-16 container mx-auto'>
			<header className='max-md:text-center mb-14'>
				<h3 className='h2 mb-2 text-orange'>
					Mis <span className='line-through text-gray/50 select-none'>Poses</span> Exclusivas
				</h3>
				<h2 className='h2'>Dager en Todas sus Facetas</h2>
			</header>
			<div className='grid grid-cols-2 md:grid-cols-4 justify-center gap-y-10'>
				{channels.map((channel, index) => (
					<div
						key={index}
						className='flex flex-col items-center text-center'>
						<div className='relative w-36 aspect-square overflow-hidden mb-5'>
							<Image
								fill
								objectFit='cover'
								alt={`Perfil de Canal ${channel.title}`}
								src={`/images/canales/${channel.image}`}
							/>
							{/* Hover */}
							<div className='bg-black/50 absolute inset-0 flex items-center justify-center gap-5 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity'>
								{channel.networks.map(({ social, link }, index) => (
									<Link
										key={index}
										href={link}
										target='_blank'
										className={`text-gray text-4xl hover:${social.color}`}>
										{social.icon}
									</Link>
								))}
							</div>
						</div>
						<h3 className='h3 mb-2'>{channel.title}</h3>
						<p className='text-xl max-w-[170px] text-white/90'>{channel.description}</p>
					</div>
				))}
			</div>
		</AnimatedSection>
	);
};
