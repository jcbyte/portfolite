// TODO make hover animations possible visual snippets when hovering over bold words
// TODO refine which words are bold

export default function About() {
	return (
		<div className="relative p-4 bg-char rounded-lg h-[24rem] flex flex-col justify-center items-center gap-4 bg-zinc-800/25">
			<div className="absolute pointer-events-none inset-0 bg-black [mask-image:linear-gradient(to_top_right,transparent_100%,transparent_50%)]" />
			<div className="text-5xl font-normal">About Me</div>
			<div className="text-xl font-light max-w-[46rem] text-center">
				I'm a <b>passionate</b> and <b>dedicated</b> tech enthusiast and student. With a strong foundation in various
				<b>programming languages</b>, I thrive in environments that challenge my <b>logical thinking</b> and
				<b>problem-solving skills</b>. My interest in <b>electronics</b> and <b>theoretical physics</b> has led me to
				explore the crazy world of <b>quantum computing</b>. In my free time, I enjoy <b>coding</b> and <b>gaming</b>
				with friends. I love learning, am highly <b>motivated</b>, <b>organized</b>, and committed to continuously
				expanding my skill set. Most importantly, I adore cats and have a beautiful orange cat, <b>Ollie</b>.
			</div>
		</div>
	);
}
