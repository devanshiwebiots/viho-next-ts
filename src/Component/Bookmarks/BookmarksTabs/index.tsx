import { TabContent } from 'reactstrap';
import { useSelector } from 'react-redux';
import DataLoopTab from './DataLoopTab';
import FavDataTab from './FavDataTab';
import EditBookmarkModal from '../EditBookmark';
import MyBookmarkTab from './MyBookmarkTab';
import CommonTabCard from './CommonTabCard';
import { Newsletter, Notification, SharedWithMe } from '@/Constant';
import { RootState } from '@/Redux/ReduxStore';

const BookmarksTabs = () => {
  const { activeTabss } = useSelector((state: RootState) => state.BookMarkSlice);

  return (
    <TabContent activeTab={activeTabss}>
      <DataLoopTab />
      <FavDataTab />
      <CommonTabCard tabId='3' tittle={SharedWithMe} />
      <MyBookmarkTab />
      <CommonTabCard tabId='5' tittle={Notification} />
      <CommonTabCard tabId='6' tittle={Newsletter} />
      <EditBookmarkModal />
    </TabContent>
  );
};
export default BookmarksTabs;
