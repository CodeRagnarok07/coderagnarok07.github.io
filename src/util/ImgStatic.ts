
import type { ImageMetadata } from 'astro';



const thumbnails = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/showcase/*{.png,.jpg,.jpeg,.webp,.avif}'
);
const thumbnail = thumbnails[`../assets/showcase/`];
if (!thumbnail) {
	throw new Error(`Could not resolve showcase thumbnail: `);
}
const src = (await thumbnail()).default;
