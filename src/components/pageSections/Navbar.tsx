// TODO animation from full to floating when scrolling from top.

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
		<div className="w-full">
			<div className="bg-zinc-800/95 p-2 ">Navbar</div>
		</div>
		// <div className="w-full fixed z-50">
		// 	<div className="bg-zinc-800/95 absolute my-2 inset-x-8 p-2 rounded-full">Navbar</div>
		// </div>
	);
}
