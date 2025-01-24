import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { localePrefix, locales } from './navigation';

export default createMiddleware(routing
  // {
  // locales,
  // localePrefix,
  // defaultLocale: 'fa',
  // localeDetection: false
  // }
);

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/', '/(fa|en)/:path*']
};