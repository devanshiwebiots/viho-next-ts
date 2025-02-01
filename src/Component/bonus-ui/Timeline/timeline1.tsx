import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';
import { Activity, Edit, PlayCircle, Video } from 'react-feather';

const TimelineMain = () => {
  return (
    <VerticalTimeline animate>

      <VerticalTimelineElement date='Jan 14' iconClassName='bg-primary cd-timeline-img' icon={<Edit />}>
        <h4 className='vertical-timeline-element-subtitle'>Title of section 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement date='Jan 18' iconClassName='bg-secondary cd-timeline-img' icon={<Video />}>
        <h4 className='vertical-timeline-element-subtitle'>Title of section 2</h4>
        <div className='ratio ratio-21x9 m-t-20'>
          <iframe src='https://www.youtube.com/embed/wpmHZspl4EM' allowFullScreen title='myFrame'></iframe>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement date='Jan 24' iconClassName='bg-success cd-timeline-img' icon={<PlayCircle />}>
        <h4 className='vertical-timeline-element-subtitle'>Title of section 3</h4>
        <Image className='img-fluid p-t-20' src={`${AssetsImagePath}/banner/1.jpg`} alt='timelineImg1' width={472} height={333} />
      </VerticalTimelineElement>

      <VerticalTimelineElement date='Feb 14' iconClassName='bg-info cd-timeline-img' icon={<Activity />}>
        <h4 className='vertical-timeline-element-subtitle'>Title of section 4</h4>
        <audio controls preload='none'>
          <source src={'./public/assets/audio/horse.ogg'} type='audio/ogg' />
          {'Your browser does not support the audio element.'}
        </audio>
      </VerticalTimelineElement>

      <VerticalTimelineElement date='Feb 18' iconClassName='bg-warning cd-timeline-img' icon={<PlayCircle />}>
        <h4 className='vertical-timeline-element-subtitle'>Title of section 5</h4>
        <Image className='img-fluid p-t-20' src={`${AssetsImagePath}/banner/3.jpg`} width={472} height={333} alt='timelineImg2' />
      </VerticalTimelineElement>

      <VerticalTimelineElement date='Feb 26' iconClassName='bg-danger cd-timeline-img' icon={<Edit />}>
        <h4 className='vertical-timeline-element-subtitle'>Final Section</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum providentrerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minusveritatis qui ut.</p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
};
export default TimelineMain;
