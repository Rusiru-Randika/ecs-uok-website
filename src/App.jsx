import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import AboutECS from "./components/AboutECSSection";

import LeadershipSection from "./components/LeadershipSection";

//import AchievementPage from "./pages/AchievementPage";
import DidYouKnow from "./pages/DidYouKnow";
//import RobotBattlePage from "./pages/RobotBattlePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="/about/about-ecsc" element={<AboutECS />} />

          <Route
            path="/about/executive-committee"
            element={<LeadershipSection />}
          />
        </Route>

        <Route path="/did-you-know" element={<DidYouKnow />} />
        {/* <Route path="/achievement" element={<AchievementPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
