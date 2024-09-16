import { IconProps } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

export default function IconLink({
	link,
	Icon,
	size,
	colour,
	hoverColour,
}: {
	link: string;
	Icon: React.ForwardRefExoticComponent<IconProps>;
	size?: number;
	colour?: string;
	hoverColour?: string;
}) {
	return (
		<motion.a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			style={{ color: `var(--${colour ?? "zinc-200"})` }}
			whileHover={{ color: `var(--${hoverColour ?? "cyan-500"})` }} // Change to desired color on hover
		>
			<Icon size={size} />
		</motion.a>
	);
}
