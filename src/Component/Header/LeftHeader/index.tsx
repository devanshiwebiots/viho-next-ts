import { AssetsImagePath, Javascript } from '@/Constant';
import { RootState, useAppDispatch } from '@/Redux/ReduxStore';
import { ToggleSideBarIn } from '@/Redux/Slices/HeaderSlice';
import Image from 'next/image';
import { AlignCenter } from 'react-feather';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const LeftHeader = () => {
  const {logoToggle} = useSelector((state:RootState)=>state.headerSlice)
  
  const dispatch = useAppDispatch();
  const toggleSidebar = () => {
    dispatch(ToggleSideBarIn());
  };
  
  return (
    <div className='main-header-left'>
      <div className={`${logoToggle ? "dark-logo-wrapper" : "logo-wrapper"}`}>
        <a href={Javascript}>
          <Image alt='logo Image' width={83} height={29} className='img-fluid' src={`${AssetsImagePath}/logo/${logoToggle ? "dark-logo.png" : "logo.png"}`} />
        </a>
      </div>
      <div className='toggle-sidebar' onClick={toggleSidebar}>
        <AlignCenter />
      </div>
    </div>
  );
};

export default LeftHeader;
