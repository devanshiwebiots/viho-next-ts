import { AssetsImagePath, Business, Extra, Premium, Standard } from '@/Constant';
import { productColumnsTypes, productListDataTypes } from '@/Type/SideBarType';
import Image from 'next/image';
import { Button } from 'reactstrap';

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const productData = [
  {
    image: <Image src={`${AssetsImagePath}/ecommerce/product-table-1.png`} height={40} width={40} style={style} alt='' unoptimized/>,
    Details: (
      <div>
        <h6>Red Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: (
      <div>
        <span>
          <Button color='danger' style={style2} className='btn-xs' type='button'>
            Delete
          </Button>
        </span>{' '}
        &nbsp;&nbsp;
        <span>
          <Button color='success' style={style2} className='btn-xs' type='button'>
            Edit{' '}
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image height={40} width={40} src={`${AssetsImagePath}/ecommerce/product-table-2.png`} style={style} alt='' unoptimized/>,
    Details: (
      <div>
        <h6>Brown Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2011/4/19',
    action: (
      <div>
        <span>
          <Button color='danger' style={style2} className='btn-xs' type='button'>
            Delete
          </Button>
        </span>{' '}
        &nbsp;&nbsp;
        <span>
          <Button color='success' style={style2} className='btn-xs' type='button'>
            Edit{' '}
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image height={40} width={40} src={`${AssetsImagePath}/ecommerce/product-table-3.png`} style={style} alt='' unoptimized/>,
    Details: (
      <div>
        <h6>Yellow Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2011/4/19',
    action: (
      <div>
        <span>
          <Button color='danger' style={style2} className='btn-xs' type='button'>
            Delete
          </Button>
        </span>{' '}
        &nbsp;&nbsp;
        <span>
          <Button color='success' style={style2} className='btn-xs' type='button'>
            Edit{' '}
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image height={40} width={40} src={`${AssetsImagePath}/ecommerce/product-table-4.png`} style={style} alt='' unoptimized/>,
    Details: (
      <div>
        <h6>Green Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: '$20',
    stock: <div className='font-primary'>Low Stock</div>,
    start_date: '2011/4/19',
    action: (
      <div>
        <span>
          <Button color='danger' style={style2} className='btn-xs' type='button'>
            Delete
          </Button>
        </span>{' '}
        &nbsp;&nbsp;
        <span>
          <Button color='success' style={style2} className='btn-xs' type='button'>
            Edit{' '}
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image height={40} width={40} src={`${AssetsImagePath}/ecommerce/product-table-5.png`} style={style} alt='' unoptimized/>,
    Details: (
      <div>
        <h6>Pink Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: '$30',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: (
      <div>
        <span>
          <Button color='danger' style={style2} className='btn-xs' type='button'>
            Delete
          </Button>
        </span>{' '}
        &nbsp;&nbsp;
        <span>
          <Button color='success' style={style2} className='btn-xs' type='button'>
            Edit{' '}
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image height={40} width={40} src={`${AssetsImagePath}/ecommerce/product-table-6.png`} style={style} alt='' unoptimized/>,
    Details: (
      <div>
        <h6>Blue Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: '$40',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: (
      <div>
        <span>
          <Button color='danger' style={style2} className='btn-xs' type='button'>
            Delete
          </Button>
        </span>{' '}
        &nbsp;&nbsp;
        <span>
          <Button color='success' style={style2} className='btn-xs' type='button'>
            Edit{' '}
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image height={40} width={40} src={`${AssetsImagePath}/ecommerce/product-table-2.png`} style={style} alt='' unoptimized/>,
    Details: (
      <div>
        <h6>Grey Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: (
      <div>
        <span>
          <Button st color='danger' yle={style2} className='btn btn-xs' type='button'>
            Delete
          </Button>
        </span>{' '}
        &nbsp;&nbsp;
        <span>
          <Button sty color='success' le={style2} className='btn btn-xs' type='button'>
            Edit{' '}
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image height={40} width={40} src={`${AssetsImagePath}/ecommerce/product-table-3.png`} style={style} alt='' unoptimized/>,
    Details: (
      <div>
        <h6>Black Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2011/4/19',
    action: (
      <div>
        <span>
          <Button st color='danger' yle={style2} className='btn btn-xs' type='button'>
            Delete
          </Button>
        </span>{' '}
        &nbsp;&nbsp;
        <span>
          <Button sty color='success' le={style2} className='btn btn-xs' type='button'>
            Edit{' '}
          </Button>
        </span>
      </div>
    ),
  },
];
export const productColumns = [
  {
    name: 'Image',
    selector: (row: any) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: 'Details',
    selector: (row: any) => row.Details,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: 'Amount',
    selector: (row: any) => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: 'Stock',
    selector: (row: any) => row.stock,
    sortable: true,
    center: true,
  },
  {
    name: 'Start_date',
    selector: (row: any) => row.start_date,
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    selector: (row: any) => row.action,
    sortable: true,
    center: true,
  },
];

export const StandardPricingCardData = [
  {
    name: Standard,
    price: '$15',
  },
  {
    name: Business,
    price: '$25',
  },
  {
    name: Premium,
    price: '$35',
  },
  {
    name: Extra,
    price: '$45',
  },
];

export const StandardsData = [
  {
    name: Standard,
    price: '$10',
    offers: [['50GB,"Disk Space'], ['50', 'Email Accounts'], ['50GB', 'Bandwidth'], ['10', 'Subdomains'], ['15', 'Domains']],
  },
  {
    name: Business,
    price: '$20',
    offers: [['60GB,"Disk Space'], ['60', 'Email Accounts'], ['60GB', 'Bandwidth'], ['10', 'Subdomains'], ['20', 'Domains']],
  },
  {
    name: Premium,
    price: '$30',
    offers: [['70GB,"Disk Space'], ['70', 'Email Accounts'], ['70GB', 'Bandwidth'], ['10', 'Subdomains'], ['30', 'Domains']],
  },
  {
    name: Extra,
    price: '$10',
    offers: [['50GB,"Disk Space'], ['50', 'Email Accounts'], ['50GB', 'Bandwidth'], ['10', 'Subdomains'], ['15', 'Domains']],
  },
];
