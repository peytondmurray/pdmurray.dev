import { Heading, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import Page from "../../components/Page";
import Nicoo from "./NiCoO_r1_little.jpg";
import Forc from "./forc.jpg";
import Particles from "./particles-300x240px.png";
import Skyrmion from "./skyrmion.jpg";

const ImageText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img:first-of-type {
    margin-right: 20px;
    max-width: 620px;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0em 0em 0.5em 0em;
`;

const HeroLayout = styled.div`
  margin: 0em 0em 2em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Hero({ headerText, src, children }: any): JSX.Element {
	return (
		<HeroLayout>
			<StyledHeading as="h2">{headerText}</StyledHeading>
			<ImageText>
				<img src={src} />
				{children}
			</ImageText>
		</HeroLayout>
	);
}

export default function () {
	return (
		<Page>
			<Hero headerText="Nanoparticles" src={Particles}>
				<Text textAlign="justify">
					Structures confined to nanometer length scales in one or more
					dimensions can possess strikingly different properties than in bulk.
					In contrast to bulk materials, low dimensional systems such as
					nanodots (0D), nanowires (1D), and thin films (2D) have a much larger
					fraction of their atoms on the surface. As a result, surface physics
					and interfaces between materials play a much larger role in the
					overall behavior of these systems. By varying their morphology and
					composition, their properties can be tailored for applications in pure
					research or for consumer technology.
				</Text>
			</Hero>
			<Hero headerText="First Order Reversal Curves (FORC)" src={Forc}>
				<Text textAlign="justify">
					Magnetic materials are widely used in consumer products, industry, and
					in research applications. Utilizing these materials in device
					applications requires an understanding of their behavior from the
					macroscopic level all the way down to atomic length scales. Alongside
					micromagnetic simulations (
					<Link href="https://math.nist.gov/oommf/">OOMMF</Link>, &nbsp;
					<Link href="http://mumax.github.io/">Mumax3</Link>), one of the major
					tools I have used to understand hysteretic behavior is the First Order
					Reversal Curve (FORC) technique. While simple major loop measurements
					can yield information about the average magnetization of an ensemble
					of magnetic moments, FORC analysis allows individual switching events
					to be probed, revealing microscopic details about iteractions between
					magnetic moments.
				</Text>
			</Hero>
			<Hero headerText="Magnetoionics" src={Nicoo}>
				<Text textAlign="justify">
					Conventional logic and memory technologies which rely on electric
					currents suffer from Joule heating, limiting their energy efficiency,
					and are volatile, which requires devices to remain powered in order to
					maintain their state. The ability to control magnetic materials with
					electric fields should enable a new generation of nonvolatile memory
					devices that do not require electric currents, circumventing this
					limitation. One promising approach towards electric field control of
					magnetism has focused on solid-state manipulation of ion
					distributions. My work has focused on the development of methods for
					chemically-induced and electric-field-induced ionic motion.
				</Text>
			</Hero>
			<Hero headerText="Chiral Magnetism" src={Skyrmion}>
				<Text textAlign="justify">
					In certain bulk materials or thin film systems, competing magnetic
					interactions can lead to winding magnetization textures known as
					skyrmions. These particle-like textures resemble magnetic vortices,
					and have extraordinary properties which make them of particular
					interest both for fundamental physics as well as for nonvolatile,
					ultra-fast, and low-dissipation storage and logic applications.
					Recently, I have carried out resistivity measurements in search of
					Hall effect signatures of skyrmions in novel artificial skyrmion
					lattices.
				</Text>
			</Hero>
		</Page>
	);
}
