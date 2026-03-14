import { useEffect } from "react";

interface SeoMetadataProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
}

export function useSeoMetadata(props: SeoMetadataProps) {
    useEffect(() => {
        // Установка заголовка страницы
        if (props.title !== undefined) {
            document.title = props.title;
        }

        // Установка мета-тега description
        const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (metaDescription && props.description !== undefined) {
            metaDescription.content = props.description;
        }

        // Установка канонического URL
        const linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (linkCanonical && props.canonicalUrl !== undefined) {
            linkCanonical.href = props.canonicalUrl;
        }
    }, [props.title, props.description, props.canonicalUrl]);
}