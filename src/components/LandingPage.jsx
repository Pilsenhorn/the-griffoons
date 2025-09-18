import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    // TODO: přidat logiku (např. API call, Mailchimp, vlastní backend…)
    setEmail("");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">The Griffoons</h1>
      <p className="text-lg md:text-xl mb-8 text-gray-300 text-center max-w-xl">
        Kreativní prostor, kde se nápady mění ve skutečnost. Přidej se k nám a
        buď u toho od začátku.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tvůj e-mail"
          required
          className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Přihlásit se
        </button>
      </form>
    </section>
  );
}
