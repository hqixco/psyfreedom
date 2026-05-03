import { useState } from 'react';
import { authInitialValues } from '../../data/authData';

export function useAuthState() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authPhone, setAuthPhone] = useState(authInitialValues.phone);
  const [authConsent, setAuthConsent] = useState(authInitialValues.consent);
  const [registerName, setRegisterName] = useState(authInitialValues.name);
  const [registerPhone, setRegisterPhone] = useState(authInitialValues.phone);
  const [registerPassword, setRegisterPassword] = useState(authInitialValues.password);
  const [registerRepeatPassword, setRegisterRepeatPassword] = useState(authInitialValues.repeatPassword);
  const [registerConsent, setRegisterConsent] = useState(authInitialValues.consent);
  const [authFlowSource, setAuthFlowSource] = useState<'login' | 'register'>('login');

  return {
    isAuthorized,
    setIsAuthorized,
    authPhone,
    setAuthPhone,
    authConsent,
    setAuthConsent,
    registerName,
    setRegisterName,
    registerPhone,
    setRegisterPhone,
    registerPassword,
    setRegisterPassword,
    registerRepeatPassword,
    setRegisterRepeatPassword,
    registerConsent,
    setRegisterConsent,
    authFlowSource,
    setAuthFlowSource,
  };
}
