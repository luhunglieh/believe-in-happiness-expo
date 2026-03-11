import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="text-sm uppercase tracking-widest font-semibold text-happiness-accent/60 mb-4 block">
          國際扶輪3522地區 25-26年度服務計畫
        </span>
        <h1 className="serif text-6xl md:text-8xl font-bold mb-8 leading-tight">
          相信幸福博覽會
        </h1>
        <p className="text-lg md:text-xl text-happiness-ink/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          首創以心理健康為軸心，舉辦開放予一般民眾之推廣型服務計畫。
          共同推動社會心理健康促進，幸福在行動的那一刻。
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <div className="bg-white/50 backdrop-blur px-6 py-3 rounded-full border border-happiness-accent/10">
            📍 華山1914文化園區
          </div>
          <div className="bg-white/50 backdrop-blur px-6 py-3 rounded-full border border-happiness-accent/10">
            📅 2025年10月9~12日
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-happiness-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
