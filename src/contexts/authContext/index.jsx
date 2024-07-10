import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
const postContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus enim est, eget imperdiet elit rhoncus sit amet. Nulla consectetur, turpis a eleifend luctus, massa nibh aliquet lorem, maximus vestibulum tortor diam non quam. Vivamus tincidunt finibus orci, quis vulputate neque consequat vel. Aenean rhoncus, urna a varius tristique, ligula libero pharetra lorem, in tempor tellus tellus imperdiet leo. Curabitur ullamcorper interdum neque, non fringilla magna sagittis nec. Aenean consequat sollicitudin neque non blandit. Proin eget turpis augue. Aenean eleifend pellentesque dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eget diam est. onec quis elementum purus. Curabitur convallis consectetur libero vel sagittis. Donec lobortis diam non dui lobortis, vitae elementum nibh dapibus. Sed eu bibendum lacus, non egestas felis. Aenean vitae maximus sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae eleifend sem. Maecenas in fermentum leo. Donec tellus nibh, viverra nec metus sit amet, consectetur ultrices metus.Pellentesque dignissim vulputate aliquam. Aliquam tempor volutpat mi, vel dignissim leo aliquet ac. Curabitur aliquet vel massa sed pharetra. Phasellus ut nisl facilisis, euismod orci ut, egestas lectus. Duis ut lacinia nibh. Donec ex arcu, sagittis ac molestie nec, sollicitudin ornare nunc. Vivamus vel mi sed dolor mollis consequat. Curabitur a varius nisl. Ut at nisl metus. Curabitur convallis aliquet tellus et tristique. Proin et varius tellus. Quisque ultricies, sapien non aliquet pellentesque, metus felis semper diam, vitae vehicula sapien nulla vitae lacus. Donec consequat nunc ac elit interdum pellentesque. Vivamus odio ante, fringilla imperdiet porta sed, sodales sed augue. Quisque luctus justo sed arcu ultrices finibus. Nunc sit amet nunc augue. Suspendisse potenti. Aliquam justo sem, dapibus sit amet fringilla ut, mattis eget lectus. Sed eleifend lorem pretium lorem consequat aliquam. Morbi metus justo, finibus efficitur justo sed, volutpat pretium lorem. Quisque aliquam sem sit amet faucibus ornare. Etiam vehicula, sapien eget ullamcorper malesuada, dolor nulla feugiat elit, id blandit lorem felis id mauris. Donec egestas, nisi ut euismod rhoncus, ipsum magna eleifend risus, sit amet commodo lacus orci eget lacus. Curabitur vestibulum malesuada dictum. In semper dui at vulputate tristique. Donec augue elit, varius ac urna non, lobortis pretium erat. Maecenas feugiat ornare justo id commodo. Suspendisse potenti. Fusce augue urna, euismod sit amet molestie nec, dignissim ac nunc. "
const initialPosts = [
  { id: 0, title: 'First Post', content: postContent, day: '09', month: 'January' },
  { id: 1, title: 'Second Post', content: postContent, day: '09', month: 'February' },
  { id: 2, title: 'Third Post', content: postContent, day: '03', month: 'March' },
  { id: 3, title: 'Fourth Post', content: postContent, day: '04', month: 'April' },
];


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);
  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });

      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);

      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    } else {
      setPosts(initialPosts);
      localStorage.setItem('posts', JSON.stringify(initialPosts));
    }
  }, []);


  const addPost = (post) => {
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 0;
    const updatedPosts = [...posts, { ...post, id: newId }];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };
  const value = {
    userLoggedIn,
    isEmailUser,
    currentUser,
    setCurrentUser,
    addPost,
    posts,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
