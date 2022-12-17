import type { supabaseTypes } from '@/types/db.types';

import {
  scoreboardCounter,
  scoreboardEmoji,
  scoreboardItem,
  scoreboardLayout,
  scoreboardTitleStyle,
} from './Scoreboard.css';

interface ScoreboardProps {
  scoreboard: supabaseTypes[];
}

export const Scoreboard = ({ scoreboard }: ScoreboardProps) => {
  return (
    <div>
      <h1 className={scoreboardTitleStyle}>All time occurances</h1>
      <div className={scoreboardLayout}>
        {scoreboard.map(({ id, emoji, count }) => (
          <div key={id} className={scoreboardItem}>
            <div className={scoreboardEmoji}>
              <span dangerouslySetInnerHTML={{ __html: emoji }} />
            </div>
            <div className={scoreboardCounter}>
              <span>{count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
