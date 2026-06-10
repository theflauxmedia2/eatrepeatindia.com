import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    const { name, email, phone, subject, message } = formData;
    const mailSubject = encodeURIComponent(subject || `Message from ${name}`);
    const mailBody = encodeURIComponent(
      `Hello Eat Repeat Team,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      (phone ? `Phone: ${phone}\n` : '') +
      (subject ? `Subject: ${subject}\n` : '') +
      `\nMessage:\n${message}\n\n` +
      `— Sent via eatrepeatindia.com`
    );
    window.location.href = `mailto:marketingeatrepeatindia@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    toast({ title: 'Opening your email app…', description: 'We pre-filled the details for you.' });
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Us"
        description="Get in touch with Eat Repeat for partnerships, collaborations and conversations. Visit us in J. P. Nagar, Bengaluru, or write to us — we'd love to hear from you."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Eat Repeat',
            url: 'https://www.eatrepeatindia.com/contact',
          },
        ]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow justify-center mb-5 animate-fade-in">Say Hello</p>
          <h1 className="font-display-italic text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 animate-fade-in">
            Let's Connect
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up px-2">
            We're open to partnerships, collaborations, and conversations that can shape the future of dining experiences.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            
            {/* Contact Information */}
            <Reveal className="space-y-6 sm:space-y-8 md:space-y-12">
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">
                  Get in <span className="font-display-italic text-primary">Touch</span>
                </h2>
                <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8">
                  Whether you're an entrepreneur with a culinary vision, an investor interested in our portfolio, 
                  or simply someone who shares our passion for exceptional dining experiences, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1 sm:mb-2">Visit Us</h3>
                    <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground">
                      LIC Colony, 17/17, 24th Main Rd<br />
                      TMC Layout, 1st Phase, J. P. Nagar<br />
                      Bengaluru, Karnataka 560078
                    </p>
                  </div>
                </div>
                
                {/* Phone removed as per email-only policy */}
                
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1 sm:mb-2">Email Us</h3>
                    <a 
                      href="mailto:marketing@eatrepeatindia.com "
                      className="font-body text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-smooth"
                    >
                      marketing@eatrepeatindia.com 
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1 sm:mb-2">Office Hours</h3>
                    <div className="font-body text-xs sm:text-sm md:text-base text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Message */}
              <div className="bg-white rounded-2xl shadow-elegant p-4 sm:p-6 md:p-8">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  Partnership Opportunities
                </h3>
                <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  We're always looking for exceptional culinary concepts, talented teams, and strategic partners 
                  who share our vision of creating memorable dining experiences. If you have an idea that could 
                  benefit from our expertise and resources, let's talk.
                </p>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={120} className="bg-white rounded-3xl shadow-luxury p-4 sm:p-6 md:p-8 lg:p-12">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-foreground mb-1.5 sm:mb-2">
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
                    <label htmlFor="email" className="block font-body font-medium text-foreground mb-1.5 sm:mb-2">
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
                  <label htmlFor="phone" className="block font-body font-medium text-foreground mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="+91 1234567890"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-body font-medium text-foreground mb-1.5 sm:mb-2">
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
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-1.5 sm:mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] sm:min-h-[150px] resize-y"
                    placeholder="Tell us about your idea, question, or how we can help..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="btn-luxury w-full text-sm sm:text-base md:text-lg py-3 sm:py-4 font-body"
                >
                  Send Message
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Contact;