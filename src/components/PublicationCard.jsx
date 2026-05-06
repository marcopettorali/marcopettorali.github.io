import { useState } from "react";
import { Check, Copy } from "lucide-react";

const formatField = (value) => {
  if (Array.isArray(value)) return value.join(", ");
  return value || "";
};

export default function PublicationCard({ publication }) {
  const [copied, setCopied] = useState(false);
  const {
    title = "",
    author,
    authors,
    journal,
    booktitle,
    school,
    year,
    bibtex = "",
    badges = []
  } = publication;

  const copy = () => {
    if (!bibtex) return;

    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayAuthors = formatField(author || authors);
  const venue = formatField(journal || booktitle || school);
  const metadata = [venue, year].filter(Boolean).join(" • ");

  return (
    <div className="border-b border-gray-300 dark:border-gray-700 py-4 flex flex-col sm:flex-row sm:items-center gap-2">
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        {displayAuthors && (
          <p className="text-sm italic text-gray-600 dark:text-gray-400 whitespace-normal break-words">
            {displayAuthors}
          </p>
        )}
        {metadata && (
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {metadata}
          </p>
        )}

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

      <button
        onClick={copy}
        disabled={!bibtex}
        className="self-start sm:self-center inline-flex items-center gap-2 text-vscode hover:text-vscode-hover disabled:text-gray-400 text-sm px-3 py-1 border border-vscode disabled:border-gray-300 rounded transition"
        title={copied ? "BibTeX copied" : "Copy BibTeX"}
        aria-label={copied ? "BibTeX copied" : "Copy BibTeX"}
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        <span>{copied ? "Copied" : "BibTeX"}</span>
      </button>
    </div>
  );
}
