import { v4 as uuidv4 } from 'uuid';
import type { CSSProperties, Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { getRandomEmoji } from '@/helpers/getRandomEmoji';
import type { Point } from '@/types/point';
import { supabase } from '@/lib/supabase';

import { boardStyle, pointStyle } from './Board.css';
interface BoardProps {
  points: Point[];
  setPoints: Dispatch<SetStateAction<Point[]>>;
}

export const Board = ({ points, setPoints }: BoardProps) => {
  const handleBoardClick: MouseEventHandler<HTMLDivElement> = async (event) => {
    const emoji = getRandomEmoji();

    setPoints([
      ...points,
      {
        id: uuidv4(),
        x: event.pageX - event.currentTarget.offsetLeft,
        y: event.pageY - event.currentTarget.offsetTop,
        content: emoji,
      },
    ]);

    const { data, error } = await supabase.from('emoji-store').select('*').eq('emoji', emoji);
    if (error) {
      console.error(error);
      return;
    }

    if (data.length !== 0) {
      const { error: updateError } = await supabase
        .from('emoji-store')
        .update({ count: data[0]['count'] + 1 })
        .eq('emoji', emoji);
      if (updateError) {
        console.error(updateError);
        return;
      }
    } else {
      const { error: insertError } = await supabase.from('emoji-store').insert({ emoji: emoji, count: 1 });
      if (insertError) {
        console.error(insertError);
        return;
      }
    }
  };

  return (
    <div className={boardStyle} onClick={handleBoardClick}>
      <AnimatePresence>
        {points.map(({ id, x, y, content }) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.23 }}
            key={id}
            className={pointStyle}
            role="img"
            aria-label="emoji"
            style={{ '--left': `${x}px`, '--top': `${y}px` } as CSSProperties}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
