import Particles from "@tsparticles/react";

export default function Sparkles({ id }: { id: string }) {
	return (
		<Particles
			className="absolute inset-0 z-10"
			id={`sparkles-${id}`}
			options={{
				fullScreen: {
					enable: false,
					zIndex: 1,
				},
				fpsLimit: 60,
				particles: {
					color: {
						value: "#f4f4f5",
					},
					move: {
						enable: true,
						direction: "outside",
						straight: false,
						speed: {
							min: 0.2,
							max: 0.6,
						},
					},
					number: {
						density: {
							enable: true,
							width: 200,
							height: 100,
						},
						value: 480,
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
							min: 0.2,
							max: 0.8,
						},
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
