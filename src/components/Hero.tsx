import { Mail, Github, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    // Show a success toast notification
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    form.reset(); // Reset the form after successful submission
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-orange-500/20 via-blue-600/20 to-orange-500/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://raw.githubusercontent.com/shrin18/Cpractise/master/profilepic.jpg" 
            alt="Shrinish Donde"
            className="rounded-full w-32 h-32 object-cover border-2 border-white" // Adjust size and border here
          />
        </div>
        <div className="max-w-3xl mx-auto text-center md:text-left md:ml-8">
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
                <Form {...form}>
                  <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-4"
                    name="contact" // Use the form name here
                    method="POST" // Set form method to POST
                    data-netlify="true" // Enable Netlify form handling
                  >
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
                  </form>
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
