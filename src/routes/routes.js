import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.children) {
      route.children = authMap(route.children);
    }

    return route;
  });

export default authMap(routes);
