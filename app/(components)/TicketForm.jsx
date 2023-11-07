'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const initialTicket = {
	title: '',
	description: '',
	priority: 1,
	progres: 0,
	status: 'not started',
	category: 'Frontend Problem',
};

export default function TicketForm({ updateTicketData }) {
	const EDITMODE = updateTicketData?._id === 'new' ? false : true;
	const [ticket, setTicket] = useState(initialTicket);

	const router = useRouter();

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setTicket((prevState) => ({ ...prevState, [name]: value }));
	};

	if (EDITMODE) {
		initialTicket.title = updateTicketData?.title;
		initialTicket.description = updateTicketData?.description;
		initialTicket.category = updateTicketData?.category;
		initialTicket.priority = updateTicketData?.priority;
		initialTicket.progres = updateTicketData?.progres;
		initialTicket.status = updateTicketData?.status;
	}

	console.log(ticket);
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (EDITMODE) {
			const resp = await fetch(`/api/tickets/${updateTicketData._id}`, {
				method: 'PUT',
				body: JSON.stringify(ticket),
				headers: { 'Content-Type': 'application/json' },
			});
			console.log('resp', resp);
			if (!resp.ok) {
				throw new Error('Failed to update ticket.');
			}
		} else {
			const resp = await fetch('/api/tickets', {
				method: 'POST',
				body: JSON.stringify(ticket),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!resp.ok) {
				throw new Error('Failed to create ticket.');
			}
		}

		router.refresh();
		router.push('/');
	};

	return (
		<div className="flex justify-center">
			<form
				className="flex flex-col gap-3 w-1/2"
				method="post"
				onSubmit={handleSubmit}
			>
				<h3>
					{EDITMODE ? 'Update your ticket' : 'Create Your Ticket'}
				</h3>
				<label>Title</label>
				<input
					type="text"
					id="title"
					name="title"
					value={ticket.title}
					onChange={handleChange}
					required
				/>
				<label>Description</label>
				<textarea
					id="description"
					name="description"
					value={ticket.description}
					onChange={handleChange}
					rows={5}
					required
				/>
				<label>Category</label>
				<select
					name="category"
					value={ticket.category}
					onChange={handleChange}
				>
					<option value="Frontend Problem">Frontend Problem</option>
					<option value="Backend Problem">Backend Problem</option>
					<option value="Network Problem">Network Problem</option>
				</select>
				<label>Priority</label>
				<div>
					<input
						type="radio"
						id="priority-1"
						name="priority"
						value={1}
						onChange={handleChange}
						checked={ticket.priority == 1}
					/>
					<label>1</label>
					<input
						type="radio"
						id="priority-2"
						name="priority"
						value={2}
						onChange={handleChange}
						checked={ticket.priority == 2}
					/>
					<label>2</label>
					<input
						type="radio"
						id="priority-3"
						name="priority"
						value={3}
						onChange={handleChange}
						checked={ticket.priority == 3}
					/>
					<label>3</label>
					<input
						type="radio"
						id="priority-4"
						name="priority"
						value={4}
						onChange={handleChange}
						checked={ticket.priority == 4}
					/>
					<label>4</label>
					<input
						type="radio"
						id="priority-5"
						name="priority"
						value={5}
						onChange={handleChange}
						checked={ticket.priority == 5}
					/>
					<label>5</label>
				</div>
				<label>Progress</label>
				<input
					type="range"
					id="progres"
					name="progres"
					value={ticket.progres}
					min={0}
					max={100}
					onChange={handleChange}
				/>
				<label>Status</label>
				<select
					name="status"
					value={ticket.status}
					onChange={handleChange}
				>
					<option value="not started">Not Started</option>
					<option value="started">Started</option>
					<option value="done">Done</option>
				</select>
				<input
					type="submit"
					value={EDITMODE ? 'Update Ticket' : 'Create Ticket'}
					className="btn"
				/>
			</form>
		</div>
	);
}
