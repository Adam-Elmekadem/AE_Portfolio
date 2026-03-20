export const APP_ROUTES = {
  SUMMARY: "/",
  HOME: "/home",
  ABOUT: "/about",
  WORK: "/work",
  WORK_CASE_STUDY: "/work/:projectId",
  CASE_BRANDING: "/case/branding",
  CASE_WEB_DEV: "/case/web-development",
  CASE_STORY: "/case/story",
  CASE_BEATMAKING: "/case/beatmaking",
  BLOGS: "/blogs",
  CONTACT: "/contact",
  RESOURCES: "/resources",
  RESOURCE_DETAIL: "/resources/:resourceId",
};

export const PRIMARY_NAV_LINKS = [
  { label: "Home", path: APP_ROUTES.HOME },
  { label: "Work", path: APP_ROUTES.WORK },
  { label: "Resources", path: APP_ROUTES.RESOURCES },
  { label: "About Me", path: APP_ROUTES.ABOUT },
  { label: "Blogs", path: APP_ROUTES.BLOGS },
  { label: "Contact", path: APP_ROUTES.CONTACT },
];
