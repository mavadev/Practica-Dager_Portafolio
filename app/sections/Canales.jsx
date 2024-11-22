import Link from 'next/link';
import Image from 'next/image';
import { channels } from '@/data/channels';

export const Canales = () => {
	return (
		<section
			id='canales'
			className='mb-28 container mx-auto'>
			<header className='text-center mb-20'>
				<h3 className='h3 mb-2 text-orange'>Mis Canales</h3>
				<h2 className='h2'>Dager en Todas sus Formas</h2>
			</header>
			<div className='flex flex-row flex-wrap gap-10 justify-center'>
				{channels.map((channel, index) => (
					<div
						key={index}
						className='flex flex-col items-center gap-3 text-center flex-1'>
						<div className='relative w-32 aspect-square rounded-full overflow-hidden'>
							<Image
								fill
								objectFit='cover'
								alt={`Perfil de Canal ${channel.title}`}
								src={`/images/canales/${channel.image}`}
							/>
							<div className='bg-black/50 absolute inset-0 flex items-center justify-center gap-5 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity'>
								{channel.networks.map(({ social, link }, index) => (
									<Link
										key={index}
										href={link}
										target='_blank'
										className={`text-gray text-3xl hover:${social.color}`}>
										{social.icon}
									</Link>
								))}
							</div>
						</div>
						<h3 className='h3'>{channel.title}</h3>
						<p className='text-xl max-w-[170px]'>{channel.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
