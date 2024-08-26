import { motion, MotionValue, useMotionTemplate, useMotionValue } from "framer-motion";

export default function HoverVignette({ bgClass, radius }: { bgClass: string; radius: string }) {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		// Calculate mouse position relative to the element
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div onMouseMove={onMouseMove} className="group/card absolute inset-0">
			<HoverPattern mouseX={mouseX} mouseY={mouseY} bgClass={bgClass} radius={radius} />
		</div>
	);
}

function HoverPattern({
	mouseX,
	mouseY,
	bgClass,
	radius,
}: {
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
	bgClass: string;
	radius: string;
}) {
	// Create a radial gradient mask that follows the mouse position
	let maskImage = useMotionTemplate`radial-gradient(${radius} at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage: maskImage, WebkitMaskImage: maskImage };

	return (
		<div className="pointer-events-none">
			<div className={`absolute inset-0 ${bgClass} opacity-50`} />
			<motion.div
				className={`absolute inset-0 ${bgClass} opacity-0 group-hover/card:opacity-100 transition duration-500`}
				style={style}
			/>
		</div>
	);
}
