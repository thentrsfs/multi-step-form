import IconThanks from '/images/icon-thank-you.svg';

const Summary = ({
	selectedPlan,
	isYearly,
	selectedAddOns,
	isConfirmed,
	setCurrentStep,
}) => {
	const total = () => {
		let total = 0;
		if (isYearly) {
			total =
				selectedPlan.yearlyPrice +
				selectedAddOns.reduce((acc, addOn) => acc + addOn.yearlyPrice, 0);
		} else {
			total =
				selectedPlan.monthlyPrice +
				selectedAddOns.reduce((acc, addOn) => acc + addOn.monthlyPrice, 0);
		}

		return total;
	};

	return (
		<div className='flex flex-col md:px-20 md:py-10 px-2 py-3 gap-3 md:gap-6 md:w-[38rem]'>
			<div className={isConfirmed ? 'hidden' : ''}>
				<div className=' flex flex-col gap-1 pb-4'>
					<h3 className='text-3xl font-ubuntu-bold text-marineblue'>
						Finishing up
					</h3>
					<p className='text-coolgray'>
						Double-check everything looks OK before confirming.
					</p>
				</div>
				<div className='bg-magnolia rounded-md'>
					<div className='flex justify-between items-center p-4'>
						<div className='flex flex-col justify-center'>
							<span className='font-ubuntu-bold text-marineblue'>
								{selectedPlan.name}({isYearly ? 'Yearly' : 'Monthly'})
							</span>
							<span
								className='underline text-coolgray'
								onClick={() => {
									setCurrentStep(2);
								}}>
								Change
							</span>
						</div>
						<span className='font-ubuntu-bold text-marineblue'>
							${isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice}
							/{isYearly ? 'yr' : 'mo'}
						</span>
					</div>
					<hr
						className={`${
							selectedAddOns.length === 0 && 'hidden'
						} border-t-0.5 border-lightgray mx-4`}
					/>
					<div
						className={`${
							selectedAddOns.length === 0 && 'hidden'
						} p-4 flex flex-col gap-2`}>
						{selectedAddOns.map((addOn) => (
							<div
								key={addOn.id}
								className='flex justify-between'>
								<span className='text-coolgray'>{addOn.name}</span>
								<span className='text-marineblue'>
									{isYearly
										? `+$${addOn.yearlyPrice}/yr`
										: `+$${addOn.monthlyPrice}/mo`}
								</span>
							</div>
						))}
					</div>
				</div>
				<div className='flex justify-between px-4 pt-6'>
					<span className='text-coolgray'>
						Total (per {isYearly ? 'year' : 'month'})
					</span>
					<span className='text-purplishblue font-ubuntu-bold'>
						${total() + (isYearly ? '/yr' : '/mo')}
					</span>
				</div>
			</div>
			<div
				className={
					isConfirmed
						? 'flex flex-col justify-center items-center text-center gap-4 py-12'
						: 'hidden'
				}>
				<img
					src={IconThanks}
					alt='thanks icon'
				/>
				<h3 className='text-3xl font-ubuntu-bold text-marineblue'>
					Thank you!
				</h3>
				<p className='text-coolgray'>
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support, please feel free to email us
					at support@loremgaming.com.
				</p>
			</div>
		</div>
	);
};

export default Summary;
