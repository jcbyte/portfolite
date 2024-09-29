import { motion } from "framer-motion";
import { useState } from "react";
import Chip from "../ui/Chip";

// TODO create template for all

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
					<div className="text-xl font-bold">Callywith College</div>
					<div className="text-sm text-zinc-400">Bodmin, Cornwall</div>
					<div className="text-sm mt-1">September 2020 - May 2022</div>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<div className="text-md font-semibold">Grades:</div>
					<Chip>
						<div className="text-sm font-semibold">
							A Level Computer Science: <div className="inline-block font-bold">A*</div>
						</div>
					</Chip>
					<Chip>
						<div className="text-sm font-semibold">
							A Level Mathematics: <div className="inline-block font-bold">A*</div>
						</div>
					</Chip>
					<Chip>
						<div className="text-sm font-semibold">
							A Level Physics: <div className="inline-block font-bold">A*</div>
						</div>
					</Chip>
					<Chip>
						<div className="text-sm font-semibold">
							EPQ "Quantum Computing": <div className="inline-block font-bold">A*</div>
						</div>
					</Chip>
				</div>

				<motion.div
					className="absolute left-[18rem] w-[16rem]"
					animate={{ opacity: isExpanded ? 1 : 0 }}
					transition={{ duration: 0.1 }}
				>
					Write some content here please Write some content here please Write some content here please Write some
					content here please Write some content here please Write some content here please{" "}
				</motion.div>
			</div>
		</motion.div>
	);
}
