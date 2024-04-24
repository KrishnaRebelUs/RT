import {
 IconLayoutDashboard,IconChartHistogram, IconClock ,IconGraph,IconReceipt2
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Excess Coop Billing',
    icon: IconChartHistogram,
    href: '/excess-coop-billing',
  },
  {
    id: uniqueId(),
    title: 'Shortage',
    icon: IconClock,
    href: '/shortage',
  },
  {
    id: uniqueId(),
    title: 'Financial Scorecard',
    icon:  IconGraph,
    href: '/financial-scorecard',
  },
  {
    id: uniqueId(),
    title: 'Price Claim',
    icon:  IconReceipt2,
    href: '/price-claim',
  },
 
 
];

export default Menuitems;
