import { useRef } from "react";

export default function GlowWrapper({ children }) {
    const ref = useRef();

    const handleMouseMove = (e) => {
        const el = ref.current;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--mouse-x", `${x}px`);
        el.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden"
        >
            {/* Glow effect */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-20 transition duration-300"
                style={{
                    background:
                        "radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 80%)"
                        // "radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 1), transparent 80%)"

                }}
            />
            {children}
        </div>
    );
}
