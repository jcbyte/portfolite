import { motion } from "framer-motion";
import { ReactNode } from "react";
import Sparkles from "./Sparkles";

const letterAnimation = {
	initial: { font: 0, y: 10, filter: "blur(2px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
	exit: { opacity: 0, y: -10, filter: "blur(2px)" },
	transition: { duration: 0.5, ease: "easeInOut" },
};

export default function BoldWord({ children }: { children: ReactNode }) {
	return (
		<motion.div
			className="relative font-bold inline-block bg-zinc-800 px-1 text-teal-500"
			whileHover={{ scale: 1.2 }}
			transition={{ type: "spring", stiffness: 100, duration: 0.1 }}
		>
			<Sparkles />
			{children}
		</motion.div>
	);
}
