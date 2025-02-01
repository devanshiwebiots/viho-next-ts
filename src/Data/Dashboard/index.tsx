import { ArrowSvgIcon, BagSvgIcon, LightSvgIcon, ScreenSvgIcon, SubmitSvgIcon } from '@/Component/svgicons';
import { AssetsImagePath } from '@/Constant';
import React from 'react';
// import { ArrowSvgIcon, BagSvgIcon, ScreenSvgIcon, LightSvgIcon, SubmitSvgIcon } from '../SvgIcons';

export const DealerBox = [
  {
    id: 1,
    img: `${AssetsImagePath}/dashboard-2/1.png`,
    name: 'Thompson lee',
    place: 'Malasiya',
  },
  {
    id: 2,
    img: `${AssetsImagePath}/dashboard-2/8.png`,
    name: 'Johnson allon',
    place: 'Bangladesh',
  },
  {
    id: 3,
    img: `${AssetsImagePath}/dashboard-2/3.png`,
    name: 'williams reed',
    place: 'Belgium',
  },
  {
    id: 4,
    img: `${AssetsImagePath}/dashboard-2/4.png`,
    name: 'Jones king',
    place: 'Canada',
  },
  {
    id: 5,
    img: `${AssetsImagePath}/dashboard-2/5.png`,
    name: 'Brown davis',
    place: 'China',
  },
  {
    id: 6,
    img: `${AssetsImagePath}/dashboard-2/6.png`,
    name: 'Wilson Hill',
    place: 'Denmark',
  },
  {
    id: 7,
    img: `${AssetsImagePath}/dashboard-2/7.png`,
    name: 'Anderson ban',
    place: 'Japan',
  },
  {
    id: 8,
    img: `${AssetsImagePath}/dashboard-2/8.png`,
    name: 'Thompson lee',
    place: 'Malasiya',
  },
  {
    id: 9,
    img: `${AssetsImagePath}/dashboard-2/8.png`,
    name: 'Thompson lee',
    place: 'Malasiya',
  },
  {
    id: 10,
    img: `${AssetsImagePath}/dashboard-2/8.png`,
    name: 'Thompson lee',
    place: 'Malasiya',
  },
];

export const RecentOrders = [
  {
    id: 1,
    img: `${AssetsImagePath}/dashboard/product-1.png`,
    name: 'Yellow New Nike shoes',
    date: '16 August',
    quantity: '54146',
    value: '/dashboard/graph-1.png',
    rate: '$210326',
    status: 'Done',
  },
  {
    id: 2,
    img: `${AssetsImagePath}/dashboard/product-2.png`,
    name: 'Sony Brand New Headphone',
    date: '2 October',
    quantity: '32015',
    value: '/dashboard/graph-2.png',
    rate: '$548526',
    status: 'Done',
  },
  {
    id: 3,
    img: `${AssetsImagePath}/dashboard/product-3.png`,
    name: 'Beautiful Golden Tree plant',
    date: '21 March',
    quantity: '12548',
    value: '/dashboard/graph-3.png',
    rate: '$589565',
    status: 'Done',
  },
  {
    id: 4,
    img: `${AssetsImagePath}/dashboard/product-4.png`,
    name: 'Marco M Kely Handbeg',
    date: '31 December',
    quantity: '15495',
    value: '/dashboard/graph-4.png',
    rate: '$125424',
    status: 'Done',
  },
  {
    id: 5,
    img: `${AssetsImagePath}/dashboard/product-5.png`,
    name: 'Being Human Branded T-Shirt',
    date: '26 January',
    quantity: '56625',
    value: '/dashboard/graph-5.png',
    rate: '$112103',
    status: 'Done',
  },
];

export const LatestActivity = [
  {
    id: 1,
    icon: <ArrowSvgIcon />,
    name: 'Google project Apply Review',
    subtitle: 'Complete in 3 Hours',
  },
  {
    id: 2,
    icon: <BagSvgIcon />,
    name: 'Business Logo Create',
    subtitle: 'Complete in 2 Days',
  },
  {
    id: 3,
    icon: <LightSvgIcon />,
    name: 'Business Project Research',
    subtitle: 'Due in 1 hour',
  },
  {
    id: 4,
    icon: <ScreenSvgIcon />,
    name: 'Recruitment in IT Depertment',
    subtitle: 'Complete in 3 Hours',
  },
  {
    id: 5,
    icon: <SubmitSvgIcon />,
    name: 'Submit Riverfront Project',
    subtitle: 'Complete in 2 Days',
  },
];

export const settings = {
  dots: true,
  infinite: true,
  centerMode: false,
  speed: 100,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: true,
  centerPadding: '10px',
  responsive: [
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
