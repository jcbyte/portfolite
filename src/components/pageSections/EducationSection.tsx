import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Chip from "../ui/Chip";

// TODO list all

type EducationSubject = { subject: string; grade: string };
type Education = {
	school: string;
	location: string;
	start: string;
	finish: string;
	grades: EducationSubject[];
	extra?: ReactNode;
};

const education: Education = {
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
};

export default function EducationSection() {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	return (
		<motion.div
			className={`${
				isExpanded ? "w-[34rem] h-[22rem] bg-zinc-900 border-zinc-200" : "size-[22rem] bg-zinc-950 border-zinc-500"
			} relative rounded-lg border p-4 hover:bg-zinc-900 hover:shadow-lg duration-300 cursor-pointer overflow-hidden`}
			transition={{ duration: 0.2 }}
			onClick={() => {
				setIsExpanded((prev) => {
					return !prev;
				});
			}}
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
					animate={{ opacity: isExpanded ? 1 : 0 }}
					transition={{ duration: 0.1 }}
				>
					{education.extra ?? "No extra information"}
				</motion.div>
			</div>
		</motion.div>
	);
}
