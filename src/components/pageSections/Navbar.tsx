// TODO animation from full to floating when scrolling from top.

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	// Track scroll position to toggle navbar state
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				console.log("t");
				setIsScrolled(true);
			} else {
				console.log("f");
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		// TODO create gap here which is the same height as the full navbar

		<div className="w-full fixed z-50">
			<motion.div
				className="bg-zinc-800 absolute p-2 rounded-full"
				animate={{
					left: isScrolled ? "2rem" : 0,
					right: isScrolled ? "2rem" : 0,
					top: isScrolled ? "0.5rem" : 0,
					borderRadius: isScrolled ? "8px" : 0,
				}}
			>
				Navbar
			</motion.div>
		</div>
	);
}
