import { useTheme } from './components/ThemeToggler';

const CustomerForm = ({ customer, handleAddCustomer, handleSubmit }) => {
	const  {theme}  = useTheme();
	console.log('themeValue', theme);

	return (
		<div className='mb-8'>
			<h3 className='text-xl font-semibold mb-4'>Add Customer</h3>

			<div className='flex gap-4 flex-wrap'>
				<input
					type='text'
					name='name'
					placeholder='Customer Name'
					value={customer.name}
					onChange={handleAddCustomer}
					className='border p-2 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-400'
				/>

				<select
					name='service'
					value={customer.service}
					onChange={handleAddCustomer}
					className='border p-2 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-400'
				>
					<option value=''>Select Service</option>
					<option value='consultation'>Consultation</option>
					<option value='payment'>Payment</option>
					<option value='support'>Support</option>
				</select>

				<button
					onClick={() => handleSubmit(customer)}
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
				>
					Add Customer
				</button>
			</div>
		</div>
	);
};
export default CustomerForm;
