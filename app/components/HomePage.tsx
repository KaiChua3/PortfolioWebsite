import { Github, Linkedin, ChevronRight } from 'lucide-react';

export const HomePage = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-7xl font-bold mb-2 leading-tight fade-element">
              Chua Kai Quan
            </h1>
            <p className="text-2xl text-gray-600 mb-4 max-w-2xl mx-auto fade-element">
              Full-stack developer looking to create high quality applications for small and medium enterprises
            </p>
            <div className="flex gap-4 mb-4 fade-element justify-center">
              <a
                href="#portfolio"
                className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm tracking-wider"
              >
                VIEW WORK <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 text-sm tracking-wider"
              >
                CONTACT
              </a>
            </div>
            <div className="flex gap-4 fade-element justify-center">
              <a href="#" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kaiquanchua/" target="_blank" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 15.318c-.163.538-.961.962-1.538 1.088-.577.127-1.302.161-2.122.128-.82-.034-1.676-.213-2.433-.533a7.394 7.394 0 01-1.767-1.013 3.537 3.537 0 01-.754-.828c-.192-.295-.318-.612-.318-.95 0-.338.126-.655.318-.95.192-.294.458-.562.754-.828a7.394 7.394 0 011.767-1.013c.757-.32 1.613-.499 2.433-.533.82-.033 1.545.001 2.122.128.577.126 1.375.55 1.538 1.088.163.538-.064 1.15-.41 1.601-.346.451-.831.764-1.325.98-.494.217-1.008.337-1.508.385a5.98 5.98 0 01-1.445-.012c-.47-.059-.925-.178-1.338-.355a3.786 3.786 0 01-1.088-.722c-.305-.287-.544-.625-.697-1.003-.154-.378-.218-.793-.172-1.208.046-.415.19-.818.42-1.172.23-.354.543-.651.907-.866.364-.215.771-.348 1.193-.387.422-.039.854-.002 1.268.115.414.117.805.31 1.145.575.34.265.622.593.824.967.202.374.322.785.34 1.206.018.421-.062.844-.238 1.238z"/>
                </svg>
              </a>
              <a href="https://github.com/KaiChua3" target="_blank" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      );
  };