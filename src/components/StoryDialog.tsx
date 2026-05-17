import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

export interface StorySource {
  label: string;
  url: string;
}

export interface StoryItem {
  title: string;
  description: string;
  image: string;
  fallback?: string;
  date?: string;
  story: string;
  category?: string;
  sources?: StorySource[];
}

export function StoryDialog({ item, onClose }: { item: StoryItem | null; onClose: () => void }) {
  const [src, setSrc] = useState(item?.image ?? "");
  useEffect(() => { setSrc(item?.image ?? ""); }, [item]);

  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl border-[#facc15]/25 bg-[#0a0a0a] p-0 overflow-hidden">
        {item && (
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-black">
              <img
                src={src}
                alt={item.title}
                referrerPolicy="no-referrer"
                onError={() => item.fallback && src !== item.fallback && setSrc(item.fallback)}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 h-6 w-6 border-t border-l border-[#facc15]/60" />
              <div className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-[#facc15]/60" />
            </div>
            <div className="relative max-h-[80vh] overflow-y-auto p-6 md:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="h-px w-6 bg-gradient-to-r from-[#facc15] to-transparent" />
                {item.category && (
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#facc15]">{item.category}</span>
                )}
                {item.date && (
                  <>
                    <span className="text-[#facc15]/40">·</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#facc15]/80">{item.date}</span>
                  </>
                )}
              </div>
              <DialogTitle className="font-serif text-3xl font-light leading-tight text-gradient-gold">
                {item.title}
              </DialogTitle>
              <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
                {item.description}
              </DialogDescription>
              <div className="mx-0 my-5 h-px w-16 bg-gradient-to-r from-[#b91c1c] to-transparent" />
              <p className="whitespace-pre-line text-[15px] leading-relaxed text-foreground/90 font-light">
                {item.story}
              </p>

              {item.sources && item.sources.length > 0 && (
                <div className="mt-8 rounded-xl border border-[#facc15]/15 bg-black/40 p-4">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#facc15]/80">Nguồn tham khảo</p>
                  <ul className="space-y-2">
                    {item.sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-start gap-2 text-sm text-foreground/80 hover:text-[#facc15] transition-colors"
                        >
                          <span aria-hidden className="mt-1 text-[#facc15]/70 group-hover:text-[#facc15]">↗</span>
                          <span className="underline-offset-4 group-hover:underline">{s.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
                Ảnh tư liệu — Wikimedia Commons
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
