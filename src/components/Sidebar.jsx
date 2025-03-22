import BgSidebarDesktop from '/images/bg-sidebar-desktop.svg';

const Sidebar = ({ currentStep, steps, isDesktop, setStep }) => {
	return (
		<div className='relative '>
			<img
				src={BgSidebarDesktop}
				alt='sidebar'
				className='hidden md:block'
			/>
			<div className={isDesktop ? 'sidebar' : 'flex gap-5'}>
				{steps.map((step) => (
					<div
						key={step.number}
						className='flex items-center gap-4'>
						<div
							className={`${
								currentStep === step.number
									? 'bg-lightblue text-marineblue'
									: ' text-white outline'
							} font-ubuntu-medium transition-colors duration-300 rounded-full w-9 h-9 flex justify-center items-center pb-0.5  cursor-pointer`}
							onClick={() => setStep(step.number)}>
							{step.number}
						</div>

						<div className='hidden md:flex flex-col '>
							<span className='text-lightgray text-[13px] '>
								STEP {step.number}
							</span>
							<span className='text-white font-ubuntu-bold text-sm tracking-wider'>
								{step.label}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
