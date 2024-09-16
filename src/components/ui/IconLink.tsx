import { IconProps } from "@tabler/icons-react";
import React from "react";

export default function IconLink({ link, Icon }: { link: string; Icon: React.ForwardRefExoticComponent<IconProps> }) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<Icon size={30} />
		</a>
	);
}
