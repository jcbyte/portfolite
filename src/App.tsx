import "./App.css";
import About from "./components/pageSections/About";
import PhotoProfile from "./components/pageSections/PhotoProfile";
export default function App() {
	return (
		<div className="p-4 flex flex-col gap-4">
			<PhotoProfile />
			<About />
		</div>
	);
}
