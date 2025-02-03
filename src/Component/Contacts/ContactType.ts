export interface createUserDataType {
  email: string;
  name: string;
  surname: string;
  mobile: string;
}

export interface ContactusersType {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  email: string;
  age: string;
  mobile: string;
}

interface ContactReducerDataType {
  users: [] | ContactusersType[];
  data: [];
}
export interface ContactReducerType {
  ContactReducer: ContactReducerDataType;
}

export interface userCallbackUser {
  id?: number | undefined;
  name?: string;
  surname?: string;
  age?: string;
  mobile?: string;
  avatar?: string;
}
export interface UserUpdateType {
  name: string;
  surname: string;
  email: string;
  mobile: string;
}

export interface propsType {
  users: any;
  userCallback: (user: userCallbackUser) => void;
}
export interface NavComponentpropsType {
  callbackActive: (val: string) => void;
}

export interface NavOrgpropType {
  callback: (tab: string) => void;
}
export interface ContactDetailsClassPropsType {
  selectedUser: userCallbackUser;
  userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
}

export interface PrintModalProps {
  printmodal: boolean;
  selectedUser: userCallbackUser;
  toggleCallback: (result: boolean) => void;
}

export interface PrintPreviewprops {
  selectedUser: userCallbackUser;
  ref:any;
}

export interface TabComponentPropType {
  activeTab: string;
  users: [] | ContactusersType[];
}

export interface UpdateUserPropType {
  editdata: any;
  userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
}
