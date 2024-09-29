import Chip from "../ui/Chip";

// TODO allow clicking to expand
// TODO create template for all

export default function EducationSection() {
	return (
		<div className="size-[22rem] rounded-lg border border-zinc-500 p-4 flex flex-col hover:bg-zinc-900 hover:shadow-lg duration-300 cursor-pointer">
			<div className="flex-grow flex flex-col">
				<div className="text-xl font-semibold">Callywith College</div>
				<div className="text-sm text-zinc-500">Bodmin, Cornwall</div>
				<div className="text-sm">September 2020 - May 2022</div>
			</div>
			<div className="flex flex-col gap-2">
				<div>Grades:</div>
				<Chip>A Level Computer Science: A* </Chip>
				<Chip>A Level Mathematics: A*</Chip>
				<Chip>A Level Physics: A*</Chip>
				<Chip>EPQ "Quantum Computing": A*</Chip>
			</div>
		</div>
	);
}
