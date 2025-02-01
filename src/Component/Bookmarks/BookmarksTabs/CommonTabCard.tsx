import { Card, CardBody, CardHeader, TabPane } from 'reactstrap';
import ViewBookmark from '../ViewBookmarks';
import { NoBookmarksFound } from '@/Constant';
import { CommonTabCardPropType } from '@/Type/SideBarType';

const CommonTabCard = ({ tabId, tittle }: CommonTabCardPropType) => {
  return (
    <TabPane tabId={tabId}>
      <Card className='mb-0'>
        <CardHeader className='d-flex'>
          <h6 className='mb-0'>{tittle}</h6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className='details-bookmark text-center'>
            <div className='no-favourite'>
              <span>{NoBookmarksFound}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default CommonTabCard;
