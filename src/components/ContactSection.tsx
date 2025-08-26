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
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Contact & Connection Background */}
      <div className="absolute inset-0 -z-10">
        {/* Campus connectivity theme */}
        <div className="absolute inset-0 bg-[url('/cs-aiml-photos/AMC Logo.jpg')] bg-cover bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/98 via-background/95 to-background/92" />
        
        {/* Connection-themed gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--aiml-tertiary)/0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--tech-emerald)/0.12),transparent_65%)]" />
        
        {/* Network connection pattern */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(45deg,hsl(var(--primary)/0.4)_1px,transparent_1px,transparent_20px,hsl(var(--accent)/0.3)_21px,transparent_22px)] bg-[size:100px_100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our programs, research, or admissions? Connect with us or follow us online!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
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
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"></path></svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0016.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .386.044.762.127 1.124C7.728 8.82 4.1 6.884 1.671 3.149c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 1.997 1.397 3.872 3.448 4.292a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"></path></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.599 2.001 3.599 4.604v5.592z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.414 3.635 1.381c-.967.967-1.25 2.14-1.309 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.277.342 2.45 1.309 3.417.967.967 2.14 1.25 3.417 1.309C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.342 3.417-1.309.967-.967 1.25-2.14 1.309-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.342-2.45-1.309-3.417-.967-.967-2.14-1.25-3.417-1.309C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img src="/cartoons/undraw_quick-chat_3gj8.svg" alt="Contact" className="w-64 h-auto object-contain mb-4" />
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold mb-2">We're here to help!</h4>
              <p className="text-muted-foreground">Reach out for any queries about our department, programs, or events. Connect with us for updates and opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;