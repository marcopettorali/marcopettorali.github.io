import { motion } from "framer-motion";
import GlowWrapper from "./GlowWrapper";

export default function SectionCard({ title, children }) {
  return (
    <motion.div
      className="mb-10 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700
                 dark:bg-gray-900 relative "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <GlowWrapper>
        {title !== "" && (
          <div className=" px-6 pt-6 text-vscode font-title uppercase text-md tracking-wide relative z-10">
            {title}
          </div>
        )}
        <div className="divide-y divide-gray-200 dark:divide-gray-700 px-6 py-4 relative z-10">
          {children}
        </div>
      </GlowWrapper>
    </motion.div>
  );
}
