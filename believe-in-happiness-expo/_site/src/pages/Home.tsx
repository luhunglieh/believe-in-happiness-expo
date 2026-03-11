import { motion } from 'motion/react';
import Hero from '../includes/Hero.tsx';
import ActivityCard from '../includes/ActivityCard.tsx';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Intro Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              扶輪家庭日<br />
              用幸福與喜悅共創社會價值
            </h2>
            <p className="text-happiness-ink/70 leading-relaxed mb-8">
              我們誠摯邀請各社參與推廣與支持。這是一個首創以心理健康為軸心的博覽會，
              旨在透過多元的活動，讓一般民眾能更親近心理健康議題。
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-happiness-accent rounded-full" />
                <span>四天預期萬人參與</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-happiness-accent rounded-full" />
                <span>3個獨立且協同的服務計劃</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-happiness-accent rounded-full" />
                <span>推動社會心理健康促進</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/happiness/800/1000" 
              alt="Happiness" 
              className="rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-happiness-accent rounded-full flex items-center justify-center p-6 text-white text-center font-bold serif italic leading-tight rotate-12">
              幸福在行動的那一刻
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-32 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6">三大主軸活動</h2>
            <p className="text-happiness-ink/60">多元化的服務計畫，全方位推廣心理健康</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ActivityCard 
              title="情緒教育展"
              club="同德社"
              description="透過互動展覽，學習認識與管理情緒，建立更健康的心理素質。"
              path="/emotion"
              image="https://picsum.photos/seed/emotion/600/450"
            />
            <ActivityCard 
              title="幸福園遊會"
              club="東區社"
              description="充滿歡笑與互動的園遊會，結合舞台表演，分享喜悅與正能量。"
              path="/fair"
              image="https://picsum.photos/seed/fair/600/450"
            />
            <ActivityCard 
              title="反毒街舞賽"
              club="珍愛社"
              description="展現青春活力，透過街舞運動推廣反毒意識，建立健康生活型態。"
              path="/dance"
              image="https://picsum.photos/seed/dance/600/450"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
