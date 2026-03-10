import { Github, Linkedin, Mail } from 'lucide-react';

export const ContactPage = () => (
  <section id="contact" className="min-h-screen flex items-center justify-center px-16">
    <div className="max-w-2xl w-full mx-auto">
      <h2 className="text-5xl font-bold mb-3 fade-element text-center">Get In Touch</h2>
      <p className="text-gray-600 mb-4 fade-element text-center">
        If you have a project in mind, or would like a consultation, please feel free to reach out
      </p>
      <div className="space-y-3 fade-element">
        
      </div>
      <div className="flex gap-4 mt-4 pt-3 border-t border-gray-200 fade-element justify-center">
        <a href="https://github.com/KaiChua3" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110">
          <Github className="w-4 h-4" />
        </a>
        <a href="https://www.linkedin.com/in/kaiquanchua/" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="mailto:kaiquanchua33@gmail.com" target="_blank" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);