import React, { Fragment, useContext, useEffect } from 'react';
import { Star } from 'react-feather';
import { Input, Label, Media } from 'reactstrap';
import { fetchAllEmail } from '@/Redux/Slices/EmailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';
import { emailType } from '@/Type/SideBarType';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const InboxClass = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { allEmail } = useSelector((store: RootState) => store.EmailSlice);
  useEffect(() => {
    dispatch(fetchAllEmail());
  }, []);
  return (
    <Fragment>
      <div className='inbox'>
        {allEmail &&
          allEmail.map((item: emailType) => {
            return (
              <Media key={item.id}>
                <div className='media-size-email'>
                  <Label className='d-block mb-0' htmlFor='chk-ani'>
                    <Input className='checkbox_animated' id='chk-ani' type='checkbox' />
                  </Label>
                  <Star className='like' />
                  <Image height={20} width={20} className='me-3 rounded-circle' src={`${AssetsImagePath}/${item.image}`} alt='' unoptimized/>
                </div>
                <Link href={`/email/readmail`}>
                  <Media
                    body
                    onClick={() => {
                      router.push(`/email/readmail`);
                    }}>
                    <h6>{item.name}</h6>
                    <p>{item.text}</p>
                    <span>{item.time}</span>
                  </Media>
                </Link>
              </Media>
            );
          })}
      </div>
    </Fragment>
  );
};

export default InboxClass;
