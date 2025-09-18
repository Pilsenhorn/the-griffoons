import { useState } from "react";
import "../App.css";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
    // logika pro API, Mailchimp nebo backend
  };

  return (
    <div className="landing-container">
      {/* Hlavní obsah */}
      <main className="landing-content">
        <h1>The Griffoons</h1>
        <p className="subtitle">
          Kreativní prostor, kde se nápady mění ve skutečnost.
        </p>
        <p className="description">
          Přihlas se k odběru novinek a buď mezi prvními, kdo se dozví o našem spuštění!
        </p>

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="email"
            placeholder="Tvůj e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Přihlásit se</button>
        </form>
      </main>
    </div>
  );
}