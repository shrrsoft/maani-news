import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing
  // {
  // localePrefix,
  // }
);

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/', '/(fa|en)/:path*']
};