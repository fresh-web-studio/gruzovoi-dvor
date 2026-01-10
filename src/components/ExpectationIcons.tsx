// src/components/ExpectationIcons.tsx
import { Sofa, Coffee, Wifi, Monitor, Baby, Eye } from "lucide-react";

export type ExpectationIconKey =
    | "sofa"
    | "coffee"
    | "wifi"
    | "tv"
    | "kids"
    | "transparency";

type Props = {
    type: ExpectationIconKey;
    className?: string;
};

export function ExpectationIcon({ type, className }: Props) {
    const common = "w-6 h-6";

    switch (type) {
        case "sofa":
            return <Sofa className={`${common} ${className ?? ""}`} />;
        case "coffee":
            return <Coffee className={`${common} ${className ?? ""}`} />;
        case "wifi":
            return <Wifi className={`${common} ${className ?? ""}`} />;
        case "tv":
            return <Monitor className={`${common} ${className ?? ""}`} />;
        case "kids":
            return <Baby className={`${common} ${className ?? ""}`} />;
        case "transparency":
            return <Eye className={`${common} ${className ?? ""}`} />;
        default:
            return null;
    }
}
