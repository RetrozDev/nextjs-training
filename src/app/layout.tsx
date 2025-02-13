import type { Metadata } from "next";
import type * as React from "react";

export const metadata: Metadata = {
	title: "Next js training",
	description: "Training my next js ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
