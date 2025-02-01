import { Javascript } from '@/Constant';
import { NavsExampleDatas } from '@/Data/UiKitsData/Navs/DropDownExample';
import { Button } from 'reactstrap';

const DropdownExample = () => {
  return (
    <div className='onhover-dropdown navs-dropdown'>
      <Button color='primary' className='onhover-dropdown'>
        Dropdown example <i className='icon-arrow-down'></i>
      </Button>
      <div className='onhover-show-div'>
        <ul className='icon-lists navs-icon'>
          {NavsExampleDatas.map((data, index) => (
            <li className={data.className} key={index}>
              {data.Heading && <h5 className='mb-0'>{data.Heading}</h5>}
              {data.Tittle && (
                <a href={Javascript}>
                  {data.icon}
                  <span> {data.Tittle}</span>
                </a>
              )}
              {data.button && (
                <Button color='default' className=' btn-pill btn-outline-primary'>
                  Log Out
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownExample;
