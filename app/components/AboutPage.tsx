export const AboutPage = () => (
    <section id="about" className="min-h-screen flex items-center justify-center px-16">
          <div className="max-w-6xl grid grid-cols-2 gap-6 w-full mx-auto">
            <div className="fade-element">
              <h2 className="text-5xl font-bold mb-3">About</h2>
              <div className="space-y-2 text-gray-600 leading-relaxed">
                <p>
                  My name is Kai Quan, a young and passionate developer from Singapore. Aside from coding, my hobbies include playing video games like Stellaris and HOI4, and going on solo exploration trips. 
                </p>
                <p>
                  Throughout my 5 years of experience in the tech world, I have participated in a variety of projects, utilizing a wide range of tools and technologies. From my start as a web developer using basic Javascript and HTML, I slowly expanded my activities and skillset, participating in robotics competitions and hackathons. Since graduating high school, I have continued to work on new and exciting projects through my national service in the army. 
                </p>
                <p>
                  To expand my skills and experience, I help others with their own projects and ideas, providing technical expertise and support in order to help solve problems and challenges their business or enterprise might be facing. 
                </p>
              </div>
            </div>
            <div className="fade-element">
              <h3 className="text-2xl font-bold mb-2 tracking-wider">SKILLS</h3>
              <div className="space-y-1">
                {['JavaScript/TypeScript', 'React & Next.js', 'Node.js & Express', 'Tailwind CSS', 'Supabase'].map((skill) => (
                  <div key={skill} className="border-l-2 border-black pl-4 py-2">
                    <p className="font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
  );