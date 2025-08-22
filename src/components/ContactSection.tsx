import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs, research opportunities, or admissions? We're here to help you start your AI journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-md sm:text-lg text-muted-foreground">AMC Engineering College, 18th KM, Bannerghatta Road, Bengaluru, Karnataka, India</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-md sm:text-lg text-muted-foreground">+91 8660144040</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-md sm:text-lg text-muted-foreground">cse.aiml@amceducation.in</p>
                </div>
              </div>
            </div>
            <div className="mt-8 hidden lg:block">
              <img src="/cartoons/undraw_quick-chat_3gj8.svg" alt="Contact" className="w-full h-auto object-contain" />
            </div>
          </div>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileFocus={{ scale: 1.02}}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02}}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02}}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                  />
                </motion.div>
                <EnhancedButton type="submit" className="w-full" effect="glow">
                  Send Message
                </EnhancedButton>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;