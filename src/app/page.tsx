import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeeklyActivities from "@/components/WeeklyActivities";
import Vision2032 from "@/components/Vision2032";
import Sermons from "@/components/Sermons";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero backgroundImage="/hero.png" />
      <WeeklyActivities />
      <Vision2032 graphicImage="/vision.png" />
      <Sermons />
      <LocationContact />
      <Footer />
    </main>
  );
}
