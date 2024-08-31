import "./App.css";
import AboutSection from "./components/pageSections/AboutSection";
import PhotoProfileSection from "./components/pageSections/PhotoProfileSection";
export default function App() {
	return (
		<div className="p-4 flex flex-col gap-4">
			<PhotoProfileSection />
			<AboutSection />
		</div>
	);
}
