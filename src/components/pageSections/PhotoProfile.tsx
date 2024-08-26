import myPhoto from "../../images/FriendlyPhoto1MB.jpg";
import HoverVignette from "../ui/HoverVignette";

export default function PhotoProfile() {
	return (
		<>
			<div className="flex h-[768px]">
				<div className="w-2/5 h-full p-2">
					<img src={myPhoto} alt="Profile Picture" className="size-full object-cover rounded-lg" />
				</div>
				<div className="w-3/5 h-full">
					<div className="size-full relative flex items-center justify-center">
						<HoverVignette bgClass="bg-dot-white/[0.4]" radius="200px" />
						<div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
						<div className="font-medium tracking-tight text-zinc-100 text-4xl md:text-7xl">Joel Cutler</div>
					</div>
				</div>
			</div>
		</>
	);
}
