import { getAccessUrlByRole } from "@/data/access-url-role";

export default function doesRoleHaveAccessToURL(
  role: string | undefined,
  url: string
) {
  // const accessibleRoutes = roleAccessMap[role] || [];
  const accessibleRoutes = getAccessUrlByRole(role);

  return accessibleRoutes?.some((route) => {
    // Create a regex from the route by replacing dynamic segments
    const regexPattern = route.url
      ?.replace(/\[.*?\]/g, "[^/]+")
      .replace("/", "\\/");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(url);
  });
}
