import { Accordion } from './accordian';

const FAQ = () => {
	return (
		<section className='bg-template-white py-20'>
			<div className='container'>
				{/* Heading */}
				<div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
					<h1 className='text-3xl text-center text-template-blue'>
						Frequently Asked Questions
					</h1>
					<p className='text-center text-template-grey mt-4'>
						Here are some of our FAQs. If you have any other questions
						unanswered, feel free to email us.
					</p>
				</div>
				{/* FAQ Items */}
				<Accordion title='What is this template for?' content='This template can be used as a landing page for your company.' />
				<Accordion title='What is this template for?' content='This template can be used as a landing page for your company.' />
				<Accordion title='What is this template for?' content='This template can be used as a landing page for your company.' />
			</div>
		</section>
	);
};

export default FAQ;
