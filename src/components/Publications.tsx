import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "Machine Learning Applications in Modern Research",
    conference: "International Conference on AI 2023",
    description: "An exploration of novel machine learning applications in contemporary research methodologies.",
    tags: ["Machine Learning", "AI", "Research Methods"],
  },
  {
    title: "The Future of Human-Computer Interaction",
    conference: "HCI Summit 2023",
    description: "A comprehensive study on emerging trends in human-computer interaction and their implications.",
    tags: ["HCI", "UX", "Technology"],
  },
  {
    title: "Data-Driven Decision Making in Academia",
    conference: "Data Science Conference 2022",
    description: "Analysis of how data-driven approaches are transforming academic research and decision-making processes.",
    tags: ["Data Science", "Academia", "Decision Making"],
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 bg-gradient-to-bl from-blue-500/10 via-orange-400/10 to-blue-500/10">
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
