export default function ChatPage() {
  return <main><h1 className="section-title">Asystent AI</h1><p className="section-copy">Gotowy widok rozmowy. Integrację modelu i potwierdzanie akcji dodamy w Etapie 3.</p><section className="chat-box"><div className="bubble ai">Cześć! Docelowo powiesz mi tutaj, co masz w lodówce, co zjadłeś albo jaki trening wykonałeś.</div><form className="chat-input"><input disabled placeholder="AI zostanie podłączone w kolejnym etapie" aria-label="Wiadomość"/><button disabled>Wyślij</button></form></section></main>;
}
