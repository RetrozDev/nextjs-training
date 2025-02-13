import styles from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
	return (
		<div className={styles.contact}>
			<h1>Me contacter</h1>
			<div className={styles.links}>
				<Link href={"contact/youtube"}>Youtube</Link>
				<Link href={"contact/instagram"}>Instagram</Link>
				<Link href={"contact/linkedin"}>Linkedin</Link>
			</div>
		</div>
	);
}
