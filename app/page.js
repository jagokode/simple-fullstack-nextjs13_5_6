import TicketCard from './(components)/TicketCard';

const getTickets = async () => {
	try {
		const resp = await fetch('http://localhost:3000/api/tickets', {
			cache: 'no-store',
		});

		return resp.json();
	} catch (error) {
		console.log('Failed to get tickets', error);
	}
};

export default async function Dashboard() {
	const { tickets } = await getTickets();
	// use Set to avoid duplicated categories
	const uniqueCategories = [
		...new Set(tickets?.map(({ category }) => category)),
	];

	return (
		<div className="p-5">
			<div>
				{tickets &&
					uniqueCategories?.map((uniqueCategory, categoryIndex) => (
						<div key={categoryIndex} className="mb-4">
							<h2>{uniqueCategory}</h2>
							<article className="lg:grid grid-cols-2 xl:grid-cols-4">
								{tickets
									.filter(
										(ticket) =>
											ticket.category === uniqueCategory
									)
									.map((filteredTicket, _index) => {
										return (
											<TicketCard
												key={_index}
												id={filteredTicket._id}
												ticket={filteredTicket}
											/>
										);
									})}
							</article>
						</div>
					))}
			</div>
		</div>
	);
}
