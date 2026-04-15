import { useEffect } from "react";

interface SeoMetadataProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
}

export function useSeoMetadata(props: SeoMetadataProps) {
    const { title, description, canonicalUrl } = props;

    useEffect(() => {
        // Установка заголовка страницы
        if (title !== undefined) {
            document.title = title;
        }

        // Управление мета‑тегом description
        let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (description !== undefined) {
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                metaDescription.setAttribute('data-seo-generated', 'true');
                document.head.appendChild(metaDescription);
            }
            metaDescription.content = description;
        } else if (metaDescription) {
            // Удаляем тег, если description не передано
            metaDescription.remove();
        }

        // Управление каноническим URL
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (canonicalUrl !== undefined) {
            if (!linkCanonical) {
                linkCanonical = document.createElement('link');
                linkCanonical.rel = 'canonical';
                linkCanonical.setAttribute('data-seo-generated', 'true');
                document.head.appendChild(linkCanonical);
            }
            linkCanonical.href = canonicalUrl;
        } else if (linkCanonical) {
            // Удаляем тег, если canonicalUrl не передан
            linkCanonical.remove();
        }
    }, [title, description, canonicalUrl]);
}
