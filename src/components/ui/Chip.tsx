import { ReactNode } from "react";

export default function Chip({ children }: { children: ReactNode }) {
	return <div className="bg-zinc-800 rounded-full w-fit py-1 px-4">{children}</div>;
}
