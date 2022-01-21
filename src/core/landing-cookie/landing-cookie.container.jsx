import { LandingCookieComponent } from './landing-cookie.component';
import { useEffect, useState } from 'react';

export function LandingCookieContainer() {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    localStorage.setItem('use-of-cookies', true);
    setOpen(false);
  };

  useEffect(() => {
    const useCookie = localStorage.getItem('use-of-cookies');
    setOpen(!useCookie);
  }, []);

  return <LandingCookieComponent isOpen={isOpen} handleClose={handleClose} />;
}
