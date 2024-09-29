import { initParticlesEngine } from "@tsparticles/react";
import { useEffect } from "react";
import { loadFull } from "tsparticles";
import "./App.css";
import AboutSection from "./components/pageSections/AboutSection";
import AchievementsSection from "./components/pageSections/AchievementsSection";
import ContactSection from "./components/pageSections/ContactSection";
import EducationSection from "./components/pageSections/EducationSection";
import ExperienceSection from "./components/pageSections/ExperienceSection";
import Navbar from "./components/pageSections/Navbar";
import PhotoProfileSection from "./components/pageSections/PhotoProfileSection";
import ProjectsSection from "./components/pageSections/ProjectsSection";
import SkillsSection from "./components/pageSections/SkillsSection";
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
				<ExperienceSection />
				<ProjectsSection />
				<AchievementsSection />
				<EducationSection />
				<SkillsSection />
			</div>
			<ContactSection />
		</>
	);
}
