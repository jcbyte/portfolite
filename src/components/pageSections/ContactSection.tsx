import { IconBrandGithub, IconBrandInstagram, IconMail } from "@tabler/icons-react";

// TODO links

export default function ContactSection() {
	return (
		<div className="bg-zinc-900 flex flex-col justify-center items-center p-4 gap-2">
			<div className="text-4xl">Contact Me</div>
			<div className="p-2 flex gap-2">
				<IconMail></IconMail>
				<IconBrandInstagram></IconBrandInstagram>
				<IconBrandGithub></IconBrandGithub>
			</div>
		</div>
	);
}
