const images = Object.entries(
    import.meta.glob<{ default: ImageMetadata }>(
        "./**/*{.png,.jpg,.jpeg,.webp,.avif}",
    ),
);

export default images