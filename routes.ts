/**
 * An array of routes that are accessible to the public.
 * These routes do not require autentication
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
  "/new-verification",
  "/api/roles-access",
  "/api/queues/access-url-fetch",
];

/**
 * An array of routes that are used for authentication.
 * These routes will rediect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/reset-password",
  "/new-password",
];

/**
 * The prefix for API authentication routes.
 * Routes that starts with this prefix are used for API autentication purposes.
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
