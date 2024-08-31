import myPhoto from "../../images/FriendlyPhoto1MB.jpg";
import FlipWords from "../ui/FlipWords";
import HoverVignette from "../ui/HoverVignette";

const name = "Joel Cutler";
const flipWords: [string, ...string[]] = [
	"Software Developer",
	"Student",
	"Tech Enthusiast",
	"Passionate Coder",
	"Cat Lover",
	"Self Motivated",
	"Quick Learner",
	"Logical Thinker",
	"Dedicated Worker",
];

export default function PhotoProfile({}: {}) {
	return (
		<>
			<div className="flex h-[28rem] gap-4">
				<div className="w-2/5 h-full">
					<img src={myPhoto} alt="Profile Picture" className="size-full object-cover rounded-lg" />
				</div>
				<div className="w-3/5 h-full">
					<div className="size-full relative flex flex-col items-center justify-center gap-1 rounded-lg">
						<HoverVignette bgClass="bg-dot-white/[0.4]" radius="150px" />
						<div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
						<div className="pointer-events-none font-normal tracking-tight text-zinc-100 text-7xl">{name}</div>
						<div className="pointer-events-none font-light tracking-tight text-zinc-100 text-4xl">
							<FlipWords words={flipWords} duration={3000} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
