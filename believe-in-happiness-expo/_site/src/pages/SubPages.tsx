import { motion } from 'motion/react';

const SubPage = ({ title, content, image }: { title: string, content: string, image: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-32 px-6 max-w-4xl mx-auto"
  >
    <h1 className="serif text-5xl md:text-6xl font-bold mb-12 text-center">{title}</h1>
    <img 
      src={image} 
      alt={title} 
      className="w-full aspect-video object-cover rounded-[40px] mb-12 shadow-lg"
      referrerPolicy="no-referrer"
    />
    <div className="prose prose-lg prose-happiness max-w-none">
      <p className="text-happiness-ink/70 leading-relaxed text-xl mb-8">
        {content}
      </p>
      <div className="h-px bg-happiness-accent/10 my-12" />
      <h3 className="serif text-2xl font-bold mb-6">活動亮點</h3>
      <ul className="space-y-4 text-happiness-ink/70">
        <li>✨ 專業講師分享與互動</li>
        <li>✨ 趣味遊戲與體驗攤位</li>
        <li>✨ 精美紀念品與抽獎活動</li>
        <li>✨ 適合全家大小共同參與</li>
      </ul>
    </div>
  </motion.div>
);

export const Emotion = () => (
  <SubPage 
    title="情緒教育展" 
    content="由同德社主辦。我們相信情緒教育是心理健康的基石。透過互動式的展覽設計，讓參與者能更直觀地了解自己的情緒，學習如何與情緒共處，並掌握壓力管理的技巧。" 
    image="https://picsum.photos/seed/emotion-detail/1200/600"
  />
);

export const Fair = () => (
  <SubPage 
    title="幸福園遊會" 
    content="由東區社主辦。這是一個充滿歡樂與溫馨的場域。我們結合了各式創意攤位與精彩的舞台表演，讓扶輪家庭與一般大眾能在輕鬆愉快的氛圍中，感受幸福的溫度。" 
    image="https://picsum.photos/seed/fair-detail/1200/600"
  />
);

export const Dance = () => (
  <SubPage 
    title="反毒街舞賽" 
    content="由珍愛社主辦。街舞不僅是運動，更是一種自我表達。我們透過高能量的街舞比賽，吸引年輕族群參與，並在過程中傳遞反毒意識，鼓勵青少年追求健康、正向的休閒生活。" 
    image="/assets/images/3-banner01.jpg"
  />
);
