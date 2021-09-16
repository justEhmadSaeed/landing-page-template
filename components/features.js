const Features = () => {
	return (
		<section className='bg-template-white py-20 mt-20 lg:mt-60'>
			{/* Heading */}
			<div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
				<h1 className='text-3xl text-center text-template-blue'>
					Features
				</h1>
				<p className='text-center text-template-grey mt-4'>
					The aim is to make it quick and easy for you to build your
					landing page website.
				</p>
			</div>
			{/* Feature #1 */}
			<div className='relative mt-20 lg:mt-40'>
				<div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
					<div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
						<img
							className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full'
							src='./img/features-tab-1.png'
							alt=''
						/>
					</div>
					<div className='flex flex-1 flex-col items-center lg:items-start'>
						<h1 className='text-3xl text-template-blue'>
							Fork in One Click
						</h1>
						<p className='text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
							Organize your company's Landing Page however you like.
							Our simple Codebase gives you complete control over how
							you manage your favourite sites.
						</p>
						<button type='button' className='btn btn-purple'>
							More Info
						</button>
					</div>
				</div>
				{/* Rounded Rectangle */}
				<div className='hidden lg:block overflow-hidden bg-template-purple rounded-r-full absolute h-80 w-1/2 -bottom-24 -left-36'></div>
			</div>

			{/* Feature #2 */}

			<div className='relative mt-20 lg:mt-40'>
				<div className='container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
					<div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
						<img
							className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full'
							src='./img/features-tab-2.png'
							alt=''
						/>
					</div>
					<div className='flex flex-1 flex-col items-center lg:items-start'>
						<h1 className='text-3xl text-template-blue'>
							Customize what you need
						</h1>
						<p className='text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
							Customize the landing page with User-Friendly
							Tailwindcss and Next.js Configurations.
						</p>
						<button type='button' className='btn btn-purple'>
							More Info
						</button>
					</div>
				</div>
				{/* Rounded Rectangle */}
				{/* <div className='hidden lg:block overflow-hidden bg-template-purple rounded-r-full absolute h-80 w-1/2 -bottom-24 -left-36'></div> */}
				<div className='hidden lg:block overflow-hidden bg-template-purple rounded-full absolute h-80 w-1/2 top-32 right-0 lg:-bottom-28 lg:right-20'></div>
			</div>
		</section>
	);
};

export default Features;
