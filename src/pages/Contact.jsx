import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { FaEnvelope} from "react-icons/fa";

import { useState } from "react";

// Ensure Leaflet marker assets resolve correctly when bundled by Vite
const defaultIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


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

// Pulsante per tornare alla vista iniziale
function HomeButton({ center, zoom }) {
  const map = useMap();
  
  const handleHomeClick = () => {
    map.setView(center, zoom);
  };

  return (
    <button
      onClick={handleHomeClick}
      className="absolute top-4 right-4 z-[1000] bg-white dark:bg-gray-800 p-2 rounded shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      title="Torna alla vista iniziale"
    >
      <FaHome className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    </button>
  );
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
        I'm currently an Assistant Professor at the University of Pisa.<br />
        Feel free to contact me via email or connect on GitHub/LinkedIn.
      </p>

      {/* Email */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email:</p>
        <a
          href="mailto:marco.pettorali@unipi.it"
          className="text-vscode hover:text-vscode-hover text-sm"
        >
          marco.pettorali@unipi.it
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
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-300 dark:border-gray-700 relative">
        <MapContainer
          center={[43.7209229, 10.3897911]}
          zoom={17}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >
          <ForceMapResize />
          <HomeButton center={[43.7209229, 10.3897911]} zoom={17} />
          <TileLayer
            attribution='&copy; ...'
            url={
              "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
          />

          <Marker position={[43.7209229, 10.3897911]} icon={defaultIcon}>
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
