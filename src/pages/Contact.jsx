import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { FaEnvelope} from "react-icons/fa";

import { useState } from "react";


// Forza il resize della mappa dopo il mount
function ForceMapResize() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200); // Ritardo per assicurarsi che il layout sia pronto
  }, [map]);
  return null;
}

export default function Contacts() {

  // dentro Contacts
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setDarkMode(dark);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-title uppercase text-vscode mb-6">Contact</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        I'm currently a Postdoctoral Researcher at the University of Pisa.<br />
        Feel free to contact me via email or connect on GitHub/LinkedIn.
      </p>

      {/* <a
        href="mailto:marco.pettorali@ing.unipi.it"
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:scale-105 transition"
      >
        <FaEnvelope />
        Email
      </a> */}

      {/* Email */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email:</p>
        <a
          href="mailto:marco.pettorali@ing.unipi.it"
          className="text-vscode hover:text-vscode-hover text-sm"
        >
          marco.pettorali@ing.unipi.it
        </a>
      </div>

      {/* Social links */}
      <div className="flex gap-4 text-vscode mb-10">
        <a href="https://github.com/marcopettorali" target="_blank" title="GitHub">
          <FaGithub className="w-5 h-5 hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com/in/marco-pettorali-9bb78a228" target="_blank" title="LinkedIn">
          <FaLinkedin className="w-5 h-5 hover:scale-110 transition" />
        </a>
      </div>

      {/* Mappa */}
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-300 dark:border-gray-700">
        <MapContainer
          center={[43.7209229, 10.3897911]}
          zoom={17}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100%" }}
        >
          <ForceMapResize />
          <TileLayer
            attribution='&copy; ...'
            url={
              "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
          />

          <Marker position={[43.7209229, 10.3897911]}>
            <Popup>
              Largo Lucio Lazzarino 1<br />
              Department of Computer Engineering (DII), Pisa
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
