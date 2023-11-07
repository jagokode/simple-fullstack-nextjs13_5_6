'use client';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function DeleteBlock({ id }) {
	const router = useRouter();
	const handleDeleteTicket = async () => {
		const resp = await fetch(`/api/tickets/${id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			router.refresh();
		}
	};
	return (
		<FontAwesomeIcon
			icon={faX}
			className="text-red-400 hover:cursor-pointer hover:text-red-200"
			onClick={handleDeleteTicket}
		/>
	);
}
