import { useState } from 'react';
import './App.css';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import { ThemeProvider } from './components/ThemeToggler';

function App() {
	const [customer, setCustomer] = useState({
		name: '',
		service: '',
		status: 'waiting',
	});
	const [allCustomers, setAllCustomers] = useState([]);
	const handleAddCustomer = (e) => {
		const {
			target: { name, value },
		} = e;
		console.log('name, value ', name, value);

		setCustomer((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (currentCustomer) => {
		setAllCustomers((prev) => {
			return [...prev, { id: Date.now(), ...currentCustomer }];
		});
		console.log('hello customer in submit', customer);
		setCustomer({
			name: '',
			service: '',
			status: 'waiting',
		});
	};
	const handleUpdateStatus = (id, updatedStatus) => {
		setAllCustomers(
			allCustomers.map((item) =>
				item.id === id ? { ...item, status: updatedStatus } : item,
			),
		);
	};
	const handleDelete = (id) => {
		setAllCustomers(allCustomers.filter((item) => item.id !== id));
	};
	return (
		<div className='min-h-screen bg-gray-100 p-6'>
			<ThemeProvider>
				<div className='max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6'>
					<h1 className='text-3xl font-bold text-center mb-6'>
						Queue Management System
					</h1>

					<CustomerForm
						customer={customer}
						handleSubmit={handleSubmit}
						handleAddCustomer={handleAddCustomer}
					/>

					<CustomerList
						customer={allCustomers}
						handleDelete={handleDelete}
						handleUpdateStatus={handleUpdateStatus}
					/>
				</div>
			</ThemeProvider>
		</div>
	);
}

export default App;
