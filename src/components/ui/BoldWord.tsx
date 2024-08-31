import { ReactNode } from "react";

export default function BoldWord({ children }: { children: ReactNode }) {
	return <div className="font-bold inline">{children}</div>;
}
