import { Button } from "@/components/ui/button";

interface HeroProps {
  waitlistCount: number;
}

export default function Hero({ waitlistCount }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#EBF2FA] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-primary mb-6">
              AI-Powered Room-Wide Active Noise Cancellation
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Transform any space into a tranquil environment with our revolutionary technology that adapts to your surroundings.
            </p>
            
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <a href="#waitlist" className="px-6 py-3 rounded-md bg-primary text-white text-center font-medium hover:bg-opacity-90 transition">
                Join the Waitlist
              </a>
              <a href="#how-it-works" className="px-6 py-3 rounded-md border border-primary text-primary text-center font-medium hover:bg-primary hover:text-white transition">
                Learn More
              </a>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span>{waitlistCount > 0 ? `${waitlistCount}+ already on the waitlist` : "Join our waitlist today!"}</span>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&h=500&fit=crop" 
                className="w-full" 
                alt="QuietSphere Device" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="text-sm font-semibold">QuietSphere | Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-20 left-0 right-0 h-40 opacity-30">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-full">
          <path fill="#0F4C81" fillOpacity="0.3" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,202.7C672,203,768,149,864,128C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
