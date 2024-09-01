import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Sparkles from "./Sparkles";

const wordAnimation = {
	initial: {},
	animate: {
		scale: 1.8,
		textShadow: "0 0 10px var(--cyan-400)",
		rotateX: 360,
		color: "var(--cyan-500)",
	},
	transition: { type: "spring", stiffness: 100, duration: 0.1 },
};

export default function FancyWord({ children, id }: { children: ReactNode; id: string }) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

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
