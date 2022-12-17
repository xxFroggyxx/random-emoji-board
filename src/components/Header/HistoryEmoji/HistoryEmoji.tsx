import { motion, AnimatePresence } from 'framer-motion';

import type { Point } from '@/types/point';

import { historyEmojiStyle, historyPoint } from './HistoryEmoji.css';

interface HistoryEmojiProps {
  history: Point[];
}

export const HistoryEmoji = ({ history }: HistoryEmojiProps) => {
  return (
    <div className={historyEmojiStyle}>
      <AnimatePresence>
        {history.slice(-5).map(({ id, content }) => (
          <div key={id} className={historyPoint}>
            <motion.span
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: [0.25, 0.1, 0.25, 2.5] }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};
