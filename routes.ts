/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/searchbar",
  "/api/uploadthing",
  "/api/webhook",
  "/portfolio",
  "/blog",
  "/courses",
  "/courses/[courseId]",
  "/about",
  "/dashboard",
  "http://localhost:3000/",
  "/api/search",
  "/api/search/mock",
  "/api/db-check",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Admin-specific routes that should only be accessible to admin users
 * @type {string[]}
 */
export const adminRoutes: string[] = [
  "/dashboard/admin",
  "/admin",
  "/admin/dashboard",
];

/**
 * Returns the default redirect path after logging in based on user role
 * @param role - The user's role (ADMIN or USER)
 * @returns {string} The redirect path
 */
const getDefaultRedirect = (role?: string): string => {
  if (role === "ADMIN") return "/dashboard/admin";
  return "/dashboard/user";
};

/**
 * The default redirect path after logging in
 * Now using the getDefaultRedirect function
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard/user";

/**
 * Get redirect URL based on role
 * @param role - The user's role
 */
export const getRedirectUrl = (role?: string) => {
  return getDefaultRedirect(role);
};