import myPhoto from "./images/FriendlyPhoto1MB.jpg";

export default function PhotoProfile() {
	return (
		<>
			<div className="flex h-[768px]">
				<div className="w-2/5 h-full p-2">
					<img src={myPhoto} alt="Profile Picture" className="size-full object-cover rounded-lg" />
				</div>
				<div className="w-3/5 h-full">
					<div className="size-full bg-dot-white/[0.2] relative flex items-center justify-center">
						<div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
						<div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text font-medium tracking-tight text-transparent text-4xl md:text-7xl">
							Joel Cutler
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
