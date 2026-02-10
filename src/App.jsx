import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import AchievementsPage from "./pages/AchievementsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
