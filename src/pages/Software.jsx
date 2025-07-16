import { useEffect, useState } from "react";
import SectionCard from "../components/SectionCard";
import SoftwareCard from "../components/SoftwareCard";

export default function Software() {
  const [softwareList, setSoftwareList] = useState([]);

  useEffect(() => {
    fetch("/software.json")
      .then((res) => res.json())
      .then(setSoftwareList);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-title uppercase text-vscode mb-6">Software</h2>

      {softwareList.map((sw, idx) => (
        <SectionCard key={idx} title={sw.name}>
            <SoftwareCard {...sw} />
        </SectionCard>
      ))}
    </div>
  );
}
