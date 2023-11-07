import Link from 'next/link';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

export default function TicketCard({ ticket }) {
	return (
		<div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
			<div className="flex mb-3 justify-between">
				<PriorityDisplay priority={ticket.priority} />
				<DeleteBlock id={ticket._id} />
			</div>
			<Link
				href={`/ticket/${ticket._id}`}
				style={{ display: 'contents' }}
			>
				<h4>{ticket.title}</h4>
				<hr className="h-px border-0 bg-page mb-2" />
				<p className="whitespace-pre-wrap">{ticket.description}</p>
				{/* <div className="flex-grow"></div> */}
				<div className="flex mt-2">
					<div className="flex flex-col">
						<p className="text-xs my-1">
							{new Date(ticket.createdAt).toLocaleString('id', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
								hour: '2-digit',
								minute: '2-digit',
								hour12: true,
							})}
						</p>
						<ProgressDisplay progres={ticket.progres} />
					</div>
					<div className="flex ml-auto items-end">
						<StatusDisplay status={ticket.status} />
					</div>
				</div>
			</Link>
		</div>
	);
}
