// TODO make hover animations possible visual snippets when hovering over bold words
// TODO refine which words are bold

import BoldWord from "../ui/BoldWord";

export default function About() {
	return (
		<div className="relative p-4 bg-char rounded-lg h-[24rem] flex flex-col justify-center items-center gap-4 bg-zinc-800/25">
			<div className="absolute pointer-events-none inset-0 bg-black [mask-image:linear-gradient(to_top_right,transparent_100%,transparent_50%)]" />
			<div className="text-5xl font-normal">About Me</div>
			<div className="text-xl font-light max-w-[46rem] text-center">
				I'm a <BoldWord>passionate</BoldWord> and <BoldWord>dedicated</BoldWord> tech enthusiast and student. With a
				strong foundation in various <BoldWord>programming languages</BoldWord>, I thrive in environments that challenge
				my <BoldWord>logical thinking</BoldWord> and <BoldWord>problem-solving skills</BoldWord>. My interest in{" "}
				<BoldWord>electronics</BoldWord> and <BoldWord>theoretical physics</BoldWord> has led me to explore the crazy
				world of <BoldWord>quantum computing</BoldWord>. In my free time, I enjoy <BoldWord>coding</BoldWord> and{" "}
				<BoldWord>gaming</BoldWord> with friends. I love learning, am highly <BoldWord>motivated</BoldWord>,{" "}
				<BoldWord>organized</BoldWord>, and committed to continuously expanding my skill set. Most importantly, I adore
				cats and have a beautiful orange cat, <BoldWord>Ollie</BoldWord>.
			</div>
		</div>
	);
}
