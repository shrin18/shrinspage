import { Mail, Github, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

const Hero = () => {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Google Form URL for submissions
  const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'; // Replace with your Google Form URL

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('entry.XXXXXX', data.name); // Replace 'entry.XXXXXX' with the ID for the name field
    formData.append('entry.YYYYYY', data.email); // Replace 'entry.YYYYYY' with the ID for the email field
    formData.append('entry.ZZZZZZ', data.message); // Replace 'entry.ZZZZZZ' with the ID for the message field

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
        form.reset(); // Reset the form after successful submission
      })
      .catch(() => {
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
                <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
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
                </Form>
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
