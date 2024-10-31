import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Discovering France's Hidden River Gems - Nice",
    date: "August 8, 2024",
    excerpt: "Uncover the beauty of France's river scenes in Nice, a journey through breathtaking waterways...",
    imageUrl: "https://drive.google.com/file/d/1C2wdhGkxfnFonLEMgxFjwebvoaeGBrUO/view?usp=sharing",
    link: "https://reachingnewplaces.wordpress.com/2024/08/08/discovering-frances-hidden-river-gems-nice/",
  },
  {
    title: "Croatia: A Gem on the Mediterranean Sea 🌊✨",
    date: "July 18, 2024",
    excerpt: "Exploring Croatia's stunning coastal towns, vibrant culture, and azure waters...",
    imageUrl: "https://drive.google.com/file/d/16cMEJm-69WoQHmw6VnbTCu1OiBAafz8I/view?usp=sharing",
    link: "https://reachingnewplaces.wordpress.com/2024/07/18/%f0%9f%87%ad%f0%9f%87%b7-croatia-a-gem-on-the-mediterranean-sea-%f0%9f%8c%8a%e2%9c%a8/",
  },
  {
    title: "Norway: The Land of Fjords 🇳🇴",
    date: "July 17, 2023",
    excerpt: "Venturing through Norway on a budget, with majestic fjords and awe-inspiring landscapes...",
    imageUrl: "https://drive.google.com/file/d/1UuK0O2pQkPGQoIazBLFbIENLO7alN0-6/view?usp=sharing",
    link: "https://reachingnewplaces.wordpress.com/2023/07/17/norway-%f0%9f%87%b3%f0%9f%87%b4-the-land-of-fjords/",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-gradient-to-tr from-orange-500/20 via-blue-600/20 to-orange-500/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Latest Travel Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </a>
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
        <div className="text-center mt-8">
          <a
            href="https://reachingnewplaces.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            For more travel posts, click here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
