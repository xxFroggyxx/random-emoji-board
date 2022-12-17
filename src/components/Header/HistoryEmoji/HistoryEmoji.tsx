import type { Point } from '@/types/point';

import { historyEmojiStyle, historyPoint } from './HistoryEmoji.css';

interface HistoryEmojiProps {
  history: Point[];
}

export const HistoryEmoji = ({ history }: HistoryEmojiProps) => {
  return (
    <div className={historyEmojiStyle}>
      {history.slice(-5).map(({ id, content }) => (
        <div key={id} className={historyPoint}>
          <span dangerouslySetInnerHTML={{ __html: content }}></span>
        </div>
      ))}
    </div>
  );
};
