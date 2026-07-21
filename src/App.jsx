import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import { ThemeProvider } from "./context/ThemeContext";

const Resume = lazy(() => import("./Components/Resume"));

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-transparent text-slate-900 antialiased transition-colors duration-300 dark:text-slate-100">
        <ScrollProgress />
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.26),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.2),_transparent_24%),linear-gradient(135deg,_rgba(255,255,255,0.96),_rgba(248,250,252,0.88))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_24%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,0.95))]" />
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tech" element={<Technologies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/resume"
                element={
                  <Suspense fallback={<div className="py-24 text-center text-sm">Loading resume...</div>}>
                    <Resume />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
