const Contact = () => {
	return (
		<section className='bg-template-purple text-white py-20'>
			<div className='container'>
				<div className='sm:w-3/4 lg:w-1/2 mx-auto'>
					<p className='font-light uppercase text-center mb-8'>
						3500+ already joined
					</p>
					<h1 className='text-2xl text-center'>
						Stay up-to-date with the latest updates.
					</h1>
					<div className='flex flex-col sm:flex-row gap-6 mt-8'>
						<input
							type='text'
							placeholder='Enter your email address'
							className='focus:outline-none text-center flex-1 px-2 py-3 rounded-md text-black'
						/>
						<a
							href='https://twitter.com/justEhmadSaeed'
							target='_blank'
							rel='noopener noreferrer'
						>
							<button
								type='button'
								className='btn bg-template-red hover:bg-template-white hover:text-black flex items-center gap-4'
							>
								Contact Us
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
