export default function WavyUnderline({
  color = "red",
  children,
  className = "",
}) {
  const colorMap = {
    red: "%23dc2626", // #dc2626
    blue: "%232563eb", // #2563eb
  };

  const strokeColor = colorMap[color] || colorMap.red;
  const uniqueClass = `wavy-underline-${color}`;

  if (children) {
    return (
      <span className={`${uniqueClass} ${className}`}>
        {children}
        <StyleBlock uniqueClass={uniqueClass} strokeColor={strokeColor} />
      </span>
    );
  }

  return (
    <div className={`${uniqueClass} ${className} w-full h-full`}>
      <StyleBlock uniqueClass={uniqueClass} strokeColor={strokeColor} />
    </div>
  );
}

function StyleBlock({ uniqueClass, strokeColor }) {
  return (
    <style>{`
      .${uniqueClass} {
        position: relative;
        display: inline-block;
      }
      .${uniqueClass}::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 12px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='${strokeColor}' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
        background-size: 50px 12px;
        background-repeat: repeat-x;
        animation: waveMoveCommon 1s linear infinite;
      }
      @keyframes waveMoveCommon {
        0% { background-position: 0 0; }
        100% { background-position: 50px 0; }
      }
    `}</style>
  );
}
