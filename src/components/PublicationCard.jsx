import { useState } from "react";

export default function PublicationCard({ bibtex, badges = [] }) {
  const [copied, setCopied] = useState(false);

  /* -------- copia -------- */
  const copy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* -------- parse bib -------- */
  const field = (k) => {
    const m = bibtex.match(new RegExp(`${k}\\s*=\\s*{([^}]+)}`, "i"));
    return m ? m[1] : "";
  };
  const title   = field(" title");
  const authors = field("author");
  const year    = field("year");
  const venue   = field("journal") || field("booktitle") || field("school");

  /* -------- ui -------- */
  return (
    <div className="border-b border-gray-300 dark:border-gray-700 py-4 flex flex-col sm:flex-row sm:items-center gap-2">
      {/* testo */}
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        {authors && (
          <p className="text-sm italic text-gray-600 dark:text-gray-400 whitespace-normal break-words">
            {authors}
          </p>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-500">
          {venue} {year && "• " + year}
        </p>

        {/* badge inline */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {badges.map((b, i) => (
              <span
                key={i}
                className="bg-vscode/10 text-vscode text-xs font-medium px-2 py-0.5 rounded-md"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* bottone */}
      <button
        onClick={copy}
        className="self-start sm:self-center text-vscode hover:text-vscode-hover text-sm px-3 py-1 border border-vscode rounded transition"
        title="Copy BibTeX"
      >
        {copied ? "✅ Copied!" : "📋 BibTeX"}
      </button>
    </div>
  );
}
