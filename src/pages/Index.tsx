import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import Blog from "@/components/Blog";
import Photography from "@/components/Photography";
import Books from "@/components/Books";
import CV from "@/components/CV";
import Music from "@/components/Music"; // Import the Music component
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Publications />
        <CV />
        <Music /> {/* Include the Music component here */}
        <Blog />
        <Photography />
        <Books />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
