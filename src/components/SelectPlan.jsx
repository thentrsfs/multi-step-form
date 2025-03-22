const SelectPlan = ({
	isYearly,
	plans,
	setSelectedPlan,
	selectedPlan,
	setIsYearly,
}) => {
	return (
		<div className='flex flex-col md:px-20 md:py-10 px-2 py-3 gap-3 md:gap-6 md:w-[38rem]'>
			<div className='flex flex-col gap-1 pb-4'>
				<h3 className='text-3xl font-ubuntu-bold text-marineblue'>
					Select your plan
				</h3>
				<p className='text-coolgray'>
					You have the option of monthly or yearly billing.
				</p>
				<div className='flex flex-col gap-10'>
					<div className='grid md:grid-cols-3 md:gap-5 gap-3 md:pt-10 pt-5'>
						{plans.map((plan) => (
							<div
								key={plan.id}
								className={`${
									selectedPlan.name === plan.name
										? 'bg-magnolia outline-purplishblue'
										: ''
								} flex md:flex-col outline hover:outline-purplishblue transition-colors duration-300 outline-lightgray rounded-md md:gap-10 gap-4 md:items-baseline items-center p-4  cursor-pointer `}
								onClick={() => setSelectedPlan(plan)}>
								<img
									src={plan.icon}
									alt='plan icon'
									className='w-10 h-10'
								/>
								<div className='flex flex-col'>
									<span className='text-marineblue font-ubuntu-bold'>
										{plan.name}
									</span>
									<span className='text-coolgray text-sm'>
										$
										{isYearly
											? plan.yearlyPrice + '/yr'
											: plan.monthlyPrice + '/mo'}
									</span>
									<span
										className={`${
											!isYearly ? 'hidden' : ''
										} text-xs  text-marineblue font-ubuntu-medium`}>
										2 months free
									</span>
								</div>
							</div>
						))}
					</div>
					<div className='flex items-center justify-center space-x-4 w-full p-3 bg-magnolia rounded-md'>
						<span
							className={`${
								!isYearly ? 'text-marineblue' : 'text-coolgray'
							} font-ubuntu-medium`}>
							Monthly
						</span>
						<input
							type='checkbox'
							className='toggle toggle-sm bg-marineblue checked:bg-marineblue text-white checked:text-white px-1'
							onClick={() => setIsYearly(!isYearly)}
						/>

						<span
							className={`${
								isYearly ? 'text-marineblue' : 'text-coolgray'
							} font-ubuntu-medium`}>
							Yearly
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectPlan;
