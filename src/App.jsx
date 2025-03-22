import { useState } from 'react';
import IconArcade from '/images/icon-arcade.svg';
import IconAdvanced from '/images/icon-advanced.svg';
import IconPro from '/images/icon-pro.svg';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import SelectPlan from './components/SelectPlan';
import Buttons from './components/Buttons';
import PickAddOns from './components/PickAddOns';
import Summary from './components/Summary';
function App() {
	/* Data */

	const steps = [
		{ number: 1, label: 'YOUR INFO' },
		{ number: 2, label: 'SELECT PLAN' },
		{ number: 3, label: 'ADD-ONS' },
		{ number: 4, label: 'SUMMARY' },
	];
	const plans = [
		{
			id: 1,
			name: 'Arcade',
			monthlyPrice: 9,
			yearlyPrice: 90,
			icon: IconArcade,
		},
		{
			id: 2,
			name: 'Advanced',
			monthlyPrice: 12,
			yearlyPrice: 120,
			icon: IconAdvanced,
		},
		{
			id: 3,
			name: 'Pro',
			monthlyPrice: 15,
			yearlyPrice: 150,
			icon: IconPro,
		},
	];
	const addOnsData = [
		{
			id: 1,
			name: 'Online service',
			description: 'Access to multiplayer games',
			monthlyPrice: 1,
			yearlyPrice: 10,
			checked: false,
		},
		{
			id: 2,
			name: 'Larger storage',
			description: 'Extra 1TB of cloud save',
			monthlyPrice: 2,
			yearlyPrice: 20,
			checked: false,
		},
		{
			id: 3,
			name: 'Customizable profile',
			description: 'Custom theme on your profile',
			monthlyPrice: 2,
			yearlyPrice: 20,
			checked: false,
		},
	];

	/* States */

	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const [selectedPlan, setSelectedPlan] = useState(plans[0]);
	const [addOns, setAddOns] = useState(addOnsData);
	const [selectedAddOns, setSelectedAddOns] = useState([]);
	const [isYearly, setIsYearly] = useState(false);
	const [isConfirmed, setIsConfirmed] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 850);

	/* Functions */

	// Validation
	const validateStep = () => {
		let newErrors = {};
		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			formData.phone.length < 9
		) {
			newErrors = {
				name: !formData.name ? 'Error' : '',
				email: !formData.email ? 'Error' : '',
				phone: !formData.phone || formData.phone.length < 9 ? 'Error' : '',
			};
		} else if (isConfirmed) {
			return false;
		}
		return Object.keys(newErrors).length === 0;
	};

	// Buttons functions
	const goNext = () => {
		if (validateStep() && currentStep < 4) {
			setCurrentStep(currentStep + 1);
		} else if (currentStep === 4) {
			setIsConfirmed(true);
		}
	};

	const goBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const buttonText = () => {
		if (currentStep === 4) {
			return 'Confirm';
		} else {
			return 'Next Step';
		}
	};

	const backButtonText = () => {
		if (currentStep === 1) {
			return '';
		} else {
			return 'Go Back';
		}
	};

	// Sidebar functions

	const setStep = (step) => {
		if (step < currentStep && validateStep()) {
			setCurrentStep(step);
		}
	};

	// Toggle
	const toggleCheck = (id) => {
		setAddOns((prevAddOns) => {
			const updatedAddOns = prevAddOns.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
			);
			setSelectedAddOns(updatedAddOns.filter((item) => item.checked));
			return updatedAddOns;
		});
	};

	const resizeHandler = () => {
		setIsDesktop(window.innerWidth > 850);
	};

	window.addEventListener('resize', resizeHandler);

	const displayStep = () => {
		if (currentStep === 1) {
			return (
				<Form
					formData={formData}
					setFormData={setFormData}
					currentStep={currentStep}
					goNext={goNext}
					isDesktop={isDesktop}
				/>
			);
		} else if (currentStep === 2) {
			return (
				<SelectPlan
					isYearly={isYearly}
					setIsYearly={setIsYearly}
					plans={plans}
					selectedPlan={selectedPlan}
					setSelectedPlan={setSelectedPlan}
				/>
			);
		} else if (currentStep === 3) {
			return (
				<PickAddOns
					addOns={addOns}
					toggleCheck={toggleCheck}
					isYearly={isYearly}
				/>
			);
		} else {
			return (
				<Summary
					selectedPlan={selectedPlan}
					isYearly={isYearly}
					selectedAddOns={selectedAddOns}
					isConfirmed={isConfirmed}
					setCurrentStep={setCurrentStep}
				/>
			);
		}
	};

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			onKeyUp={(e) => e.key === 'Enter' && goNext()}
			className={`${
				!isDesktop && 'mobile-background'
			} flex flex-col md:flex-row md:justify-center gap-10 pt-10 items-center h-screen relative bg-magnolia`}>
			{!isDesktop && (
				<Sidebar
					currentStep={currentStep}
					steps={steps}
					isDesktop={isDesktop}
					setStep={setStep}
				/>
			)}
			<div className='flex bg-white rounded-xl mx-6 p-4 gap-4 relative shadow-lg'>
				{isDesktop && (
					<Sidebar
						currentStep={currentStep}
						steps={steps}
						isDesktop={isDesktop}
						setStep={setStep}
					/>
				)}

				<div className='flex flex-col'>
					<div className='flex-grow'>{displayStep()}</div>
					<div className={isConfirmed || !isDesktop ? 'hidden' : ''}>
						<Buttons
							currentStep={currentStep}
							goNext={goNext}
							goBack={goBack}
							buttonText={buttonText()}
							backButtonText={backButtonText()}
							isDesktop={isDesktop}
						/>
					</div>
				</div>
			</div>
			<footer
				className={`${
					isConfirmed && 'hidden'
				} absolute bottom-0 bg-white w-full py-4 md:hidden`}>
				<Buttons
					currentStep={currentStep}
					goNext={goNext}
					goBack={goBack}
					buttonText={buttonText()}
					backButtonText={backButtonText()}
					isDesktop={isDesktop}
				/>
			</footer>
		</form>
	);
}

export default App;
