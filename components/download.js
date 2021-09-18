import Image from 'next/image';
const Download = () => {
	return (
		<section className='py-20 mt-20'>
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
			<div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16'>
				{/* Card */}
				<div className='flex flex-col rounded-md shadow-lg'>
					<div className='p-6 flex flex-col items-center'>
						<Image
							src='/img/logo-windows.svg'
							alt=''
							width={100}
							height={100}
						/>
						<h3 className='mt-5 mb-2 text-template-blue text-lg'>
							Use on Windows
						</h3>
						<p className='mb-2 text-template-grey font-light'>
							Windows 10/8/7/XP
						</p>
					</div>
					<hr className='border-b border-template-white' />
					<div className='flex p-6'>
						<button type='button' className='btn btn-purple flex-1'>
							Fork the template
						</button>
					</div>
                </div>
                
			</div>
		</section>
	);
};

export default Download;
