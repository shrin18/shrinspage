import { Mail, Github, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const { toast } = useToast();

  // Google Form URL for submissions
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScRUcoy2vnIgMGL2xOMqWM1pgJoy_HTSi9WzUTo_9eAjIj8kw/viewform';

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a FormData object from the form fields
    const formData = new FormData(event.currentTarget);
    
    // Append additional fields if necessary
    formData.append('entry.XXXXXX', formData.get('name') as string); // Replace 'entry.XXXXXX' with the correct entry ID for your name field
    formData.append('entry.YYYYYY', formData.get('email') as string); // Replace 'entry.YYYYYY' with the correct entry ID for your email field
    formData.append('entry.ZZZZZZ', formData.get('message') as string); // Replace 'entry.ZZZZZZ' with the correct entry ID for your message field

    // Send the form data to Google Forms
    fetch(googleFormUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // Use no-cors mode for Google Forms
    })
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      })
      .catch((error) => {
        toast({
          title: "Error!",
          description: "There was a problem sending your message. Please try again later.",
        });
      });
  };

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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="space-x-2 bg-white/80 hover:bg-white">
                  <Mail size={20} />
                  <span>Contact</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                </DialogHeader>
                <form onSubmit={onSubmit} className="space-y-4">
                  <FormField
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" type="email" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="lg" className="space-x-2 bg-white/80 hover:bg-white" asChild>
              <a href="https://github.com/shrin18" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="space-x-2 bg-white/80 hover:bg-white" asChild>
              <a href="https://instagram.com/keenshrin_travel" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
