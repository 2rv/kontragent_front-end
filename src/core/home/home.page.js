import { useEffect } from 'react';

import { redirect } from '../../main/navigation';

export function HomePage() {
  useEffect(() => {
    setTimeout(() => {
      redirect('/error');
    }, 5000);
  });

  return 'Hello world';
}
