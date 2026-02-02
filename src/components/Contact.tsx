"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 text-center">
      <h3 className="text-3xl font-bold mb-6">Contact Me</h3>

      {sent ? (
        <p className="text-green-500">Message sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-gray-800"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded "
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded "
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button className="px-6 py-3 bg-green-500 text-black rounded font-bold">
            Send
          </button>
        </form>
      )}
    </section>
  );
}
