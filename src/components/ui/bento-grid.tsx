import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export const BentoGrid = ({
  className,
  children,
}: BentoGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  className?: string;
  Icon?: React.FC<{ className?: string }>;
  name: string;
  description: string;
  href?: string;
  cta?: string;
  background?: ReactNode;
  category?: string;
  isDownload?: boolean;
}

export const BentoCard = ({
  className,
  Icon,
  name,
  description,
  href,
  cta,
  background,
  category,
  isDownload = false,
}: BentoCardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isDownload && href) {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = href;
      link.download = href.split('/').pop() || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <motion.div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border shadow-sm",
        "bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow",
        className
      )}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative flex h-full flex-col justify-between gap-3 p-6 z-10">
        <div>
          {Icon && <Icon className="h-10 w-10 mb-4 text-primary" />}
          {category && (
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {category}
            </span>
          )}
          <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2 tracking-tight">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
        {href && cta && (
          <a
            href={isDownload ? '#' : href}
            onClick={handleClick}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-4 cursor-pointer"
          >
            {cta}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isDownload ? "M12 4v16m8-8H4" : "M9 5l7 7-7 7"}
              />
            </svg>
          </a>
        )}
      </div>

      {/* Background Element */}
      <AnimatePresence>
        {background && hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0"
          >
            {background}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual pattern */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H60V60H0V0ZM60 60H120V120H60V60Z"
            fill="currentColor"
            className="text-primary/20"
          />
        </svg>
      </div>
    </motion.div>
  );
};
