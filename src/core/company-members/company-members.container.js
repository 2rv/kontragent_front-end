import { CompanyMembersComponent } from './company-members.component';

export function CompanyMembersContainer() {
  return <CompanyMembersComponent memberItem={memberItem} />;
}
const memberItem = [
  {
    avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
  {
    avatar:
      'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    name: 'Иван Иванов',
    role: 'Менеджер',
    inTheCompany: 'С марта 2020',
  },
];
