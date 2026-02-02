"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Hi, I'm Mohammad 👋
      </motion.h2>
    </section>
  );
}
