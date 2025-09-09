import React from "react";

export default function StampLumi({
  width = 200,
  className = ""
}: { width?: number; className?: string }) {
  const base = import.meta.env.BASE_URL || "/";
  const src = `${base}lumi-stamp-stealth.svg`;
  const [show, setShow] = React.useState(true);

  if (!show) return null;

  return (
    <a
      href="https://libertysmith.github.io/lumi-web/"
      target="_blank" rel="noopener nofollow"
      aria-label="Built by Lumi Web"
      className={`inline-flex items-center opacity-90 hover:opacity-100 transition-opacity ${className}`}
    >
      <img
        src={src}
        alt="Built by Lumi Web"
        width={width}
        height={Math.round((width/260)*48)}
        loading="lazy"
        style={{ display: "block" }}
        onError={() => setShow(false)}
      />
    </a>
  );
}