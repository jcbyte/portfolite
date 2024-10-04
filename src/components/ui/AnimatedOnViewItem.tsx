import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedOnViewItem({ children }: { children: React.ReactNode }) {
	const ref = useRef(null);
	const inView = useInView(ref, {
		amount: 0.5,
		once: true,
	});

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			transition={{ duration: 0.5, ease: "easeOut" }}
			variants={{
				hidden: { opacity: 0, y: 24 },
				visible: { opacity: 1, y: 0 },
			}}
		>
			{children}
		</motion.div>
	);
}
