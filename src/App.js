import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import Layout from "./components/Layout/Layout";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Layout>{routesElement}</Layout>
    </AuthProvider>
  );
}

export default App;
