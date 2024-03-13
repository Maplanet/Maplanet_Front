'use client';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { useState } from 'react';

import { BoardCardCompleate, BoardCardHoverButtons } from '../board-card-wrappers';
import Badge from '@/components/ui/badge';

import { IHunterBoard } from '@/types';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import { filterImageUrl } from '@/util/util';
import HunterBoardModal from '@/components/modal/board/hunter-board-modal';

dayjs.locale('ko');

interface IHelperCardProps extends IHunterBoard {
  badges?: string[];
}

const HunterCard: React.FunctionComponent<IHelperCardProps> = ({
  board2_id,
  discord_id,
  title,
  discord_image,
  discord_global_name,
  meso,
  place_theif_nickname,
  manner_count,
  report_count,
  report_kind,
  complete,
  created_at,
  badges,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <HunterBoardModal
          boardId={board2_id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}

      {complete ? (
        <BoardCardCompleate />
      ) : (
        <BoardCardHoverButtons
          discordId={discord_id}
          profileId={props.user_id}
          setIsModalOpen={onOpen}
        />
      )}

      <div className='flex w-full items-center justify-between '>
        <Badge
          className={clsx(report_kind === '인기도 하락' ? 'bg-main' : 'bg-violet')}
          size='card'>
          {report_kind}
        </Badge>
        <time className='font-medium text-gray-400'>
          {dayjs(created_at).format('YYYY년 MM월 DD일')}
        </time>
      </div>

      <h1 className='my-6 text-xl font-semibold'>{title}</h1>
      <div className='mb-4 mt-3 flex flex-wrap items-center gap-2'>
        <Badge size='card' className='bg-lightGray text-yellow'>
          <Icon src='/svgs/money.svg' size={20} alt='meso' />
          {meso}
        </Badge>
        {badges?.map((el) => (
          <Badge size='card' key={el} className='bg-lightGray '>
            {el}
          </Badge>
        ))}
      </div>
      <div className='mt-6 flex items-center justify-between '>
        <InlineProfile
          imgUrl={filterImageUrl(discord_image)}
          manner={manner_count}
          unManner={report_count}
          discordNickName={discord_global_name}
        />
        <div className='flex items-center gap-x-1 font-light'>
          <Icon src={'/svgs/eyes.svg'} alt='view' size={20} />
          <p className='leading-3'>{props.view_count}</p>
        </div>
      </div>
    </>
  );
};

export default HunterCard;
