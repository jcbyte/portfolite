import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import IconLink from "../ui/IconLink";

export default function ContactSection() {
	return (
		<div className="bg-zinc-900 flex flex-col justify-center items-center p-4 gap-2">
			<div className="text-4xl">Contact Me</div>
			<div className="p-2 flex gap-2 justify-center items-center">
				<IconLink link="mailto:joelcutler108@gmail.com" Icon={IconMail} size={30} />
				<IconLink link="https://www.instagram.com/joelcutler7/" Icon={IconBrandInstagram} size={30} />
				<IconLink link="https://github.com/jcbyte" Icon={IconBrandGithub} size={30} />
				<IconLink link="https://www.linkedin.com/in/joelcutler/" Icon={IconBrandLinkedin} size={30} />
			</div>
		</div>
	);
}
