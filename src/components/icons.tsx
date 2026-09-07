const STROKE = 1.25;

export function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4.5 5.5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

export function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function MenuGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

/** A butcher's cut-chart: pig or cow silhouette in profile, divided into
 * primal sections by thin chart lines, with one section tinted and
 * labeled to call out the dish's actual cut of meat. */
export function CutChartIllustration({
  animal,
  highlight,
  className = "",
  ...props
}: {
  animal: "pig" | "cow";
  highlight: { x: number; width: number; label: string };
} & React.SVGProps<SVGSVGElement>) {
  const wrapClass = `draw-in ${className}`;

  if (animal === "pig") {
    return (
      <svg viewBox="0 0 240 150" className={wrapClass} aria-hidden="true" {...props}>
        <rect
          x={highlight.x}
          y="30"
          width={highlight.width}
          height="78"
          rx="6"
          fill="var(--oxblood-600)"
          fillOpacity="0.16"
          stroke="var(--oxblood-600)"
          strokeWidth="1.25"
        />
        <g fill="none" stroke="var(--ink-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="112" cy="68" rx="80" ry="36" />
          <ellipse cx="195" cy="60" rx="25" ry="21" />
          <rect x="216" y="55" width="13" height="14" rx="4" />
          <path d="M181,40 L172,24 L193,38 Z" />
          <path d="M40,54 q-11,-6 -4,-15 q6,-5 2,-13" />
          <rect x="58" y="96" width="10" height="26" rx="2" />
          <rect x="90" y="98" width="10" height="26" rx="2" />
          <rect x="142" y="98" width="10" height="26" rx="2" />
          <rect x="172" y="96" width="10" height="26" rx="2" />
          <line x1="94" y1="33" x2="94" y2="103" stroke="var(--ink-500)" strokeWidth="1" />
          <line x1="138" y1="31" x2="134" y2="105" stroke="var(--ink-500)" strokeWidth="1" />
          <line x1="168" y1="32" x2="166" y2="104" stroke="var(--ink-500)" strokeWidth="1" />
        </g>
        <circle cx="203" cy="55" r="1.6" fill="var(--ink-900)" />
        <text
          x={highlight.x + highlight.width / 2}
          y="22"
          textAnchor="middle"
          className="font-stamp"
          fontSize="10"
          fill="var(--oxblood-600)"
          letterSpacing="0.05em"
        >
          {highlight.label}
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 150" className={wrapClass} aria-hidden="true" {...props}>
      <rect
        x={highlight.x}
        y="34"
        width={highlight.width}
        height="70"
        rx="4"
        fill="var(--oxblood-600)"
        fillOpacity="0.16"
        stroke="var(--oxblood-600)"
        strokeWidth="1.25"
      />
      <g fill="none" stroke="var(--ink-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="25" y="38" width="192" height="64" rx="20" />
        <rect x="208" y="34" width="42" height="38" rx="11" />
        <rect x="244" y="54" width="18" height="18" rx="5" />
        <path d="M223,38 q-4,-13 2,-22 M237,38 q4,-13 -2,-22" />
        <path d="M214,42 L200,50 L212,60 Z" />
        <line x1="38" y1="102" x2="38" y2="128" />
        <circle cx="38" cy="132" r="4.5" />
        <rect x="55" y="104" width="11" height="30" rx="2" />
        <rect x="90" y="104" width="11" height="30" rx="2" />
        <rect x="150" y="104" width="11" height="30" rx="2" />
        <rect x="185" y="104" width="11" height="30" rx="2" />
        <line x1="62" y1="39" x2="62" y2="101" stroke="var(--ink-500)" strokeWidth="1" />
        <line x1="123" y1="39" x2="123" y2="101" stroke="var(--ink-500)" strokeWidth="1" />
        <line x1="164" y1="39" x2="164" y2="101" stroke="var(--ink-500)" strokeWidth="1" />
      </g>
      <circle cx="256" cy="60" r="1.6" fill="var(--ink-900)" />
      <text
        x={highlight.x + highlight.width / 2}
        y="27"
        textAnchor="middle"
        className="font-stamp"
        fontSize="10"
        fill="var(--oxblood-600)"
        letterSpacing="0.05em"
      >
        {highlight.label}
      </text>
    </svg>
  );
}

/** An order-ticket / reservation-stub illustration: a stamped circular
 * mark over a perforated tear-line, the visit section's signature device. */
export function TicketIllustration({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  const dashSegments = Array.from({ length: 15 }, (_, i) => 14 + i * 12);

  return (
    <svg
      viewBox="0 0 200 230"
      className={`draw-in ${className}`}
      aria-hidden="true"
      {...props}
    >
      <rect
        x="10"
        y="10"
        width="180"
        height="210"
        rx="6"
        fill="none"
        stroke="var(--ink-900)"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="78" r="42" fill="none" stroke="var(--oxblood-600)" strokeWidth="2.5" />
      <circle cx="100" cy="78" r="34" fill="none" stroke="var(--oxblood-600)" strokeWidth="1" />
      <text
        x="100"
        y="74"
        textAnchor="middle"
        className="font-stamp"
        fontSize="12"
        fill="var(--oxblood-600)"
        letterSpacing="0.04em"
      >
        RESERVIERT
      </text>
      <text
        x="100"
        y="90"
        textAnchor="middle"
        className="font-stamp"
        fontSize="9"
        fill="var(--oxblood-600)"
        letterSpacing="0.1em"
      >
        FÜRTH
      </text>
      {dashSegments.map((x) => (
        <line
          key={x}
          x1={x}
          y1="150"
          x2={x + 7}
          y2="150"
          stroke="var(--ink-500)"
          strokeWidth="2"
        />
      ))}
      <text
        x="100"
        y="188"
        textAnchor="middle"
        className="font-display"
        fontWeight="700"
        fontSize="18"
        fill="var(--ink-900)"
      >
        Our Place
      </text>
    </svg>
  );
}
