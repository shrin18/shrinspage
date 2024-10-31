import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

const books = [
  {
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    rating: 5,
    review: "A fundamental text that changed how we think about scientific progress.",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    rating: 5,
    review: "Brilliant insights into how we make decisions and process information.",
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    rating: 4,
    review: "Essential reading for understanding human-centered design.",
  },
];

const Books = () => {
  return (
    <section id="books" className="py-16 bg-gradient-to-br from-orange-400/10 via-blue-500/10 to-orange-400/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Reading List
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{book.title}</CardTitle>
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
