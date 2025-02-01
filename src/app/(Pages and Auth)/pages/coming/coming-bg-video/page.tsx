'use client';

import Image from 'next/image';
import { AssetVideoPath, WeAreComingSoon } from '@/Constant';
import { Container } from 'reactstrap';
import { AssetsImagePath } from '@/Constant';
import CountdownData from '@/Component/Pages/ComingSoon/CountdownData';

const ComingWithBgVideoContainer = () => {
  return (
    <Container fluid={true} className='p-0'>
      <div className='comingsoon auth-bg-video'>
        <video className='bgvideo-comingsoon' id='bgvid' poster={`${AssetsImagePath}/coming-soon-bg.jpg`} playsInline autoPlay muted loop>
          <source src={`${AssetVideoPath}/auth-bg.mp4`} type='video/mp4' />
        </video>
        <div className='comingsoon-inner text-center'>
          <Image width={80} height={111} src={`${AssetsImagePath}/logo/logo-1.png`} alt='comingSoon' />
          <h5>{WeAreComingSoon}</h5>
          <div className='countdown' id='clockdiv'>
            <CountdownData />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ComingWithBgVideoContainer;
