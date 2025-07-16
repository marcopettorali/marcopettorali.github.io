import { useEffect, useState } from "react";
import PublicationCard from "../components/PublicationCard";
import SectionCard from "../components/SectionCard";

const SECTION_TITLES = {
  journals: "Journal Articles",
  conferences: "Conference Papers",
  thesis: "PhD Thesis",
  shortPapers: "Short Papers"
};

export default function Publications() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/publications.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="text-center py-20 text-gray-400">Loading publications...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-title uppercase text-vscode mb-6">Publications</h2>

      {Object.entries(data).map(([section, entries]) => (

        <SectionCard title={SECTION_TITLES[section] || section} key={section}>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 px-6">
            {entries.map((obj, idx) => (
              <PublicationCard
                key={idx}
                bibtex={obj.bibtex}
                badges={obj.badges}
              />
            ))}

          </div>
        </SectionCard>


      ))
      }


    </div >
  );
}