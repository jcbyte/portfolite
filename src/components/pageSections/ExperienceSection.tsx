import { IconDeviceLaptop, IconStar } from "@tabler/icons-react";

type Experience = {
	title: string;
	location: string;
	start: string;
	finish?: string;
	description: string;
	type: "work" | "experience";
};

const experiences: Experience[] = [
	{
		title: "ETAS - Software Developer",
		location: "York",
		start: "June 2024",
		finish: "August 2024",
		description: "// todo",
		type: "work",
	},
	{
		title: "Butterfly Data - Software Developer",
		location: "Cardiff (Remote)",
		start: "February 2023",
		finish: "June 2023",
		description: "// todo",
		type: "work",
	},
	{
		title: "Amgen Internship",
		location: "Los Angeles, California",
		start: "February 2023",
		description: "// todo",
		type: "experience",
	},
	{
		title: "McDonald's - Crew Worker",
		location: "Bodmin, Cornwall",
		start: "February 2022",
		finish: "January 2023",
		description: "// todo",
		type: "work",
	},
];

export default function ExperienceSection() {
	return (
		<div className="flex justify-center">
			<div className="relative w-full max-w-[56rem] px-4">
				<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-700 rounded-full -z-10" />
				{experiences.map((item, i) => (
					<div
						key={i}
						className={`mb-6 flex justify-between items-center w-full ${
							item.type === "experience" && "flex-row-reverse"
						}`}
					>
						<div className={`w-5/12 ${item.type === "work" ? "text-right" : "text-left"}`}>
							<div className="relative bg-zinc-900 p-4 rounded-lg border border-zinc-700">
								<div className="text-sm font-medium text-zinc-400">
									{item.start}
									{item.finish && <> - {item.finish}</>}
								</div>
								<div className="text-lg font-semibold mt-1">{item.title}</div>
								<div className="text-sm font-medium text-zinc-400 mt-1">{item.location}</div>
								<div className="text-sm mt-2">{item.description}</div>
								<div
									className={`absolute top-1/2 ${
										item.type === "experience" ? "-left-[16.666667%] w-2/12" : "-right-[16.666667%] w-2/12"
									} h-0.5 bg-zinc-700 -z-10 transform -translate-y-1/2`}
								/>
							</div>
						</div>
						<div className="flex items-center justify-center size-8 bg-zinc-950 rounded-full">
							{item.type === "work" ? (
								<IconDeviceLaptop className="size-5 text-zinc-200" />
							) : (
								<IconStar className="size-5 text-zinc-200" />
							)}
						</div>
						<div className="w-5/12" />
					</div>
				))}
			</div>
		</div>
	);
}
