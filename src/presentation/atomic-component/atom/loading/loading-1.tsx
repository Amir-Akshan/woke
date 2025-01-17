import { colors } from 'presentation/style';
import type { FC } from 'react';

export const Loading1: FC = () => {
  return (
    <div className={'flex flex-col items-center justify-center absolute top-0 w-full h-dvh'}>
      <style>
        {`
          .loader {
            width: 40px;
            aspect-ratio: 1;
            position: relative;
          }
          .loader:before,
          .loader:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            margin: -8px 0 0 -8px;
            width: 16px;
            aspect-ratio: 1;
            background: ${colors.primary};
            animation:
              l1-1 2s  infinite,
              l1-2 .5s infinite;
          }
          .loader:after {
            background:${colors.gray[700]};
            animation-delay: -1s,0s;
          }
          @keyframes l1-1 {
            0%   {top:0   ;left:0}
            25%  {top:100%;left:0}
            50%  {top:100%;left:100%}
            75%  {top:0   ;left:100%}
            100% {top:0   ;left:0}
          }
          @keyframes l1-2 {
            80%,100% {transform: rotate(0.5turn)}
          }
                    `}
      </style>

      <div className={'loader'} />
    </div>
  );
};