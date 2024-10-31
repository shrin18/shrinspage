import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "The Evolution of Research Methodologies",
    date: "March 15, 2024",
    excerpt: "Exploring how research methods have adapted to modern technological advances...",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Breaking Down Complex Topics",
    date: "March 10, 2024",
    excerpt: "Techniques for making complicated research accessible to broader audiences...",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "The Future of Academic Publishing",
    date: "March 5, 2024",
    excerpt: "How digital platforms are transforming the way we share research...",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-gradient-to-tr from-orange-500/20 via-blue-600/20 to-orange-500/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Latest Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <p className="text-sm text-slate-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
