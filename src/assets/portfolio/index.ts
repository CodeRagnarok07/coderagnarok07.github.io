import type { ImageMetadata } from "astro";

type ImgEntry = [
    string,
    () => Promise<{ default: ImageMetadata }>,
];

const sizePriority: Record<string, number> = {
    lg: 0,
    md: 1,
    sm: 2,
};

const getFileBase = (path: string): string => {
    const file = path.split("/").pop() ?? "";
    return file.replace(/\.[^.]+$/, "").toLowerCase();
};

const getProject = (path: string): string => {
    const parts = path.split("/");
    return parts[parts.length - 2] ?? "";
};

const images = Object.entries(
    import.meta.glob<{ default: ImageMetadata }>([
        "./**/*.png",
        "./**/*.PNG",
        "./**/*.jpg",
        "./**/*.JPG",
        "./**/*.jpeg",
        "./**/*.JPEG",
        "./**/*.webp",
        "./**/*.WEBP",
        "./**/*.avif",
        "./**/*.AVIF",
    ]),
) as ImgEntry[];

images.sort((a, b) => {
    const aProject = getProject(a[0]);
    const bProject = getProject(b[0]);

    if (aProject !== bProject) {
        return aProject.localeCompare(bProject);
    }

    const aBase = getFileBase(a[0]);
    const bBase = getFileBase(b[0]);

    const aPriority = sizePriority[aBase] ?? 99;
    const bPriority = sizePriority[bBase] ?? 99;

    if (aPriority !== bPriority) {
        return aPriority - bPriority;
    }

    return aBase.localeCompare(bBase);
});

export default images;
