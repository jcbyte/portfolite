import "./App.css";
import PhotoProfile from "./components/pageSections/PhotoProfile";
import myPhoto from "./images/FriendlyPhoto1MB.jpg";

export default function App() {
	return (
		<>
			<PhotoProfile
				name="Joel Cutler"
				photo={myPhoto}
				words={[
					"Software Developer",
					"Student",
					"Tech Enthusiast",
					"Passionate Coder",
					"Self Motivated",
					"Quick Learner",
					"Logical Thinker",
					"Dedicated Worker",
					"Team Player",
					"Problem Solver",
					"Organised Planner",
				]}
			/>
		</>
	);
}
