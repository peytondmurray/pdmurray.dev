import { Delaunay } from "d3-delaunay";

const onmessage = ({ data: { values, width, height } }) => {
	const n = Math.round((width * height) / 20);
	const points = new Float64Array(n * 2);
	const c = new Float64Array(n * 2); // (x0, y0, x1, y1, ...)
	const s = new Float64Array(n); // Voronoi cell weights

	// Carry out rejection sampling to randomly place stipples with greater density at the the darkest
	// parts of the image
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < 130; j++) {
			points[i * 2] = Math.floor(Math.random() * width);
			points[i * 2 + 1] = Math.floor(Math.random() * height);

			const x = points[i * 2];
			const y = points[i * 2 + 1];

			if (Math.random() < values[y * width + x]) {
				break;
			}
		}
	}

	const delaunay = new Delaunay(values);
	const voronoi = delaunay.voronoi([0, 0, width, height]);

	for (let k = 0; k < 30; k++) {
		//Compute the weighted centroid for each Voronoi cell
		c.fill(0);
		s.fill(0);
		let i = 0;
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const w = values[y * width + x]; // weight - given by brightness of pixel at (x, y)
				i = delaunay.find(x + 0.5, y + 0.5, i); // find the voronoi cell nearest to (x, y)
				s[i] += w; // Keep a sum of the weights added for each voronoi cell
				c[i * 2] += w * (x + 0.5); //  x-voronoi cell weights?
				c[i * 2 + 1] += w * (y + 0.5); // y-voronoi cell weights?
			}
		}

		// Relax the diagram by moving points to the weighted centroid.
		// Wiggle the points a little bit so they don't get stuck.
		const w = (k + 1) ** -0.8 * 10;
		for (let i = 0; i < n; i++) {
			const x0 = points[i * 2];
			const y0 = points[i * 2 + 1];

			const x1 = s[i] ? c[i * 2] / s[i] : x0;
			const y1 = s[i] ? c[i * 2 + 1] / s[i] : y0;

			points[i * 2] = x0 + (x1 - x0) * 1.8 + (Math.random() - 0.5) * w;
			points[i * 2 + 1] = y0 + (y1 - y0) * 1.8 + (Math.random() - 0.5) * w;
		}

		postMessage({ values: points, width, height });
		voronoi.update();
	}

	close();
};
