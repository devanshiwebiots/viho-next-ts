export interface bookMarkType {
  id: number;
  fillstar: boolean;
  image: string;
  title: string;
  website_url: string;
  desc: string;
  collection: string;
}
export interface BookMarkReducerType {
  gridView?: boolean;
  bookmark: [] | bookMarkType[];
  activeTabss: string;
  mybookmarkData: [] | bookMarkType[];
  editRow: bookMarkType;
  editModal: boolean;
  editimgurl: string;
  bookMarkClass: boolean;
  IsOpen: boolean;
}
