import { motion } from 'motion/react';

export default function Sponsors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-32 px-6 max-w-7xl mx-auto text-center"
    >
      <h1 className="serif text-5xl md:text-6xl font-bold mb-8">贊助單位</h1>
      <p className="text-happiness-ink/60 mb-20 max-w-2xl mx-auto">
        感謝以下社友與廠商的熱情支持，讓「相信幸福博覽會」得以順利舉行。
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-white p-12 rounded-3xl border border-happiness-accent/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
            <div className="text-happiness-accent/40 font-bold text-xl">SPONSOR {i}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
