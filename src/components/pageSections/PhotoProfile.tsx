import FlipWords from "../ui/FlipWords";
import HoverVignette from "../ui/HoverVignette";

export default function PhotoProfile({
	name,
	photo,
	words,
}: {
	name: string;
	photo: string;
	words: [string, ...string[]];
}) {
	return (
		<>
			<div className="flex h-[28rem] gap-4">
				<div className="w-2/5 h-full">
					<img src={photo} alt="Profile Picture" className="size-full object-cover rounded-lg" />
				</div>
				<div className="w-3/5 h-full">
					<div className="size-full relative flex flex-col items-center justify-center gap-1 rounded-lg">
						<HoverVignette bgClass="bg-dot-white/[0.4]" radius="150px" />
						<div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
						<div className="pointer-events-none font-normal tracking-tight text-zinc-100 text-4xl md:text-7xl">
							{name}
						</div>
						<div className="pointer-events-none font-light tracking-tight text-zinc-100 text-2xl md:text-4xl">
							<FlipWords words={words} duration={3000} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
