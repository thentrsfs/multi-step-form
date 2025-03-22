const PickAddOns = ({ addOns, toggleCheck, isYearly }) => {
	return (
		<div className='flex flex-col md:px-20 md:py-10 px-2 py-3 gap-3 md:gap-6 md:w-[38rem]'>
			<div className='flex flex-col gap-1 pb-4'>
				<h3 className='text-3xl font-ubuntu-bold text-marineblue'>
					Pick add-ons
				</h3>
				<p className='text-coolgray'>
					Add-ons help enhance your gaming experience.
				</p>
				<div className='flex flex-col gap-4 md:pt-10 pt-2 '>
					{addOns.map((addOn) => (
						<div
							key={addOn.id}
							className={`${
								addOn.checked ? 'bg-magnolia outline-purplishblue' : ''
							} flex gap-4 hover:outline-purplishblue transition-colors duration-300 items-center justify-between outline outline-lightgray rounded-md py-3 px-3.5`}>
							<div className='flex gap-3 items-center'>
								<input
									type='checkbox'
									className='cursor-pointer accent-purplishblue w-4 h-4 '
									name={addOn.name}
									checked={addOn.checked}
									onChange={() => toggleCheck(addOn.id)}
								/>
								<div className='flex flex-col'>
									<span className='text-marineblue font-ubuntu-bold'>
										{addOn.name}
									</span>
									<span className='text-[13px] text-coolgray text-nowrap'>
										{addOn.description}
									</span>
								</div>
							</div>
							<span className='text-purplishblue text-xs font-ubuntu-medium'>
								{isYearly
									? `+$${addOn.yearlyPrice}/yr`
									: `+$${addOn.monthlyPrice}/mo`}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PickAddOns;
