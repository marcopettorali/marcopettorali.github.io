import { FaGithub } from "react-icons/fa";

export default function SoftwareCard({ name, logo, description, category, language, github }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 py-4">
      <img src={logo} alt={name} className="w-32 h-32 object-contain rounded bg-white" />
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h4 className="text-base font-semibold text-gray-800 dark:text-gray-100">{name}</h4>
          <div className="flex gap-2">
            <span className="bg-vscode/20 text-vscode text-xs font-semibold px-2 py-0.5 rounded-full uppercase">
              {category}
            </span>
            <span className="bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 text-xs font-semibold px-2 py-0.5 rounded-full">
              {language}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{description}</p>
        <a
          href={github}
          target="_blank"
          className="inline-flex items-center gap-2 mt-3 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:scale-105 transition text-sm"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  );
}
