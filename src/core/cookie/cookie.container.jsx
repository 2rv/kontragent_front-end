import { useEffect, useState } from 'react';
import { CookieComponent } from './cookie.component';

export function CookieContainer() {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    localStorage.setItem('use-of-cookies', true);
    setOpen(false);
  };

  useEffect(() => {
    const useCookie = localStorage.getItem('use-of-cookies');
    setOpen(!useCookie);
  }, []);

  return (
    <CookieComponent
      isOpen={isOpen}
      handleClose={handleClose}
      handleConfirm={handleConfirm}
    />
  );
}
