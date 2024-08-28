import "./App.css";
import About from "./components/pageSections/About";
import PhotoProfile from "./components/pageSections/PhotoProfile";
import myPhoto from "./images/FriendlyPhoto1MB.jpg";

export default function App() {
	return (
		<div className="p-4 flex flex-col gap-4">
			<PhotoProfile
				name="Joel Cutler"
				photo={myPhoto}
				words={[
					"Software Developer",
					"Student",
					"Tech Enthusiast",
					"Passionate Coder",
					"Cat Lover",
					"Self Motivated",
					"Quick Learner",
					"Logical Thinker",
					"Dedicated Worker",
				]}
			/>
			<About />
		</div>
	);
}
