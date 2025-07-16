import SectionCard from "./SectionCard";

export default function CollaborationCard({ name, institution, department, location, period, logo, note }) {
  return (

    <SectionCard title="">
    <div className="flex flex-col sm:flex-row items-start gap-4 rounded-xl ">
      <img src={logo} alt={institution} className="w-32 h-auto object-contain rounded dark:bg-white p-2 mt-7" />
      <div className="flex-1">
        <h4 className="text-base font-semibold text-gray-600 dark:text-gray-400">{period}</h4>
        <h4 className="text-base font-semibold text-gray-800 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300">{department}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{institution}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        {note && (
          <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-1">{note}</p>
        )}
      </div>
    </div>
    </SectionCard>

  );
}
