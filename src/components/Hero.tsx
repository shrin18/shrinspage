import { Mail, Github, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-orange-500/20 via-blue-600/20 to-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fadeIn">
            Shrinish Donde
          </h1>
          <p className="text-xl text-slate-600 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            6G Researcher at Fraunhofer Institute. Ex-Developer at Ericsson. KTH Royal Institute of Technology.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Button variant="outline" size="lg" className="space-x-2 bg-white/80 hover:bg-white">
              <Mail size={20} />
              <span>Contact</span>
            </Button>
            <Button variant="outline" size="lg" className="space-x-2 bg-white/80 hover:bg-white">
              <Github size={20} />
              <span>GitHub</span>
            </Button>
            <Button variant="outline" size="lg" className="space-x-2 bg-white/80 hover:bg-white">
              <Twitter size={20} />
              <span>Twitter</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;