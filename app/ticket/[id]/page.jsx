import TicketForm from '../../(components)/TicketForm';

const getTicketById = async (id) => {
	try {
		const resp = await fetch(`http://localhost:3000/api/tickets/${id}`, {
			cache: 'no-store',
		});

		if (!resp.ok) {
			throw new Error('Failed to get ticket');
		}

		let data = await resp.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
export default async function TicketPage({ params }) {
	const EDITMODE = params.id === 'new' ? false : true;
	let updateTicketData = {};
	if (EDITMODE) {
		updateTicketData = await getTicketById(params.id);
		updateTicketData = updateTicketData?.ticket;
	} else {
		updateTicketData = {
			_id: 'new',
		};
	}

	return (
		<>
			<TicketForm updateTicketData={updateTicketData} />
		</>
	);
}
