'use client';

import { FunctionComponent, useEffect, useState } from 'react';

const SupportTicket = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const newClient = (await import('@/Component/SupportTicket')).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : '';
};

export default SupportTicket;
