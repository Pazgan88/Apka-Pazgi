import Link from "next/link";
import { Dumbbell, Home, MessageCircle, Package, User } from "lucide-react";

const links = [
  { href: "/", label: "Start", icon: Home },
  { href: "/chat", label: "AI", icon: MessageCircle },
  { href: "/pantry", label: "Spiżarnia", icon: Package },
  { href: "/workouts", label: "Trening", icon: Dumbbell },
  { href: "/profile", label: "Profil", icon: User },
];

export function BottomNav() {
  return <nav className="nav" aria-label="Główna nawigacja">{links.map(({href,label,icon:Icon}) => <Link href={href} key={href}><Icon size={20}/><span>{label}</span></Link>)}</nav>;
}
