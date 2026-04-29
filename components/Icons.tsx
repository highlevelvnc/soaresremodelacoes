import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PladurIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
}

export function FloorIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M2 8l10-5 10 5v12H2z" />
      <path d="M6 14h3M11 14h3M16 14h3M6 18h3M11 18h3M16 18h3" />
    </svg>
  );
}

export function ToolsIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14.7 6.3a4 4 0 015.6 5.6l-9.3 9.3-5.6-5.6 9.3-9.3z" />
      <path d="M3.5 16.5l4 4M14 9l1 1" />
    </svg>
  );
}

export function RemodelIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1z" />
    </svg>
  );
}

export function PlumbingIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 21V9a3 3 0 013-3h3V3M19 3v6a3 3 0 01-3 3h-3" />
      <path d="M5 13h4M15 17h4" />
    </svg>
  );
}

export function PaintIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 4h14v6H4z" />
      <path d="M11 10v4H8v7h6v-7h-3" />
    </svg>
  );
}

export function TileIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="8" height="8" />
      <rect x="13" y="3" width="8" height="8" />
      <rect x="3" y="13" width="8" height="8" />
      <rect x="13" y="13" width="8" height="8" />
    </svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12a7 7 0 1114 0v4a3 3 0 01-3 3h-1v-7h4M8 19v-7H4" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14 3H6a2 2 0 00-2 2v16l4-3h10a2 2 0 002-2V9z" />
      <path d="M14 3v6h6M9 13h6M9 17h4" />
    </svg>
  );
}

export function VerifiedIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 2l2.4 2.1 3.2-.4.4 3.2L20 9l-1.9 2.6L19 15l-3.1.7-1.7 2.8L12 17l-2.2 1.5-1.7-2.8L5 15l.9-3.4L4 9l2-2.1.4-3.2 3.2.4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 1.6-4.5 4-5" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5M3 18l9 5 9-5" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zM12.05 20.15h-.01a8.21 8.21 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 012.41 5.83c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.89 2.39 1.01 2.55c.12.17 1.74 2.66 4.22 3.72.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.11-.23-.17-.48-.29z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.89.7 2.78a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.89.34 1.82.57 2.78.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export const serviceIcons = {
  pladur: PladurIcon,
  floor: FloorIcon,
  tools: ToolsIcon,
  remodel: RemodelIcon,
  plumbing: PlumbingIcon,
  paint: PaintIcon,
  tile: TileIcon,
} as const;

export const differentiatorIcons = {
  support: SupportIcon,
  quote: QuoteIcon,
  verified: VerifiedIcon,
  clock: ClockIcon,
  team: TeamIcon,
  layers: LayersIcon,
} as const;
