import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Chip from "../ui/Chip";

// TODO surrounding stuff (title?)
// TODO custom scroll bar

type EducationSubject = { subject: string; grade?: string };
type Education = {
	school: string;
	location: string;
	start: string;
	finish: string;
	subject: string;
	grades?: EducationSubject[];
	extra?: ReactNode;
};

const educations: Education[] = [
	{
		school: "University of York",
		location: "Heslington, York",
		start: "September 2023",
		finish: "Current",
		subject: "MEng Computer Science",
		extra: (
			<>
				<div>
					During my first year, I achieved a score of 91%, while having an incredible experience learning and expanding
					my technical skills, whilst making great friends along the way.
				</div>
				<div className="mt-2">
					Now in my second year, I'm diving deeper into fascinating topics and still absolutely loving my studies.
				</div>
			</>
		),
	},
	{
		school: "Self-Study",
		location: "Bodmin, Cornwall",
		start: "December 2022",
		finish: "May 2023",
		subject: "A Level",
		grades: [{ subject: "A Level Further Mathematics", grade: "A*" }],
		extra: (
			<>
				<div>During my Gap year I self-studied A-Level Further Mathematics.</div>
				<div className="mt-2">
					This demanded a high level of self-motivation, clear focus and time management to ensure I could cover and
					understand the entire course, with my work paying off resulting in another A*.
				</div>
			</>
		),
	},
	{
		school: "Callywith College",
		location: "Bodmin, Cornwall",
		start: "September 2020",
		finish: "May 2022",
		subject: "A Level",
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
		subject: "GCSE",
		grades: [
			{ subject: "GCSE Computer Science", grade: "9" },
			{ subject: "GCSE Mathematics", grade: "9" },
			{ subject: "GCSE Physics", grade: "8" },
			{ subject: "7 More Subjects" },
		],
		extra: (
			<div className="flex flex-col gap-2">
				<div className="text-md font-semibold">More Subjects:</div>

				{[
					{ subject: "GCSE Chemistry", grade: "8" },
					{ subject: "GCSE Biology", grade: "7" },
					{ subject: "GCSE Design and Technology", grade: "8" },
					{ subject: "GCSE Economics", grade: "7" },
					{ subject: "GCSE Geography", grade: "7" },
					{ subject: "GCSE English Language", grade: "6" },
					{ subject: "GCSE English Literature", grade: "6" },
				].map((subject: EducationSubject, i) => {
					return (
						<Chip key={i}>
							<div className="text-sm font-semibold">
								{subject.subject}: <div className="inline-block font-bold">{subject.grade}</div>
							</div>
						</Chip>
					);
				})}
			</div>
		),
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
					<div className="text-lg mt-2 font-semibold">{education.subject}</div>
				</div>
				{education.grades && (
					<div className="flex flex-col gap-2 mt-4">
						<div className="text-md font-semibold">Subjects:</div>
						{education.grades.map((subject: EducationSubject, i) => {
							return (
								<Chip key={i}>
									<div className="text-sm font-semibold">
										{subject.subject}
										{subject.grade && (
											<>
												: <div className="inline-block font-bold">{subject.grade}</div>
											</>
										)}
									</div>
								</Chip>
							);
						})}
					</div>
				)}

				<motion.div
					className="absolute left-[16rem] w-[16rem]"
					animate={{ opacity: expanded ? 1 : 0 }}
					transition={{ duration: 0.1 }}
				>
					{education.extra ?? "Nothing else to say!"}
				</motion.div>
			</div>
		</motion.div>
	);
}

export default function EducationSection() {
	const [selectedEducation, setSelectedEducation] = useState<number | null>(null);

	function handleBlockClicked(blockClicked: number) {
		if (selectedEducation === blockClicked) {
			setSelectedEducation(null);
		} else {
			setSelectedEducation(blockClicked);
		}
	}

	return (
		<div className="flex gap-2 overflow-x-auto">
			{educations.map((education: Education, i) => {
				return (
					<EducationBlock
						key={i}
						education={education}
						expanded={selectedEducation === i}
						blockClicked={() => {
							handleBlockClicked(i);
						}}
					/>
				);
			})}
		</div>
	);
}
