// TODO make hover animations possible visual snippets when hovering over bold words

import BoldWord from "../ui/BoldWord";

export default function AboWordut() {
	return (
		<div className="relative p-4 bg-char rounded-lg h-[24rem] flex flex-col justify-center items-center gap-4 bg-zinc-800/25">
			<div className="absolute pointer-events-none inset-0 bg-black [mask-image:linear-gradient(to_top_right,transparent_100%,transparent_50%)]" />
			<div className="text-5xl font-normal">About Me</div>
			<div className="text-xl font-light max-w-[46rem] text-center">
				I'm a <BoldWord>passionate</BoldWord> and <BoldWord>dedicated</BoldWord> tech enthusiast and student. With a
				strong foundation in various programming languages, I thrive in environments that challenge my{" "}
				<BoldWord>logical thinking</BoldWord> and <BoldWord>problem-solving</BoldWord> skills. In my free time, I enjoy
				coding and gaming with friends. I love learning, am highly <BoldWord>motivated</BoldWord>,{" "}
				<BoldWord>organised</BoldWord>, and committed to continuously expanding my skill set. Most importantly, I adore
				cats and have a beautiful orange cat, <BoldWord>Ollie</BoldWord>.
			</div>
		</div>
	);
}
