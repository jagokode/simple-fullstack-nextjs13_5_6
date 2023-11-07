import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Navigation() {
	return (
		<nav className="flex bg-nav p-4">
			<div className="flex items-center space-x-4">
				<Link href="/">
					<FontAwesomeIcon icon={faHome} className="icon" />
				</Link>
				<Link href="/ticket/new">
					<FontAwesomeIcon icon={faTicket} className="icon" />
				</Link>
			</div>
			<div className="ml-auto">
				<p className="text-default-text">jagokode@mail.com</p>
			</div>
		</nav>
	);
}
