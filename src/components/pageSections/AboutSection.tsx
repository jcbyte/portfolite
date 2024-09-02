import FancyWord from "../ui/FancyWord";
import ShootingStars from "../ui/ShootingStars";

// TODO have shooting stars on the background of this and when hovering over a word they speed up

export default function AboutSection() {
	return (
		<div className="relative p-4 bg-char rounded-lg h-[24rem] flex flex-col justify-center items-center gap-4 bg-zinc-800/25">
			<div className="absolute pointer-events-none inset-0 bg-black [mask-image:linear-gradient(to_top_right,transparent_100%,transparent_50%)]" />
			<div className="text-5xl font-normal">About Me</div>
			<div className="text-xl font-light max-w-[46rem] text-center">
				I'm a <FancyWord id="0">passionate</FancyWord> and <FancyWord id="1">dedicated</FancyWord> tech enthusiast and
				student. With a strong foundation in various programming languages, I thrive in environments that challenge my{" "}
				<FancyWord id="2">logical thinking</FancyWord> and <FancyWord id="3">problem-solving</FancyWord> skills. In my
				free time, I enjoy coding and gaming with friends. I love learning, am highly{" "}
				<FancyWord id="4">motivated</FancyWord>, <FancyWord id="5">organised</FancyWord>, and committed to continuously
				expanding my skill set. Most importantly, I adore cats and have a beautiful orange cat,{" "}
				<FancyWord id="6" textColour="orange-600" glowColour="orange-700">
					Ollie
				</FancyWord>
				.
			</div>
		</div>
	);
}
