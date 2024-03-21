'use client';

import Icon from '@/components/ui/icon';
import SNSButton from '@/components/ui/sns-button';
import Link from 'next/link';

interface IDiscordChannelBtnProps {}

const KAKAO_HREF = process.env.NEXT_PUBLIC_KAKAO_CHATTING_LINK;
const DISCORD_HREF = process.env.NEXT_PUBLIC_DISCORD_CHANNEL_URL;

const EdgeButtons: React.FunctionComponent<IDiscordChannelBtnProps> = ({}) => {
  return (
    <div className='fixed bottom-8 right-10 flex flex-col items-end gap-y-4'>
      <SNSButton
        alt='discord'
        href={DISCORD_HREF || '#'}
        title={'메랜 피플 채널'}
        imageUrl='/svgs/discord-icon.svg'
        color='bg-discord text-white'
      />

      <SNSButton
        alt='kakao'
        href={KAKAO_HREF || '#'}
        title={'메랜 피플 오픈 카톡'}
        imageUrl='/svgs/kakao.svg'
        color='bg-kakao text-black'
      />
    </div>
  );
};

export default EdgeButtons;
