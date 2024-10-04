import { IconDeviceLaptop, IconStar } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Experience = {
	title: string;
	location: string;
	start: string;
	finish?: string;
	description: string;
	type: "work" | "experience";
};

// TODO work maybe company and title can be separate ?
// TODO animations
// TODO possibly only show top 5/6 then an expand button could be pressed?
// TODO block widths dependent on screen size

const experiences: Experience[] = [
	{
		title: "ETAS - Software Developer",
		location: "York",
		start: "June 2024",
		finish: "August 2024",
		description:
			"I worked as a software developer creating a demo for EHOOKS, a decompiler for ECU software used within the automotive industry. This was made with ruby which I enjoyed getting to use and learn. I used SVN to manage version control and followed a strict review system for merging. I gained communication and coding skills as well as learning a lot from being in a larger organisation with very set goals and deadlines.",
		type: "work",
	},
	{
		title: "Butterfly Data - Software Developer",
		location: "Cardiff (Remote)",
		start: "February 2023",
		finish: "June 2023",
		description:
			"I worked as a software developer working on an internal project management system for the company using Python with frameworks such as pandas and Dash. I used Git to manage changes and branches of the code for different releases. I gained skills and learnt a lot from being in a professional coding environment.",
		type: "work",
	},
	{
		title: "Amgen Internship",
		location: "Los Angeles, California",
		start: "February 2023",
		description:
			"At the start of the year, I spent a month in California working with Amgen (a biotech company) creating a web app to catalogue and search their medicine. Through this process I learnt JavaScript with the React framework and integrated it with a Django backend which I have used again multiple times in personal projects. The project also involved creating and managing a Postgres database hosted on AWS which my app interfaced with. This was an incredible experience and I learnt a lot in terms of technical skills as well as soft skills with the other people there.",
		type: "experience",
	},
	{
		title: "McDonald's - Crew Worker",
		location: "Bodmin, Cornwall",
		start: "February 2022",
		finish: "January 2023",
		description:
			"I do whatever is required to keep the restaurant running smoothly: speaking to and serving customers, cooking and preparing food, taking orders, payments and cleaning. I have gained multiple skills, including communication and collaboration with other crew and the ability to be quick and efficient in my work.",
		type: "work",
	},
	{
		title: "Eden Project Work Experience",
		location: "Par, Cornwall",
		start: "2021",
		description:
			"I worked on location at the Eden Project with Eden's IT team to assist and troubleshoot general tech problems, I was also involved with a professional external team to install multiple 4K 360° cameras to trial a 5G infrastructure. This work meant I had to be punctual and communicative as well as giving me an insight into company structure and operating procedures. Throughout the experience I talked to programmers and learnt about the servers running the software and camera stitching algorithms.",
		type: "experience",
	},
	{
		title: "Swallow's Barn Holiday Let - Assistant",
		location: "Summercourt, Cornwall",
		start: "July 2021",
		finish: "September 2021",
		description:
			"I do whatever is required to keep the restaurant running smoothly: speaking to and serving customers, cooking and preparing food, taking orders, payments and cleaning. I have gained multiple skills, including communication and collaboration with other crew and the ability to be quick and efficient in my work.",
		type: "work",
	},
	{
		title: "Eden Project DBMS",
		location: "Bodmin, Cornwall",
		start: "2021",
		description:
			"For my A Level Computer Science coursework I analysed how the Eden Project records their current plant collection by giving questionnaires, interviews and using the system myself. This culminated in a presentation of a proposed solution to digitise it. Using a waterfall methodology, I wrote a windows application with UI in C# using Git. Through this project I learnt how to interact with databases and had to be organised and plan ahead as well as being highly motivated as this was a totally independent project. I completed the project with a score of 96/100.",
		type: "experience",
	},
	{
		title: "Extended Project Qualification ",
		location: "Bodmin, Cornwall",
		start: "2021",
		description:
			"The EPQ is an optional, independent research task in which I researched the topic ‘Will Quantum Computers Replace Classical Computers’. I wrote a comprehensive 5000-word report and presented my research. I decided to undertake the EPQ as I have a strong desire to learn and explore subjects deeply, I even managed to run my own code on a real quantum computer. Through the EPQ I demonstrated time management skills, my ‘completer-finisher’ tendency (by finishing it 6 months before the deadline) and a very thorough approach, as I endeavoured to explore all viewpoints so I was not biassed in my conclusion.",
		type: "experience",
	},
	{
		title: "RGB Light Project",
		location: "Cornwall",
		start: "2020",
		description:
			"I worked with an IT professional to code a web interface with HTML, JS, CSS and C++ using Git, which was being run on an ESP32 to control 60 12V RGB lights. This project required much problem solving and out of the box thinking to create the best solution. This project was done in an agile methodology as I was constantly working towards an evolving specification. I have since worked on a more advanced project of creating a web interface and doing the electronics to control 400 5V ARGB lights.",
		type: "experience",
	},
	{
		title: "Software Cornwall Mission to Mars Work Experience ",
		location: "Cornwall",
		start: "2020",
		description:
			"This project taught me how to work in a team and use Git to design and write C++ code for an Arduino robot to traverse a mars-like landscape. This included a presentation in which we had to demonstrate the capabilities of our system and explain to a non IT based audience.",
		type: "experience",
	},
	{
		title: "Experience with Audio Systems ",
		location: "Cornwall",
		start: "2019",
		finish: "2020",
		description:
			"During this time I supported a church band through controlling their sound desk. This required being responsive to unplanned changes, adaptable to different band members as well as commitment to the church and patience before the service started.",
		type: "experience",
	},
	{
		title: "Teaching Scratch",
		location: "Launceston, Cornwall",
		start: "2018",
		finish: "2019",
		description:
			"In my last year of secondary school I volunteered to teach scratch to years 4-6 children. I had to be punctual, reliable, responsible, friendly and approachable so they felt comfortable, and enjoyed their time. This required much patience as some students took longer to understand the concepts. I planned each lesson to ensure we covered all bases, requiring commitment even out of the dedicated time I had with them.",
		type: "experience",
	},
	{
		title: "Cornwall Tech Jam",
		location: "Cornwall",
		start: "2017",
		finish: "2020",
		description:
			"This young people’s club enabled me to discover and experiment with coding on various hardware including Arduino and Raspberry PI. Tech Jam is when I first had experience with a Unix-like OS and was enjoyable as I learnt about all sorts of different aspects of IT I hadn't even thought of.",
		type: "experience",
	},
];

export default function ExperienceSection() {
	const [expanded, setExpanded] = useState<boolean[]>(experiences.map(() => false));
	const contentRefs = useRef<(HTMLDivElement | null)[]>(experiences.map(() => null));
	const [contentHeights, setContentHeights] = useState<number[]>(experiences.map(() => 0));

	useEffect(() => {
		setContentHeights((prev) => {
			let newContentHeights = [...prev];

			contentRefs.current.forEach((contentRef, i) => {
				if (contentRef) {
					newContentHeights[i] = contentRef.scrollHeight;
				}
			});

			console.log(newContentHeights);

			return newContentHeights;
		});
	}, []);

	return (
		<div className="flex justify-center py-4">
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
								<motion.div
									className={"text-sm mt-2 relative overflow-hidden"}
									animate={{ maxHeight: expanded[i] ? `${contentHeights[i]}px` : "40px" }}
								>
									<div
										ref={(el) => {
											contentRefs.current[i] = el;
										}}
									>
										{item.description}
									</div>

									<motion.div
										className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-zinc-900"
										animate={{ opacity: expanded[i] ? 0 : 1 }}
									/>
								</motion.div>
								<div
									className="text-sm font-bold underline cursor-pointer hover:text-zinc-400 transition-all duration-200"
									onClick={() => {
										setExpanded((prev) => {
											let newExpanded = [...prev];
											newExpanded[i] = !newExpanded[i];
											return newExpanded;
										});
									}}
								>
									{expanded[i] ? "Read less" : "Read more"}
								</div>
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
