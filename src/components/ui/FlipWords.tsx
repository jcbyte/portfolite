import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const animation = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -10 },
	transition: { duration: 0.5 },
};

export default function FlipWords({ words, duration = 3000 }: { words: [string, ...string[]]; duration?: number }) {
	const [wordIndex, setWordIndex] = useState<number>(0);

	function nextWord() {
		setWordIndex((prev) => {
			return (prev + 1) % words.length;
		});
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextWord();
		}, duration);

		return () => {
			clearInterval(intervalId);
		};
	}, [nextWord, duration]);

	return (
		<div>
			<AnimatePresence mode="wait">
				<motion.div key={wordIndex} {...animation}>
					{words[wordIndex]}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
