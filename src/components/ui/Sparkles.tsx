import Particles from "@tsparticles/react";

export default function Sparkles() {
	return (
		<Particles
			className="absolute inset-0 z-10"
			id="tsparticles"
			options={{
				fullScreen: {
					enable: false,
					zIndex: 1,
				},
				fpsLimit: 60,
				particles: {
					color: {
						value: "#ffffff",
					},
					move: {
						enable: true,
						speed: {
							min: 0.1,
							max: 0.2,
						},
					},
					number: {
						density: {
							enable: true,
							width: 200,
							height: 100,
						},
						value: 120,
					},
					opacity: {
						value: {
							min: 0.1,
							max: 0.9,
						},
						animation: {
							count: 0,
							enable: true,
							speed: 1,
							decay: 0,
							delay: 0,
							sync: false,
							mode: "auto",
							startValue: "random",
							destroy: "none",
						},
					},
					reduceDuplicates: false,
					shape: {
						close: true,
						fill: true,
						type: "circle",
					},
					size: {
						value: {
							min: 0.5,
							max: 1.5,
						},
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
