import React from 'react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const LumberGame = () => {
	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center'>
				<Image
					width={60}
					height={60}
					alt='Pepinoooo'
					className='hover:rotate-180'
					src='/images/otros/pepino-white.png'
				/>
			</SheetTrigger>
			<SheetContent
				side='left'
				className='pt-12'>
				<SheetTitle>
					<p className='text-gray'>Lumber Jack Game</p>
				</SheetTitle>
				<iframe
					width='100%'
					height='100%'
					title='Lumber Jack Game'
					src='https://tbot.xyz/lumber/'></iframe>
			</SheetContent>
		</Sheet>
	);
};

export default LumberGame;
