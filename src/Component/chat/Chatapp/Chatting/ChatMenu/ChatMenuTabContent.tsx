import { TabContent, TabPane } from 'reactstrap';
import PeopleList from './PeopleList';
import PeopleStatus from './PeopleStatus';
import UserProfile from './UserProfile';
import { ChatMenuTabContentType, propsType } from '@/Type/SideBarType';

const ChatMenuTabContent = ({ activeTab }: ChatMenuTabContentType) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <PeopleList />
      </TabPane>
      <TabPane tabId={2}>
        <PeopleStatus />
      </TabPane>
      <TabPane tabId={3}>
        <UserProfile />
      </TabPane>
    </TabContent>
  );
};

export default ChatMenuTabContent;
