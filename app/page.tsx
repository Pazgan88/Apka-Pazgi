import Link from "next/link";
import { Dumbbell, MessageCircle, Package, Scale } from "lucide-react";

const cards = [
  { href: "/chat", title: "Porozmawiaj z AI", text: "W kolejnych etapach zapiszesz produkty naturalnym językiem.", icon: MessageCircle },
  { href: "/pantry", title: "Spiżarnia", text: "Jedno miejsce na produkty, ilości i terminy ważności.", icon: Package },
  { href: "/workouts", title: "Trening", text: "Prosty zapis czasu oraz własnych ćwiczeń.", icon: Dumbbell },
  { href: "/profile", title: "Postępy", text: "Profil, cele i waga użytkownika.", icon: Scale },
];

export default function HomePage() {
  return <main>
    <section className="hero">
      <p className="eyebrow">Pierwsza działająca wersja</p>
      <h1>Zdrowie bez pięciu aplikacji.</h1>
      <p>Koledzy App połączy spiżarnię, żywienie, treningi i postępy w jednej rozmowie. Ten etap dostarcza działający fundament interfejsu.</p>
    </section>
    <section className="grid" aria-label="Moduły aplikacji">
      {cards.map(({href,title,text,icon:Icon}) => <Link className="card" href={href} key={href}><span className="card-icon"><Icon size={22}/></span><h2>{title}</h2><p>{text}</p></Link>)}
    </section>
  </main>;
}
