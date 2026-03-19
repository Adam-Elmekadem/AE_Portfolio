export const APP_ROUTES = {
  SUMMARY: "/",
  HOME: "/home",
  ABOUT: "/about",
  WORK: "/work",
  WORK_CASE_STUDY: "/work/:projectId",
  BLOGS: "/blogs",
  CONTACT: "/contact",
};

export const PRIMARY_NAV_LINKS = [
  { label: "Home", path: APP_ROUTES.HOME },
  { label: "Work", path: APP_ROUTES.WORK },
  { label: "About Me", path: APP_ROUTES.ABOUT },
  { label: "Blogs", path: APP_ROUTES.BLOGS },
  { label: "Contact", path: APP_ROUTES.CONTACT },
];
