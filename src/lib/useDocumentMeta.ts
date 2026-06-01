import { useEffect } from "react";

type DocumentMeta = {
  title: string;
  description?: string;
  canonical?: string;
};

const setMetaTag = (name: string, content: string, isProperty = false) => {
  const attr = isProperty ? "property" : "name";
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${name}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const useDocumentMeta = ({
  title,
  description,
  canonical,
}: DocumentMeta) => {
  useEffect(() => {
    document.title = title;
    setMetaTag("og:title", title, true);
    setMetaTag("twitter:title", title);

    if (description) {
      setMetaTag("description", description);
      setMetaTag("og:description", description, true);
      setMetaTag("twitter:description", description);
    }

    if (canonical) {
      setCanonical(canonical);
      setMetaTag("og:url", canonical, true);
    }
  }, [title, description, canonical]);
};
