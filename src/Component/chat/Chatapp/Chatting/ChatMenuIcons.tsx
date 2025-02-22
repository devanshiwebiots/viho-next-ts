import { Headphones, Paperclip, Search, Video, Menu } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { setToggleSideBar } from "@/Redux/Slices/ChatSlice";
import { RootState } from "@/Redux/ReduxStore";

const ChatMenuIcons = () => {
  const { toggleSideBar } = useSelector((state: RootState) => state.ChatReducer);

  const dispatch = useDispatch();
  return (
    <ListGroup className='list-inline float-start float-sm-end chat-menu-icons flex-row'>
      <ListGroupItem className='list-inline-item'>
        <Search />
      </ListGroupItem>
      <ListGroupItem className='list-inline-item'>
        <Paperclip />
      </ListGroupItem>
      <ListGroupItem className='list-inline-item'>
        <Headphones />
      </ListGroupItem>
      <ListGroupItem className='list-inline-item'>
        <Video />
      </ListGroupItem>
      <ListGroupItem
        className='list-inline-item toogle-bar'
        onClick={() => {
          dispatch(setToggleSideBar(!toggleSideBar));
        }}
      >
        <Menu />
      </ListGroupItem>
    </ListGroup>
  );
};

export default ChatMenuIcons;
