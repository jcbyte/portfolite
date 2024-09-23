import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [navbarHeight, setNavbarHeight] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			console.log(window.scrollY, navbarHeight);
			if (window.scrollY > navbarHeight) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [navbarHeight]);

	const getNavbarHeight = (node: HTMLDivElement) => {
		console.log(node);

		if (node) {
			const calculatedHeight: number = node.getBoundingClientRect().height;
			setNavbarHeight(calculatedHeight);
			console.log(calculatedHeight);
		}
	};

	return (
		<>
			<div className="w-full fixed z-50">
				<motion.div
					ref={getNavbarHeight}
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

			{/* This div is to create empty space where the "static" navbar should be when the user is at the top of the page */}
			<div style={{ height: `${navbarHeight}px` }}></div>
		</>
	);
}
