import {
 IconLayoutDashboard,IconChartHistogram, IconClock ,IconGraph,IconReceipt2,IconFileDollar,IconRecharging
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
    title: 'Shortage Claim',
    icon: IconClock,
    href: '/shortage-claim',
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
  {
    id: uniqueId(),
    title: 'Missed Invoicing',
    icon: IconFileDollar,
    href: '/missed-invoicing',
  },
  {
    id: uniqueId(),
    title: 'Ops Chargeback',
    icon: IconRecharging,
    href: '/ops-chargeback',
  },
 
 
];

export default Menuitems;
