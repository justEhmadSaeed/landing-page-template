const Footer = () => {
	return (
		<footer className='bg-template-blue py-8'>
			<div className='container flex flex-col md:flex-row items-center'>
				<div className='flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12'>
					<img src='/img/vercel2.svg' alt='Company Logo' width='100' />
					<ul className='flex text-white uppercase gap-12 text-xs'>
					<a href="#feature" className='cursor-pointer px-2 text-base  p-1 rounded-lg hover:scale-105 ease-in-out duration-200 hover:text-gray-600  '>Features</a>
				<button className='uppercase cursor-pointer px-2 text-base  p-1 rounded-lg hover:scale-105 ease-in-out duration-200 hover:text-gray-600 '>Pricing</button>
				<button className='uppercase cursor-pointer px-2 text-base  p-1 rounded-lg hover:scale-105 ease-in-out duration-200 hover:text-gray-600 '>Contact</button>
					</ul>
				</div>
				<div className='flex gap-10 mt-12 md:mt-0'>
					<a
						href='https://twitter.com/justEhmadSaeed'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='img/X.svg'
							alt='Twitter'
							width='25'
						/>
					</a>
					<a
						href='https://github.com/justEhmadSaeed'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src='img/logo-github.svg' alt='Twitter' width='25' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
