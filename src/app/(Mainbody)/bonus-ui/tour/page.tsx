'use client';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { TourProvider, useTour } from '@reactour/tour';
import React, { useState } from 'react';
import TourComponents from '../../../../Component/bonus-ui/Tour/TourComponents';
import { stepsData } from '@/Data/BonusUiData/Tour';

const Tour = () => {
  return (
    <TourProvider steps={stepsData} disableInteraction={true} disableKeyboardNavigation={false}>
      <TourComponents />
    </TourProvider>
  );
};

export default Tour;
