'use client';

import Inner from '@/components/ui/inner';
import Board from './components/board';
import Image from 'next/image';
import GetHomeData from '@/actions/home';
import Spinner from '@/components/ui/spinner';

const HomePage: React.FC = () => {
  const { data, error, isLoading } = GetHomeData();

  if (isLoading) return <Spinner />;

  if (error) return <div>에러가 발생했습니다</div>;

  const category = ['심쩔', '겹사', '나무꾼', '파티 모집'];
  return (
    // 헤더와 푸터를 제외한 메인
    <Inner>
      <main className='relative flex w-full flex-col items-center justify-between text-white'>
        {/* 로고 배너*/}
        <div className='my-[40px] flex flex-col items-center gap-4'>
          <div className='mb-5 mt-2'>
            <Image src='/svgs/main-logo.svg' alt='logo' height={50} width={350} />
          </div>
        </div>
        {/* 방문자 수 */}
        <div className='absolute right-0 my-[40px] flex flex-col gap-2 text-sm font-light text-[#c3c3c3]'>
          <p>
            전체 방문 유저:{' '}
            <span className='font-normal text-[#fff]'>{data.visitorsData?.total_visitors}</span>
          </p>
          <p>
            오늘 방문 유저:{' '}
            <span className='font-normal text-[#fff]'>{data.visitorsData?.today_visitors}</span>
          </p>
          <p>
            현재 접속 유저:{' '}
            <span className='font-normal text-[#fff]'>{data.visitorsData?.logged_in_user}</span>
          </p>
        </div>

        {/* 메인 컨텐츠 부분 */}
        <div className='grid w-full grid-cols-2 grid-rows-2 gap-10'>
          {category.map((category, index) => {
            return <Board key={index} category={category} />;
          })}
        </div>
      </main>
    </Inner>
  );
};

export default HomePage;
