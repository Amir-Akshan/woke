import { ContentCopy, GitHub, X } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { callToast } from 'main/utils';
import { dimensions } from 'main/config';
import { useWindowDimensions } from 'data/hooks';
import ReactPlayer from 'react-player';
import {  useState, type FC } from 'react';

export const AuthContent: FC = () => {
  const { width } = useWindowDimensions();
  const token = '';
  const pump = 'https://pump.fun/board';

  const copy = (): void => {
    navigator.clipboard.writeText(token).then(() => {
      callToast.success('Copied !');
    });
  };

  const [isMuted, setIsMuted] = useState(true);

  const handleMouseMove = (): void => {
    if (isMuted) setIsMuted(false);
  };

  return (
    <div onMouseDownCapture={handleMouseMove}className={'flex flex-col max-w-[1200px] m-auto gap-8 w-full h-full text-white'}>
      <style>
        {`
        video{
        height:${width >= dimensions.tablet ? '68vh' : '45vh'} !important;
   
        }
        .aaa{
          div{
            height:${width >= dimensions.tablet ? '68vh' : '45vh'} !important;
             width:80% !important;
             margin:auto
          }
        }
        `}
      </style>

      <h1 className={'text-center text-2xl tablet:text-5xl pb-1'}>Your First Anti Woke Agent</h1>

      {isMuted&&<span className='text-center'>Unmute</span>}
      <div className={'mx-auto aaa'}>
      <ReactPlayer loop playing={true} muted={isMuted} volume={100}  url={'https://woke-lovat.vercel.app/video1.mp4'} />
         
      </div>

      <div className={'flex justify-around'}>
        <Link
          className={'text-white font-bold text-3xl tablet:text-5xl'}
          target={'_blank'}
          to={'https://x.com/WokitaAI'}
        >
          <X fontSize={'inherit'} />
        </Link>

        <Link
          className={'text-white font-bold text-3xl tablet:text-5xl'}
          target={'_blank'}
          to={'https://wokita-ai.gitbook.io/wokita-ai'}
        >
          <GitHub fontSize={'inherit'} />
        </Link>

        <Link
          className={'text-white font-bold text-3xl tablet:text-5xl'}
          target={'_blank'}
          to={pump}
        >
          <img alt={'pump fun'} src={'./pump-logo.png'} width={45} />
        </Link>
      </div>

      {token ? (
        <div className={'relative h-8'}>
          <div className={'absolute top-0 left-0 w-full flex items-center justify-center '}>
            <span className={'bg-secondary rounded-full px-6 p-1 flex gap-4'}>
              <h2>{token}</h2>
              <ContentCopy className={'cursor-pointer'} onClick={copy} />
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
