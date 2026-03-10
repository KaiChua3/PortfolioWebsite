export const ServicesPage = () => (
    <section id="services" className="min-h-screen flex items-center justify-center px-16">
          <div className="max-w-6xl w-full mx-auto">
            <h2 className="text-5xl font-bold mb-5 fade-element text-center">Services</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all group hover:scale-105 cursor-pointer fade-element">
                <div className="text-4xl mb-2">01</div>
                <h3 className="text-xl font-bold mb-2 tracking-wider">BUILDING APPLICATIONS</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  If you have a need for a small to medium sized application or platform, I can provide both the technical expertise and long term support to ensure your project&apos;s success. 
                </p>
              </div>
              <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all group hover:scale-105 cursor-pointer fade-element">
                <div className="text-4xl mb-2">02</div>
                <h3 className="text-xl font-bold mb-2 tracking-wider">EXPLORING IDEAS</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  If you think your business might have a need or can benefit from tech solutions, free consultation is available to explore potential ideas and solutions that can be implemented.
                </p>
              </div>
              <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-all group hover:scale-105 cursor-pointer fade-element">
                <div className="text-4xl mb-2">03</div>
                <h3 className="text-xl font-bold mb-2 tracking-wider">COST EFFECTIVE PRICING</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  Pricing can be a very important factor for small and medium enterprises, and I am committed to providing cost effective solutions that do not compromise on quality.
                </p>
              </div>
            </div>
          </div>
      </section>
  );