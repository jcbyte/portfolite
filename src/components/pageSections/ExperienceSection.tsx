import { IconDeviceLaptop, IconStar } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedOnViewItem from "../ui/AnimatedOnViewItem";

type Experience = {
	title: string;
	company?: string;
	location: string;
	start: string;
	finish?: string;
	description: string;
	type: "work" | "experience";
};

const experiences: Experience[] = [
	{
		title: "Software Developer",
		company: "ETAS",
		location: "York",
		start: "June 2024",
		finish: "August 2024",
		description:
			"Working as a software developer for EHOOKS, a decompiler for ECU software used within the automotive industry. This project was written in Ruby which I enjoyed learning. We used SVN and Git to manage version control and followed a strict review system for merging. I explored ideas during team meetings and gained developer skills, as well as learning a lot from being in a larger organisation certain goals and deadlines.",
		type: "work",
	},
	{
		title: "Student Ambassador",
		company: "University of York",
		location: "York",
		start: "February 2024",
		finish: "April 2024",
		description:
			"I represented my university's computer science department to prospective students on open days. I created a welcoming environment, provided information and gave tours around the university addressing any questions that were asked. This has strengthened my interpersonal skills by interacting with prospective students and their parents.",
		type: "work",
	},
	{
		title: "Software Developer",
		company: "Butterfly Data",
		location: "Cardiff (Remote)",
		start: "February 2023",
		finish: "June 2023",
		description:
			"I worked on an internal project management system for the company using Python with frameworks such as pandas and Dash. Throughout working at Butterfly, I mastered SQL, understanding and creating complex calls to the Postgres database. I used Git with GitHub to manage changes and branches for different releases. I had to be meticulous and obtained strong problem solving and verbal skills from working within the professional environment.",
		type: "work",
	},
	{
		title: "Amgen Internship",
		location: "Los Angeles, California",
		start: "January 2023",
		finish: "February 2023",
		description:
			"I spent a month in California working with the large biotech company Amgen creating a web app to catalogue and search their medicines. Through this process I learnt JavaScript with the React framework and integrated it with a Django backend, since which I have used again multiple times in personal projects. The project also involved creating and managing a Postgres database hosted on AWS which my app interfaced with. This was an incredible experience, and I learnt a huge amount of technical and soft skills.",
		type: "experience",
	},
	{
		title: "Crew Worker",
		company: "McDonald's",
		location: "Bodmin, Cornwall",
		start: "February 2022",
		finish: "January 2023",
		description:
			"As a team I maintained the restaurant running smoothly by speaking with and serving customers, cooking and preparing food, taking orders, payments and cleaning. From this I have gained skills including communication and collaboration with other crew members and the ability to be quick and efficient in my work even under pressure.",
		type: "work",
	},
	{
		title: "Eden Project DBMS",
		location: "Bodmin, Cornwall",
		start: "September 2021",
		finish: "April 2022",
		description:
			"During my Computer Science coursework, I wrote a windows application with GUI in C# to digitalise the Eden Projects plant collection. I had to analyse the current system by questionnaires, interviews and observation to create requirements, before then proceeding to create and extensively test my solution. Through this project I learnt SQL, had to be professional and be highly organised. Completing the system with a score of 96/100.",
		type: "experience",
	},
	{
		title: "Assistant",
		company: "Swallow's Barn Holiday Let",
		location: "Summercourt, Cornwall",
		start: "July 2021",
		finish: "September 2021",
		description:
			"I assisted in preparing a holiday let for guests; this included cleaning the house, gardening, making beds, changing towels and managing laundry. This work reinforced my time management skills and being able to prioritise the workload to meet a strict deadline.",
		type: "work",
	},
	{
		title: "Eden Project Work Experience",
		location: "Par, Cornwall",
		start: "July 2021",
		description:
			"I worked with Eden's IT team to assist and troubleshoot general tech problems around the site. I supported a professional external team to install multiple 4K 360° cameras to trial 5G infrastructure in Cornwall. This required me to be punctual and communicative and gave me an insight into a larger company's structure and operating procedures. Throughout the experience I talked with programmers and learnt about the servers running the software and camera stitching algorithms.",
		type: "experience",
	},

	{
		title: "Extended Project Qualification ",
		location: "Bodmin, Cornwall",
		start: "September 2020",
		finish: "June 2021",
		description:
			"The EPQ is an optional, independent research task I completed alongside my A Levels. I researched the topic 'Will Quantum Computers Replace Classical Computers'. I wrote a comprehensive 5000-word report and presented my research. I undertook the EPQ as I love to learn and explore subjects deeply, even managing to run my code on a real quantum computer. Through the EPQ I demonstrated time management skills, my 'completer-finisher' tendency (by finishing it 6 months before the deadline). After completing the EPQ I continue to explore quantum computing as I find it incredible.",
		type: "experience",
	},
	{
		title: "RGB Light Project",
		location: "Cornwall",
		start: "November 2019",
		finish: "May 2020",
		description:
			"I worked with help from an IT professional to create a system to control 60 12V RGB lights. I did this by creating a web interface using HTML, JS, CSS which interfaced with an API I wrote in C++ for an ESP32. This project required problem solving and abstract thinking to create an efficient solution. I worked on the project using an agile methodology as the specification was constantly evolving. I have since worked on a much more complex system to control 400 5V ARGB lights, creating the web interface using TypeScript and React, this new project also involved more electronics allowing me to design and create my own complex circuits.",
		type: "experience",
	},
	{
		title: "Teaching Scratch",
		location: "Launceston, Cornwall",
		start: "March 2018",
		finish: "June 2018",
		description:
			"Whilst at secondary school I volunteered to teach Scratch to children aged 8-11. I had to be reliable, responsible and friendly so they could enjoy their time. This required high levels of patience as some students took longer to understand the concepts. I planned each lesson to ensure we could cover all bases, requiring extra commitment along with my studies.",
		type: "experience",
	},
	{
		title: "Cornwall Tech Jam",
		location: "Cornwall",
		start: "June 2017",
		finish: "June 2020",
		description:
			"This club is when my passion for IT started. It allowed me to discover and experiment with programming on various hardware including Arduino's and Raspberry PI's.",
		type: "experience",
	},
];

function ExperienceItem({ item }: { item: Experience }) {
	const [expanded, setExpanded] = useState<boolean>(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState<number>(0);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, []);

	return (
		<div
			className={`mb-6 flex justify-between items-center w-full ${item.type === "experience" && "flex-row-reverse"}`}
		>
			<div className={`w-5/12 ${item.type === "work" ? "text-right" : "text-left"}`}>
				<div className="relative bg-zinc-900 p-4 rounded-lg border border-zinc-700">
					<div className="text-sm font-medium text-zinc-400">
						{item.start}
						{item.finish && <> - {item.finish}</>}
					</div>
					<div className="text-lg font-semibold mt-1">{item.title}</div>
					<div className="text-sm font-medium text-zinc-400 mt-1">
						{item.company && <>{item.company} - </>}
						{item.location}
					</div>
					<motion.div
						className={"text-sm mt-2 relative overflow-hidden"}
						animate={{ maxHeight: expanded ? `${contentHeight}px` : "40px" }}
					>
						<div ref={contentRef}>{item.description}</div>

						<motion.div
							className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-zinc-900"
							animate={{ opacity: expanded ? 0 : 1 }}
						/>
					</motion.div>
					<div
						className="text-sm font-bold underline cursor-pointer hover:text-zinc-400 transition-all duration-200"
						onClick={() => {
							setExpanded((prev) => !prev);
						}}
					>
						{expanded ? "Read less" : "Read more"}
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
	);
}

export default function ExperienceSection() {
	return (
		<div className="flex justify-center py-4">
			<div className="relative w-full max-w-[56rem] px-4">
				<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-700 rounded-full -z-10" />
				{experiences.map((item, i) => (
					<AnimatedOnViewItem key={i}>
						<ExperienceItem item={item} />
					</AnimatedOnViewItem>
				))}
			</div>
		</div>
	);
}
