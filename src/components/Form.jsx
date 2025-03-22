const Form = ({ formData, setFormData }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};
	return (
		<div className='flex flex-col md:px-20 md:py-10 px-2 py-3 gap-3 md:gap-6 md:w-[38rem] '>
			<div className='flex flex-col gap-1 md:pb-4'>
				<h3 className='text-3xl font-ubuntu-bold text-marineblue'>
					Personal info
				</h3>
				<p className='text-coolgray'>
					Please provide your name, email address, and phone number.
				</p>
			</div>
			<div className='flex flex-col gap-1'>
				<label
					className='text-marineblue font-ubuntu-medium'
					for='name'>
					Name
				</label>

				<input
					className='input validator w-full rounded-md placeholder-coolgray placeholder:font-ubuntu-medium capitalize placeholder:normal-case font-ubuntu-medium p-4 hover:border-purplishblue focus:border-purplishblue focus:outline-none text-marineblue text-[16px]'
					name='name'
					value={formData.name}
					onChange={handleChange}
					required
					placeholder='e.g. Stephen King'
				/>
				<div className='validator-hint absolute right-7 md:right-30 '>
					This field is required
				</div>
			</div>
			<div className='flex flex-col gap-1'>
				<label
					className='text-marineblue font-ubuntu-medium'
					for='email'>
					Email Address
				</label>

				<input
					className='input validator w-full rounded-md placeholder-coolgray placeholder:font-ubuntu-medium font-ubuntu-medium p-4 hover:border-purplishblue focus:border-purplishblue focus:outline-none text-marineblue text-[16px]'
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					required
					placeholder='e.g. stephenking@lorem.com'
				/>
				<div className='validator-hint absolute right-7 md:right-30 '>
					Enter valid email address
				</div>
			</div>
			<div className='flex flex-col gap-1'>
				<label
					className='text-marineblue font-ubuntu-medium'
					for='phone'>
					Phone Number
				</label>

				<input
					className='input validator tabular-nums w-full rounded-md placeholder-coolgray placeholder:font-ubuntu-medium font-ubuntu-medium p-4 hover:border-purplishblue focus:border-purplishblue focus:outline-none text-marineblue text-[16px]'
					pattern='^\+?[0-9\s-]+$'
					minlength='9'
					type='tel'
					name='phone'
					value={formData.phone}
					onChange={handleChange}
					required
					placeholder='e.g. +1 234 567 890'
				/>
				<div className='validator-hint absolute right-7 md:right-30 '>
					Must be a valid phone number
				</div>
			</div>
		</div>
	);
};

export default Form;
