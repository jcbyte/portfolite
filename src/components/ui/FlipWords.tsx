import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const letterAnimation = {
	initial: { opacity: 0, y: 10, filter: "blur(2px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
	exit: { opacity: 0, y: -10, filter: "blur(2px)" },
	transition: { duration: 0.5, ease: "easeInOut" },
};

export default function FlipWords({ words, duration = 3000 }: { words: [string, ...string[]]; duration?: number }) {
	const [wordIndex, setWordIndex] = useState<number>(0);

	function nextWord() {
		setWordIndex((prev) => (prev + 1) % words.length);
	}

	useEffect(() => {
		const intervalId = setInterval(nextWord, duration);
		return () => clearInterval(intervalId);
	}, [nextWord, duration]);

	return (
		<div>
			<AnimatePresence mode="wait">
				{words[wordIndex].split("").map((letter, index) => {
					return (
						<motion.span
							key={`${wordIndex}-${index}`}
							{...letterAnimation}
							transition={{
								...letterAnimation.transition,
								delay: index * 0.01,
							}}
							style={{ display: "inline-block" }}
						>
							{letter}
						</motion.span>
					);
				})}
			</AnimatePresence>
		</div>
	);
}
