import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-gradient-to-b from-mint/20 to-peach/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a conversation about technology and web development. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">saniarajput0607@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 6395620226</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Your City, State</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-gray-800">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/sania0607" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:text-purple-600 hover:bg-white/70 transition-all duration-300 transform hover:scale-110">
                  <Github size={24} />
                </a>
                
                <a href="https://www.linkedin.com/in/saniarajput06" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:text-blue-600 hover:bg-white/70 transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full" placeholder="John Doe" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full" placeholder="Let's work together!" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full" placeholder="Tell me about your project or just say hello!" />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;