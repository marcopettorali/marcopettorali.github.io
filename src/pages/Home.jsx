import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import CollaborationCard from "../components/CollaborationCard";
import GlowWrapper from "../components/GlowWrapper";
import { FaGoogleScholar } from "react-icons/fa6";


export default function Home() {

    const [collaborations, setCollaborations] = useState([]);

    useEffect(() => {
        fetch("/collaborations.json")
            .then((res) => res.json())
            .then(setCollaborations);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
            <div className="max-w-3xl mx-auto px-4 pt-24">
                <GlowWrapper>
                    <div className="rounded-xl shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Foto --------------------------------------------------- */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src="/profile.png"
                                alt="Marco Pettorali"
                                className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                            />
                        </div>

                        {/* Testo -------------------------------------------------- */}
                        <div className="flex flex-col justify-center gap-4 text-center md:text-left">
                            {/* Nome + ruolo */}
                            <div>
                                <h1 className="text-4xl font-extrabold font-title tracking-tight text-gray-900 dark:text-gray-100">
                                    Marco&nbsp;Pettorali
                                </h1>
                                <p className="flex md:hidden mt-1 text-lg font-medium text-gray-600 dark:text-gray-300 mt-4 leading-6 justify-center">
                                    Postdoc Researcher · University&nbsp;of&nbsp;Pisa
                                </p>
                                <p className="hidden md:flex mt-1 text-lg font-medium text-gray-600 dark:text-gray-300 mt-4 leading-6">
                                    Postdoc Researcher University&nbsp;of&nbsp;Pisa
                                </p>
                            </div>

                            {/* Core topics */}
                            <ul className="space-y-1 text-base">
                                {[
                                    'Wireless networks',
                                    'Simulation systems',
                                    'Open-source software'
                                ].map((item) => (
                                    <li key={item} className="flex items-start justify-center md:justify-start">
                                        <span className="h-2 w-2 mt-2 mr-3 rounded-full bg-vscode/80" />
                                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Vision statement */}
                            <p className="text-sm italic text-gray-500 dark:text-gray-400">
                                Passionate about bridging theory and real-world impact
                            </p>
                        </div>
                    </div>

                </GlowWrapper>

                <div className="sm:col-span-2 mt-2 text-center sm:text-left mt-20 mb-20 ">
                    <div className="flex flex-wrap gap-8 md:gap-12 justify-center items-center">
                        <a
                            href="https://scholar.google.com/citations?user=F3pN-DQAAAAJ"
                            target="_blank"
                            className="flex items-center gap-2 bg-vscode text-white px-4 py-2 rounded-full hover:bg-vscode-hover hover:scale-105  transition"
                            style={{ width: "80px", height: "80px", minWidth: "80px", minHeight: "80px" , "backgroundColor": "#4285F4" }}
                        >
                            <FaGoogleScholar size={48} />

                        </a>
                        
                        <a
                            href="https://it.linkedin.com/in/marco-pettorali-9bb78a228/es?trk=people-guest_people_search-card"
                            target="_blank"
                            className="flex items-center gap-2 bg-vscode text-white px-4 py-2 rounded-xl hover:bg-vscode-hover hover:scale-105  transition"
                            style={{ width: "70px", height: "70px", minWidth: "70px", minHeight: "70px" }}
                        >
                            <FaLinkedin size={48} />

                        </a>
                        <a
                            href="https://github.com/marcopettorali"
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
                            style={{ width: "80px", height: "80px", minWidth: "80px", minHeight: "80px" }}
                        >
                            <FaGithub size={48} />

                        </a>

                        <a
                            href="/cv.pdf"
                            download
                            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-xl hover:scale-105 transition font-title"
                            style={{ width: "180px", height: "70px", minWidth: "70px", minHeight: "70px" }}
                        >
                            <FaFilePdf size={48} />
                            <p className="ms-2">Curriculum Vitae</p>

                        </a>
                    </div>
                </div>
            </div>

            <motion.section
                id="about"
                className="max-w-3xl mx-auto mt-10 px-10 sm:px-10 text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >

                <h3 className="text-2xl font-title uppercase text-vscode mb-4">About Me</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                    I'm a postdoctoral researcher at the University of Pisa. I work on network simulation,
                    wireless communication systems, and software tools for experimental analysis. My work
                    focuses on bridging the gap between theoretical models and real-world systems.
                    <br></br><br></br>
                    I received the Ph.D. from the University of Pisa in 2025, and the master’s degree (cum laude) in Computer Engineering from the University of Pisa, in 2021.

                    I served as publicity chair for the 26th IEEE International Symposium on a World of Wireless, Mobile and Multimedia Networks (WoWMoM) and the 7th Workshop on Smart Service Systems (SmartSys) co-located with IEEE SMARTCOMP 2022.
                </p>
                <ul className="list-none text-gray-500 dark:text-gray-400 space-y-1">
                    <li>🎓 <strong>PhD</strong> in Computer Engineering, University of Pisa</li>
                    <li>🧪 Research on <strong>Cloud-to-Things Continuum (C2TC)</strong> and <strong>Industrial Internet of Things (IIoT)</strong></li>
                    <li> 🎶 I love music, travel, and exploring new technologies.</li>
                    <li>🌍 Currently based in Pisa, Italy</li>

                </ul>
            </motion.section>


            <div className="flex justify-center mt-8">
                <a
                    href="/publications"
                    className="inline-block bg-vscode text-white px-8 py-4 rounded-xl font-title text-lg font-semibold shadow-md hover:bg-vscode-hover hover:scale-105 transition"
                >
                    View Publications
                </a>
            </div>




            <motion.section
                id="collaborations"
                className="max-w-3xl mx-auto mt-12 px-4 sm:px-6 text-left "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-title uppercase text-vscode mb-6 px-6">International Collaborations</h3>

                {collaborations.map((entry, idx) => (
                    <div key={idx} className="mb-6 ">

                        <CollaborationCard {...entry} />

                    </div>
                ))}
            </motion.section>




            <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400 pb-10">
                &copy; {new Date().getFullYear()} Marco Pettorali. All rights reserved.
            </footer>


        </div>
    );
}
