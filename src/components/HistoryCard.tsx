import { motion } from "motion/react";
import { useState } from "react";

interface HistoryCardProps {
  title: string;
  description: string;
  image: string;
  fallback?: string;
  index: number;
  onClick?: () => void;
}

export function HistoryCard({ title, description, image, fallback, index, onClick }: HistoryCardProps) {
  const [src, setSrc] = useState(image);
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-card glass-card-hover rounded-2xl overflow-hidden text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, rgba(250,204,21,0.12), transparent 40%, rgba(185,28,28,0.18))" }}
      />

      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={src}
          alt={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => fallback && src !== fallback && setSrc(fallback)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#b91c1c]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 left-3 h-6 w-6 border-t border-l border-[#facc15]/60" />
        <div className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-[#facc15]/60" />
      </div>

      <div className="relative p-5 pt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-6 bg-gradient-to-r from-[#facc15] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#facc15]/80">
            Chương {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-serif text-xl leading-tight text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-[#facc15]/70 group-hover:text-[#facc15] transition-colors">
          Xem chi tiết <span aria-hidden>→</span>
        </span>
      </div>
    </motion.button>
  );
}
