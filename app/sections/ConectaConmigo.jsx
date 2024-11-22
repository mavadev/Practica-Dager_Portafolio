export const ConectaConmigo = () => {
	return (
		<section className='container mb-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
			<div className='aspect-video max-w-[560px] max-h-[315px]'>
				<iframe
					width='100%'
					height='100%'
					allowFullScreen
					title='Dog Dager Last Video'
					referrerPolicy='strict-origin-when-cross-origin'
					src='https://www.youtube-nocookie.com/embed/DaRes1TR3XQ?si=mNJkJuNagO7nTTBe?rel=0'
					allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				/>
			</div>
			<div className='aspect-video max-w-[560px] max-h-[315px]'>
				<iframe
					width='100%'
					height='100%'
					allowFullScreen
					title='Antro Dager Last Video'
					referrerPolicy='strict-origin-when-cross-origin'
					src='https://www.youtube-nocookie.com/embed/KZYWWsiMrbA?si=EzK4LRERE_IYD3Am'
					allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				/>
			</div>
		</section>
	);
};
