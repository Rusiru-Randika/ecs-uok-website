export default function BlobAnimation({
  color = "blue",
  positionClass = "left-0 top-0",
  style = {},
  className = "",
}) {
  const colorMap = {
    purple: "rgba(127, 0, 247, 0.4)",
    green: "rgba(34, 197, 94, 0.4)",
    blue: "rgba(59, 130, 246, 0.4)",
    gold: "rgba(234, 179, 8, 0.4)",
  };

  const backgroundColor = colorMap[color] || colorMap.blue;

  return (
    <div
      className={`absolute ${positionClass} w-[400px] h-[400px] pointer-events-none hidden md:block transition-all duration-700 ease-in-out ${className}`}
      style={{
        background: backgroundColor,
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", // Default radius, usually overridden by animation or specific style
        animation: `morphBlob_${color} 8s ease-in-out infinite`,
        ...style, // Allow overriding transform, opacity, animation, etc.
      }}
    >
      <style>{`
        @keyframes morphBlob_${color} {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%; }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 40% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>
    </div>
  );
}
