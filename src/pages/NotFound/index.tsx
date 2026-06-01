import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found | Dean Overton";
    const setMeta = (name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[name="${name}"]`
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("robots", "noindex, follow");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
      <p className="mb-6">
        The page you were looking for does not exist or has moved.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
      >
        Go home
      </button>
    </div>
  );
};

export default NotFound;
