import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutLoader } from "./components/layout/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const Group = lazy(() => import("./pages/Group"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Show loader for 1 second and then set isLoading to false
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Suspense will show LayoutLoader when the components are lazy loading */}
      <Suspense fallback={isLoading ? <LayoutLoader /> : null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Group />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
