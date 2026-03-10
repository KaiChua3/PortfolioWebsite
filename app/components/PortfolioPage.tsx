import { ExternalLink } from "lucide-react";

export const PortfolioPage = () => (
  <section id="portfolio" className="min-h-screen flex items-center justify-center px-16">
            <div className="max-w-6xl w-full mx-auto">
              <h2 className="text-5xl font-bold mb-5 fade-element text-center">Portfolio</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Finerty Academy Automation System', category: '', link: 'https://github.com/KaiChua3/Finerty-Academy-Enrollment-Automation' },
                  { title: '', category: '', link: '' }
                ].map((project, idx) => (
                  <div key={idx} className="border-2 border-black group hover:bg-black hover:text-white transition-all cursor-pointer hover:scale-105 fade-element">
                    <div className="aspect-video bg-gray-100 group-hover:bg-gray-800"></div>
                    <div className="p-4">
                      <p className="text-xs tracking-widest mb-1 opacity-60">{project.category.toUpperCase()}</p>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <button onClick={() => window.open(project.link, '_blank')} className="flex items-center gap-2 text-sm mt-2 opacity-60 group-hover:opacity-100">
                        VIEW PROJECT <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  </section>
);