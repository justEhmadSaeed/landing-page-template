import Image from 'next/image';
const Card = ({ title, desc, imgURL, btnContent, btnURL }) => {
	return (
		<div className='flex flex-col rounded-md shadow-lg'>
			<div className='p-6 flex flex-col items-center'>
				<Image src={imgURL ?? '/img/vercel.svg'} alt='' width={100} height={100} />
				<h3 className='mt-5 mb-2 text-template-blue text-lg'>
					{title}
				</h3>
				<p className='mb-2 text-template-grey font-light'>{desc}</p>
			</div>
			<hr className='border-b border-template-white' />
			<div className='flex p-6'>
				<a href={btnURL} target='_blank' rel='noopener noreferrer' className='flex-1'>
					<button type='button' className='btn btn-purple w-full'>
						{btnContent}
					</button>
				</a>
			</div>
		</div>
	);
};

export default Card;
