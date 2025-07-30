import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display-italic text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 sm:mb-8 animate-fade-in">
            Let's Connect
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed animate-slide-up">
            We're open to partnerships, collaborations, and conversations that can shape the future of dining experiences.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-12">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                  Get in <span className="font-display-italic text-primary">Touch</span>
                </h2>
                <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Whether you're an entrepreneur with a culinary vision, an investor interested in our portfolio, 
                  or simply someone who shares our passion for exceptional dining experiences, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">Visit Us</h3>
                    <p className="font-body text-sm sm:text-base text-muted-foreground">
                      LIC Colony, 17/17, 24th Main Rd<br />
                      TMC Layout, 1st Phase, J. P. Nagar<br />
                      Bengaluru, Karnataka 560078
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">Call Us</h3>
                    <a 
                      href="tel:+918951472076"
                      className="font-body text-muted-foreground hover:text-primary transition-smooth"
                    >
                      +91 8951472076
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">Email Us</h3>
                    <a 
                      href="mailto:marketingeatrepeatindia@gmail.com"
                      className="font-body text-muted-foreground hover:text-primary transition-smooth"
                    >
                      marketingeatrepeatindia@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">Office Hours</h3>
                    <div className="font-body text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Message */}
              <div className="bg-white rounded-2xl shadow-elegant p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Partnership Opportunities
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  We're always looking for exceptional culinary concepts, talented teams, and strategic partners 
                  who share our vision of creating memorable dining experiences. If you have an idea that could 
                  benefit from our expertise and resources, let's talk.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-luxury p-8 lg:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-body font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[150px] resize-y"
                    placeholder="Tell us about your idea, question, or how we can help..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="btn-luxury w-full text-lg py-4 font-body"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Contact;