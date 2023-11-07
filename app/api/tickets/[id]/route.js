import Ticket from '../../../(models)/ticket';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
	try {
		const { id } = params;

		const ticket = await Ticket.findOne({ _id: id });

		return NextResponse.json({ ticket }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}

export async function PUT(req, { params }) {
	try {
		const { id } = params;
		const newData = await req.json();
		const updateTicket = await Ticket.findByIdAndUpdate(
			{ _id: id },
			{ ...newData },
			{ new: true }
		);
		return NextResponse.json(
			{ message: 'Ticket updated' },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}

export async function DELETE(req, { params }) {
	try {
		const { id } = params;
		await Ticket.findByIdAndDelete(id);

		return NextResponse.json(
			{ message: 'Ticket deleted' },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
