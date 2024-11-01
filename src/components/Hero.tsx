import { Mail, Github, LinkedIn } from 'lucide-react'; // Import LinkedIn icon from lucide-react
import { Button } from "@/components/ui/button";
import { useState } from "react";
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

  const onSubmit = (data: any) => {
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    form.reset();
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                            <Input placeholder="Your email" type="email" {...field} />
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
                            <Textarea placeholder="Your message" {...field} />
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
              <a href="https://www.linkedin.com/in/shrinish-donde-237b67105/" target="_blank" rel="noopener noreferrer">
                <LinkedIn size={20} />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
