import { initParticlesEngine } from "@tsparticles/react";
import { useEffect } from "react";
import { loadFull } from "tsparticles";
import "./App.css";
import AboutSection from "./components/pageSections/AboutSection";
import ContactSection from "./components/pageSections/ContactSection";
import Navbar from "./components/pageSections/Navbar";
import PhotoProfileSection from "./components/pageSections/PhotoProfileSection";
export default function App() {
	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine);
		});
	}, []);

	return (
		<>
			<Navbar />
			<div className="p-4 flex flex-col gap-4">
				<PhotoProfileSection />
				<AboutSection />
			</div>
			<div className="!h-[1000px]">// TODO remove this, this is for testing navbar</div>
			<ContactSection />
		</>
	);
}
