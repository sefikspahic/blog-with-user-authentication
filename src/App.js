import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import Layout from "./components/Layout/Layout";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import NewPost from "./components/post/NewPost";
import PostList from "./components/post/PostList";
import PostDetails from "./components/post/PostDetails";

function App() {

  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: `/post/:id`,
      element: <PostDetails />
    },
    {
      path: "/",
      element: <PostList />

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
      path: "*",
      element: (
        <PrivateRoute>
          <Login />
        </PrivateRoute>
      ),
    },
    {
      path: "/home",
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
    {
      path: "/create-post",
      element: (
        <PrivateRoute>
          <NewPost />
        </PrivateRoute>
      ),
    },
  

  ];
  let routing = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Layout>{routing}</Layout>
    </AuthProvider>
  );
}

export default App;
