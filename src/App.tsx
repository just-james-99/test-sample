import Header from "./components/layout/Header";
import HeroBanner from "./components/HeroBanner";
import AdventureSection from "./components/AdventureSection";
import ActivitiesCalendar from "./components/ActivitiesCalendar";
import ActivitiesMap from "./components/ActivitiesMap";
import Experiences from "./components/Experiences";
import SocialMedia from "./components/SocialMedia";
import Explore from "./components/Explore";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <HeroBanner />
        <AdventureSection />
        <ActivitiesMap />
        <ActivitiesCalendar />
        <Experiences />
        <SocialMedia />
        <Explore />
        <Footer />
      </main>
    </div>
  );
}
export default App;
