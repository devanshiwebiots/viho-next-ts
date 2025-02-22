import React, { Fragment } from 'react';
import SidebarType from './SidebarType';
import LayoutType from './LayoutType';

const SidebarCustomizer = () => {
  return (
    <Fragment>
      <LayoutType />
      <SidebarType />
    </Fragment>
  );
};

export default SidebarCustomizer;
