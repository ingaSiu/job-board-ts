import { JobType } from '../types/job';

export const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

export const hidePassword = (password: string) => {
  return '*'.repeat(password.length);
};

export const addHyphen = (str: JobType): string => {
  return str?.replace(/([a-z])([A-Z])/g, '$1-$2');
};

