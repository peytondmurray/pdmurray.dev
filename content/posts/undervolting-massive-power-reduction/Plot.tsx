import { Center } from "@chakra-ui/react";
import { ReactComponent as RawPlot } from "./voltage.svg";

export default function Plot(): JSX.Element {
	return (
		<Center
			sx={{
				svg: {
					width: 1024,
					fill: "#00000000",
					"#curve": {
						"path,use": {
							stroke: (theme: any) => `${theme.colors.primary} !important`,
							strokeWidth: "0.3em !important",
						},
						use: {
							fill: (theme: any) => `${theme.colors.primary} !important`,
						},
					},
					"#labels": {
						use: {
							fill: (theme: any) => `${theme.colors.primary} !important`,
						},
					},
					"#axes": {
						path: {
							stroke: (theme: any) => `${theme.colors.secondary} !important`,
							strokeWidth: "0.15em !important",
						},
					},
				},
			}}
		>
			<RawPlot />
		</Center>
	);
}
