export default function CustomerList({
	customer,
	handleUpdateStatus,
	handleDelete,
}) {
	return (
		<div>
			<h2 className='text-xl font-semibold mb-4'>Customer Queue</h2>

			<table className='w-full border-collapse'>
				<thead>
					<tr className='bg-gray-200 text-left'>
						<th className='p-3'>Name</th>
						<th className='p-3'>Service</th>
						<th className='p-3'>Status</th>
						<th className='p-3'>Actions</th>
					</tr>
				</thead>

				<tbody>
					{customer?.map((item) => (
						<tr key={item.id} className='border-b hover:bg-gray-50 transition'>
							<td className='p-3'>{item.name}</td>
							<td className='p-3 capitalize'>{item.service}</td>

							<td className='p-3'>
								<span
									className={`px-2 py-1 rounded text-sm ${
										item.status === 'serving'
											? 'bg-green-200 text-green-700'
											: 'bg-yellow-200 text-yellow-700'
									}`}
								>
									{item.status}
								</span>
							</td>

							<td className='p-3 flex gap-2'>
								<button
									onClick={() => handleUpdateStatus(item.id, 'serving')}
									className='bg-green-500  px-3 py-1 rounded hover:bg-green-600'
								>
									Update
								</button>

								<button
									onClick={() => handleDelete(item.id)}
									className='bg-red-500 px-3 py-1 rounded hover:bg-red-600'
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{customer.length === 0 && (
				<p className='text-center text-gray-500 mt-4'>No customers in queue</p>
			)}
		</div>
	);
}
