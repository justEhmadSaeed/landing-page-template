import Card from './card';
const Download = () => {
	return (
		<section className='py-20 mt-20 dark:bg-gray-950'>
			{/* Heading */}
			<div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
				<h1 className='text-3xl text-center text-template-blue'>
					Download the template
				</h1>
				<p className='text-center text-template-grey mt-4'>
					We have got your company&apos;s landing page one click away.
				</p>
			</div>
			{/* Cards */}
			<div className='container flex flex-wrap justify-around gap-4 mt-16'>
				{/* Card */}
				<Card
					title='Use on Windows'
					desc='Windows 10/8/7/XP'
					imgURL='/img/logo-windows.svg'
					btnContent='Fork the template'
					btnURL='https://github.com/justEhmadSaeed/landing-page-template'
				/>
				<Card
					title='Use on Apple'
					desc='macOS/ OS X'
					imgURL='/img/logo-apple.svg'
					btnContent='Fork the template'
					btnURL='https://github.com/justEhmadSaeed/landing-page-template'
				/>
				<Card
					title='Use on Linux'
					desc='Ubuntu/ Debian'
					imgURL='/img/logo-linux.svg'
					btnContent='Fork the template'
					btnURL='https://github.com/justEhmadSaeed/landing-page-template'
				/>
			</div>
		</section>
	);
};

export default Download;
