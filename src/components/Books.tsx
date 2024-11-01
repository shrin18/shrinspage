import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

const books = [
  {
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "Héctor García and Francesc Miralles",
    rating: 4,
    review: "A beautiful guide to finding purpose and meaning in life, inspired by Japanese culture.",
    link: "https://www.amazon.com/Ikigai-Japanese-Secret-Long-Happy/dp/0143130722"
  },
  {
    title: "Hit Refresh: The Quest to Rediscover Microsoft's Soul",
    author: "Satya Nadella",
    rating: 4,
    review: "An inspiring account of how Satya Nadella transformed Microsoft's culture and brought new energy to the company.",
    link: "https://www.amazon.com/Hit-Refresh-Rediscover-Microsofts-Empathy/dp/0062652508"
  },
  {
    title: "Wings of Fire: An Autobiography",
    author: "A.P.J. Abdul Kalam",
    rating: 5,
    review: "The inspiring journey of India's 'Missile Man' from humble beginnings to becoming a national hero.",
    link: "https://www.amazon.com/Wings-Fire-Autobiography-Abdul-Kalam/dp/8173711461"
  },
];

const Books = () => {
  return (
    <section id="books" className="py-16 bg-gradient-to-br from-orange-500/20 via-blue-600/20 to-orange-500/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Reading List
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {book.title}
                  </a>
                </CardTitle>
                <p className="text-sm text-slate-500">by {book.author}</p>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(book.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600">{book.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
