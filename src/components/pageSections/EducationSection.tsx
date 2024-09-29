import { motion } from "framer-motion";
import { ReactNode } from "react";
import Chip from "../ui/Chip";

// TODO list all
// TODO open one of the educations

type EducationSubject = { subject: string; grade: string };
type Education = {
	school: string;
	location: string;
	start: string;
	finish: string;
	grades: EducationSubject[];
	extra?: ReactNode;
};

const educations: Education[] = [
	{
		school: "University of York",
		location: "York",
		start: "September 2023",
		finish: "Current",
		grades: [{ subject: "MEng (Hons) Computer Science", grade: "Current" }],
		// TODO this seems weird
	},
	{
		school: "Self-Study",
		location: "Cornwall",
		start: "December 2022",
		finish: "May 2023",
		grades: [{ subject: "A Level Further Mathematics", grade: "A*" }],
	},
	{
		school: "Callywith College",
		location: "Bodmin, Cornwall",
		start: "September 2020",
		finish: "May 2022",
		grades: [
			{ subject: "A Level Computer Science", grade: "A*" },
			{ subject: "A Level Mathematics", grade: "A*" },
			{ subject: "A Level Physics", grade: "A*" },
			{ subject: 'EPQ "Quantum Computing"', grade: "A*" },
		],
	},
	{
		school: "St Joseph's School",
		location: "Launceston, Cornwall",
		start: "September 2015",
		finish: "May 2020",
		grades: [
			{ subject: "GCSE Computer Science", grade: "9" },
			{ subject: "GCSE Mathematics", grade: "9" },
			{ subject: "GCSE English Language", grade: "6" },
			// TODO add all grades
		],
	},
];

function EducationBlock({
	education,
	expanded,
	blockClicked,
}: {
	education: Education;
	expanded: boolean;
	blockClicked?: React.MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<motion.div
			className={`${
				expanded ? "w-[34rem] h-[22rem] bg-zinc-900 border-zinc-200" : "size-[22rem] bg-zinc-950 border-zinc-500"
			} relative flex-none rounded-lg border p-4 hover:bg-zinc-900 hover:shadow-lg duration-300 cursor-pointer overflow-hidden`}
			transition={{ duration: 0.2 }}
			onClick={blockClicked}
		>
			<div className="flex flex-col h-full">
				<div className="flex-grow flex flex-col w-[18rem]">
					<div className="text-xl font-bold">{education.school}</div>
					<div className="text-sm text-zinc-400">{education.location}</div>
					<div className="text-sm mt-1">
						{education.start} - {education.finish}
					</div>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<div className="text-md font-semibold">Grades:</div>
					{education.grades.map((subject: EducationSubject, i) => {
						return (
							<Chip key={i}>
								<div className="text-sm font-semibold">
									{subject.subject}: <div className="inline-block font-bold">{subject.grade}</div>
								</div>
							</Chip>
						);
					})}
				</div>

				<motion.div
					className="absolute left-[18rem] w-[16rem]"
					animate={{ opacity: expanded ? 1 : 0 }}
					transition={{ duration: 0.1 }}
				>
					{education.extra ?? "No extra information"}
				</motion.div>
			</div>
		</motion.div>
	);
}

export default function EducationSection() {
	return (
		<div className="flex gap-2 overflow-x-auto">
			{educations.map((education: Education, i) => {
				return <EducationBlock education={education} expanded={false} />;
			})}
		</div>
	);
}
