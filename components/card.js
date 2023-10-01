import Image from 'next/image';
const Card = ({ title, desc, imgURL, btnContent, btnURL }) => {
	return (
		<div className='rounded-md shadow-lg cursor-pointer border-[1px]  hover:border-cyan-600 ease-in-out duration-150 hover:scale-105'>
			<div className='p-6 flex flex-col items-center'>
				<Image src={imgURL ?? '/img/vercel.svg'} alt='' width={100} height={100} />
				<h3 className='mt-5 mb-2 text-template-blue text-lg'>
					{title}
				</h3>
				<p className='mb-2 text-template-grey font-light'>{desc}</p>
			</div>
			<hr className='border-b border-template-white' />	
			<div className='py-4 px-8'>
				<a href={btnURL} target='_blank' rel='noopener noreferrer' className='flex-1'>
					<button type='button' className='btn btn-purple w-full hover:border-cyan-300 hover:border-[1px]'>
						{btnContent}
					</button>
				</a>
			</div>
		</div>
	);
};

export default Card;
