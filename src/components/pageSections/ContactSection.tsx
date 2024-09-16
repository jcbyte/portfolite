import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function ContactSection() {
	return (
		<div className="bg-zinc-900 flex flex-col justify-center items-center p-4 gap-2">
			<div className="text-4xl">Contact Me</div>
			<div className="p-2 flex gap-2 justify-center items-center">
				<a href="mailto:joelcutler108@gmail.com">
					<IconMail size={30} />
				</a>
				<a href="https://www.instagram.com/joelcutler7" target="_blank" rel="noopener noreferrer">
					<IconBrandInstagram size={30} />
				</a>
				<a href="https://github.com/jcbyte" target="_blank" rel="noopener noreferrer">
					<IconBrandGithub size={30} />
				</a>
				<a href="https://www.linkedin.com/in/joelcutler/" target="_blank" rel="noopener noreferrer">
					<IconBrandLinkedin size={30} />
				</a>
			</div>
		</div>
	);
}
