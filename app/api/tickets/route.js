import Ticket from '../../(models)/ticket';
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const ticketData = await req.json();
		await Ticket.create(ticketData);
		return NextResponse.json(
			{ message: 'Ticket created' },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}

export async function GET(req) {
	try {
		const tickets = await Ticket.find();
		return NextResponse.json({ tickets }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
