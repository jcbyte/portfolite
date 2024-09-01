import { motion } from "framer-motion";
import { ReactNode } from "react";
import Sparkles from "./Sparkles";

const wordAnimation = {
	whileHover: { scale: 1.2 },
	transition: { type: "spring", stiffness: 100, duration: 0.1 },
};

export default function FancyWord({ children, id }: { children: ReactNode; id: string }) {
	return (
		<motion.div className="relative font-bold inline-block px-1 align-baseline leading-[1em]" {...wordAnimation}>
			<Sparkles id={`fancy-${id}`} />
			{children}
		</motion.div>
	);
}
