import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "Superoptimization of WebAssembly bytecode",
    conference: "Companion Proceedings of the 4th International Conference on Art, Science, and Engineering of Programming",
    description: "We propose the first functional pipeline to support the superoptimization of WebAssembly bytecode.",
    tags: ["Web Assembly", "AI", "Research Methods"],
  },
  {
    title: "Support for Emulated 5G-System Bridge in a Time-Sensitive Bridged Network",
    conference: "KTH Master Thesis",
    description: "we implement a 5G system integration with TSN using a discrete event network simulator (NS-3)",
    tags: ["TSN", "5G", "Technology"],
  },
  {
    title: "Optimal Robot Localisation Techniques for Real World Scenarios",
    conference: "2018 Fourth International Conference on Computing Communication Control and Automation (ICCUBEA)",
    description: "The following paper is a thorough review of our research based on the localisation of robots.",
    tags: ["Robotics", "Academia", "Decision Making"],
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 bg-gradient-to-bl from-blue-600/20 via-orange-500/20 to-blue-600/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Publications
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{pub.title}</CardTitle>
                <p className="text-sm text-slate-500">{pub.conference}</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{pub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
