import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ActivityCardProps {
  title: string;
  club: string;
  description: string;
  path: string;
  image: string;
}

export default function ActivityCard({ title, club, description, path, image }: ActivityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-happiness-accent/5 flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-happiness-accent/60">
            {club}
          </span>
        </div>
        <h3 className="serif text-2xl font-bold mb-4">{title}</h3>
        <p className="text-happiness-ink/60 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <Link 
          to={path} 
          className="inline-flex items-center gap-2 text-happiness-accent font-semibold hover:gap-3 transition-all"
        >
          查看更多 <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
