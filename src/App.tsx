import "./App.css";
import PhotoProfile from "./components/pageSections/PhotoProfile";
import myPhoto from "./images/FriendlyPhoto1MB.jpg";

export default function App() {
	return (
		<>
			<PhotoProfile name="Joel Cutler" photo={myPhoto} words={["Developer", "Student", "Partier"]} />
		</>
	);
}
