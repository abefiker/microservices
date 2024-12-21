import { User } from './User';
import { Company } from './Company';

import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const customeMap = new CustomMap('maps');

console.log(user);
console.log(company);

customeMap.addMarker(user);
customeMap.addMarker(company);
