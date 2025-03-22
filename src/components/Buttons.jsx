const Buttons = ({
	goBack,
	currentStep,
	buttonText,
	backButtonText,
	goNext,
}) => {
	return (
		<div className='flex justify-between items-center px-6 md:pb-3 md:px-20'>
			<button
				className='font-ubuntu-medium text-coolgray  hover:text-marineblue cursor-pointer transition-colors duration-300 px-2'
				onClick={goBack}>
				{backButtonText}
			</button>
			<button
				className={`${
					currentStep === 4
						? 'bg-purplishblue hover:bg-purplishbluehover'
						: 'bg-marineblue hover:bg-marinebluehover'
				}  transition-colors duration-300 text-white py-2.5 px-4.5 w-fit rounded-md text-sm cursor-pointer self-end font-ubuntu-medium `}
				onClick={goNext}>
				{buttonText}
			</button>
		</div>
	);
};

export default Buttons;
