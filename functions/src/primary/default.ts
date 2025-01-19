interface Query {
  text: string
}

export function defaultStyle(query: Query): string {
  const { text } = query

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="283" height="45" fill="none">
      <style>
        text {
          user-select: none;
        }
      </style>
      <g filter="url(#shadow)" shape-rendering="crispEdges">
        <rect width="281" height="43" fill="url(#gradient)" rx="8"/>
        <rect width="280" height="42" x=".5" y=".5" stroke="#000" rx="7.5"/>
      </g>
      <defs>
        <linearGradient id="gradient" x1="138.9" x2="284.4" y1="46.3" y2="-37" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EE2525"/>
          <stop offset=".8" stop-color="#8B1818"/>
        </linearGradient>
        <filter id="shadow" width="283" height="47" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dx="2" dy="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_11"/>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_11" result="shape"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="shape" result="effect2_innerShadow_1_11"/>
        </filter>
      </defs>
      <text x="28" y="27" stroke="#fff">${text}</text>
    </svg>
  `
}
