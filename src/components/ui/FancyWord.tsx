import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Sparkles from "./Sparkles";

export default function FancyWord({
	children,
	id,
	textColour,
	glowColour,
}: {
	children: ReactNode;
	id: string;
	textColour?: string;
	glowColour?: string;
}) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const wordAnimation = {
		initial: {},
		animate: {
			scale: 1.8,
			textShadow: `0 0 10px var(--${glowColour ?? "cyan-400"})`,
			rotateX: 360,
			color: `var(--${textColour ?? "cyan-500"})`,
		},
		transition: { type: "spring", stiffness: 100, duration: 0.1 },
	};
	const { animate: wordAnimationAnimate, ...wordAnimationExtra } = wordAnimation;

	return (
		<div
			className="relative font-bold inline-block px-1 align-baseline leading-[1em]"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Sparkles id={`fancy-${id}`} />
			<motion.div
				className="font-bold align-baseline leading-[1em]"
				animate={isHovered ? wordAnimationAnimate : undefined}
				{...wordAnimationExtra}
			>
				{children}
			</motion.div>
		</div>
	);
}
