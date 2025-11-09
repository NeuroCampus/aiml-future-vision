import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import OptimizedImage from '@/components/ui/optimized-image';

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
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Contact & Connection Background */}
      <div className="absolute inset-0 -z-10">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/95 to-background/90" />
        
        {/* Connection-themed gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--aiml-tertiary)/0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--tech-emerald)/0.12),transparent_65%)]" />
        
        {/* Network connection pattern */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(45deg,hsl(var(--primary)/0.4)_1px,transparent_1px,transparent_20px,hsl(var(--accent)/0.3)_21px,transparent_22px)] bg-[size:100px_100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-primary via-primary/80 to-fuchsia-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our programs, research, or admissions? Connect with us or follow us online!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=AMC+Engineering+College,+18th+KM,+Bannerghatta+Road,+Bengaluru,+Karnataka,+India" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed hover:text-primary transition-colors cursor-pointer"
                  >
                    AMC Engineering College, 18th KM, Bannerghatta Road, Bengaluru, Karnataka, India
                  </a>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-3">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:cse.aiml@amceducation.in" 
                    className="text-sm sm:text-base lg:text-lg text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    cse.aiml@amceducation.in
                  </a>
                </div>
              </div>
            </div>
                        <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/in/amc-cse-aiml/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors min-w-[44px] min-h-[44px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a 
                  href="mailto:cseaimlminds@gmail.com" 
                  aria-label="Email" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors min-w-[44px] min-h-[44px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/cseaiml/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors min-w-[44px] min-h-[44px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  aria-label="YouTube" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors min-w-[44px] min-h-[44px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <OptimizedImage src="/cartoons/undraw_quick-chat_3gj8.svg" alt="Contact" className="w-48 h-48 sm:w-64 sm:h-auto object-contain mb-2 sm:mb-4" aspectRatio="1/1" showLoadingState={false} />
            <div className="bg-primary/5 rounded-xl p-4 sm:p-6 text-center">
              <h4 className="text-base sm:text-lg font-bold mb-2">We're here to help!</h4>
              <p className="text-sm sm:text-base text-muted-foreground">Reach out for any queries about our department, programs, or events. Connect with us for updates and opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;