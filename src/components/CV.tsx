import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <section id="cv" className="py-16 bg-gradient-to-bl from-blue-600/20 via-orange-500/20 to-blue-600/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          My CV
        </h2>
        <p className="text-lg text-slate-600 mb-4">
          Click the button below to view my complete CV.
        </p>
        <Button variant="outline" size="lg" className="hover:bg-blue-600 hover:text-white">
          <a href="path_to_your_full_cv.pdf" target="_blank" rel="noopener noreferrer">
            Click Here for CV
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CV;
