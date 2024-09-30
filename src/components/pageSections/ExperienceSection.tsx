type Experience = {
	title: string;
	location: string;
	start: string;
	finish: string;
	description: string;
	type: "work" | "experience";
};

const experiences: Experience[] = [
	{
		title: "Software Developer",
		location: "ETAS",
		start: "June 2024",
		finish: "August 2024",
		description: "// todo",
		type: "work",
	},
	{
		title: "Software Developer",
		location: "Butterfly Data",
		start: "February 2023",
		finish: "June 2023",
		description: "// todo",
		type: "work",
	},
	{
		title: "Amgen Internship",
		location: "California",
		start: "February 2023",
		finish: "February 2023",
		description: "// todo",
		type: "experience",
	},
	{
		title: "Crew Worker",
		location: "McDonald's",
		start: "February 2022",
		finish: "January 2023",
		description: "// todo",
		type: "work",
	},
];

export default function ExperienceSection() {
	return <div>ExperienceSection</div>;
}
