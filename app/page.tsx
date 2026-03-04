import React from 'react';
import { Instagram, Youtube, Facebook, Music2, MapPin, Mail, Phone } from 'lucide-react';

const InvaluablessHome = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            INVALUABLESS<span className="text-red-600">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href="#producer" className="hover:text-red-500 transition-colors">THE PRODUCER</a>
            <a href="#credits" className="hover:text-red-500 transition-colors">CREDITS</a>
            <a href="#studio" className="hover:text-red-500 transition-colors">STUDIO</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">PULL UP</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - You at the boards (black hoodie/chain photo) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - USE: Black hoodie with chain photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-producer-boards.jpg" 
            alt="Invaluabless at the mixing desk"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-red-500 font-mono text-sm tracking-widest uppercase">
                San Antonio, TX • Since 2009
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                13 YEARS.<br />
                TWO COUNTRIES.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  RECORDS THAT KNOCK.
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              From Camuy, PR to San Antonio, TX. Reggaeton, trap, rap, and Latin—built for club systems and playlists.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold tracking-wide transition-all transform hover:scale-105">
                BOOK A SESSION
              </button>
              <button className="border border-white/30 hover:border-white px-8 py-4 font-bold tracking-wide transition-all">
                HEAR THE WORK
              </button>
            </div>

            <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
              "Play it loud. That's the test."
            </p>
          </div>

          {/* Empty right side to let the background image breathe */}
          <div className="hidden md:block" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* THE PRODUCER SECTION - You in red sweatshirt or smiling chair photo */}
      <section id="producer" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image - USE: Red sweatshirt with beanie OR smiling in chair photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-red-600/20 blur-3xl rounded-full" />
              <img 
                src="/images/producer-portrait.jpg" 
                alt="Invaluabless - Music Producer"
                className="relative w-full aspect-[4/5] object-cover rounded-sm"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 font-mono text-sm">
                <p className="font-bold text-2xl">13+</p>
                <p className="uppercase tracking-wider">Years</p>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4">The Producer</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                  Camuy, PR → Quebradillas → San Juan → San Antonio, TX
                </h3>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  Started in '09. Small studio in my hometown, cutting demos for local artists. Learned fast—if the 808 don't hit on a phone speaker, you did it wrong.
                </p>
                
                <p>
                  2010: <strong className="text-white">La Caldera Records</strong>. Me and my brother opened shop in Quebradillas. Pure hustle. Reggaeton, trap, rap, latin—whatever came through, we made it knock.
                </p>

                <p>
                  2013: <strong className="text-white">San Juan</strong>. That's where I leveled up. Worked <strong className="text-white">Propiedad Urbana</strong>, <strong className="text-white">Unstopable Studio</strong>—real studios, real pressure, real artists. Sessions with <strong className="text-white">YOMO</strong>, <strong className="text-white">El Larax</strong>, <strong className="text-white">Nencho el León Salvaje</strong> and more. Got certified as a Recording Engineer at CCAT in Bayamón—formal training to back up the ear I already had.
                </p>

                <p>
                  2016: Texas. Built private in San Antonio first, word spread. 2021: opened doors to the public. Now working with artists from PR, Mexico, Colombia, all over the U.S.—bridging that island energy with mainland punch.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6 py-2">
                <p className="text-xl font-bold italic">
                  "My sound: Clean. Heavy. Street-ready. I don't do 'demo quality.' I do playlist-ready, DJ-approved, algorithm-fed."
                </p>
              </div>

              <p className="font-mono text-red-500 uppercase tracking-widest">
                Play it loud. That's the test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED CREDITS SECTION */}
      <section id="credits" className="py-24 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-red-500 font-mono text-sm tracking-widest uppercase mb-12 text-center">Selected Credits</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Puerto Rico */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-2 h-2 bg-red-600 rounded-full" />
                Puerto Rico
              </h3>
              <div className="flex flex-wrap gap-3">
                {['YOMO', 'El Larax', 'Nencho el León Salvaje', 'Bimbo el Oso Mañoso', 'Xander el Imaginario'].map((artist) => (
                  <span key={artist} className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium hover:bg-red-600/20 hover:border-red-600/50 transition-all cursor-default">
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            {/* San Antonio / Texas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-2 h-2 bg-red-600 rounded-full" />
                San Antonio / Texas
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Sammy D', 'Jay Lex', 'Baby Killa La Amenaza', 'NinoPR', 'Johnny West', 'Xziel The One and Only', 'Xuniel & El JJJavi', 'J Kings', 'Marco Antonio Lopez', 'Carli', 'Ryan Rivera', 'Lil Tree', 'Solo Deyvi'].map((artist) => (
                  <span key={artist} className="bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium hover:bg-red-600/20 hover:border-red-600/50 transition-all cursor-default">
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Studios & Certification */}
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400 border-t border-white/10 pt-12">
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider">Studios</h4>
              <p>La Caldera Records (Quebradillas, PR) • Propiedad Urbana (San Juan, PR) • Unstopable Studio (San Juan, PR) • Invaluabless Productions (San Antonio, TX)</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider">Certification</h4>
              <p>Recording Engineer — CCAT, Bayamón, Puerto Rico</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE STUDIO SECTION - Wide studio shot + artist in booth */}
      <section id="studio" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4">The Studio</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">
              Built for Sound.<br />Designed for Sessions.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Main studio shot - USE: Wide purple/blue LED studio photo */}
            <div className="relative group overflow-hidden rounded-sm">
              <img 
                src="/images/studio-wide-led.jpg" 
                alt="Invaluabless Productions Studio - San Antonio"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-mono text-sm">Control Room • San Antonio, TX</p>
              </div>
            </div>

            {/* Artist in booth - USE: Artist recording photo with reflection effect */}
            <div className="relative group overflow-hidden rounded-sm">
              <img 
                src="/images/artist-in-booth.jpg" 
                alt="Artist recording session"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-mono text-sm">Vocal Booth • Session Life</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-white/10 rounded-sm">
              <h4 className="text-2xl font-bold mb-2">Recording</h4>
              <p className="text-gray-400 text-sm">Vocals, instruments, full bands. Clean signal chain, pro environment.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-sm">
              <h4 className="text-2xl font-bold mb-2">Mixing</h4>
              <p className="text-gray-400 text-sm">Radio-ready, club-tested, headphone-approved. Your sound, elevated.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-sm">
              <h4 className="text-2xl font-bold mb-2">Beats</h4>
              <p className="text-gray-400 text-sm">Original production. Reggaeton, trap, rap, Latin. Custom or licensed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PULL UP / CONTACT SECTION */}
      <section id="contact" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/5" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              PULL UP<span className="text-red-600">.</span>
            </h2>
            <p className="text-xl text-gray-400">Let's build something that lasts.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Location */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Studio</h4>
                  <p className="text-gray-400">3200 Wright Carpenter Rd<br />San Antonio, Texas 78221</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <div className="space-y-1 text-gray-400 text-sm">
                    <p><span className="text-white">Bookings:</span> bookings@invaluablessproduction.com</p>
                    <p><span className="text-white">Beats:</span> beats@invaluablessproduction.com</p>
                    <p><span className="text-white">General:</span> support@invaluablessproduction.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg mb-4">Follow the Work</h4>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://instagram.com/invaluablessproduction" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-600/50 transition-all group">
                  <Instagram className="w-5 h-5 group-hover:text-red-500" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a href="https://youtube.com/@InvaluaBlessProductions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-600/50 transition-all group">
                  <Youtube className="w-5 h-5 group-hover:text-red-500" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
                <a href="https://facebook.com/invaluablessproduction" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-600/50 transition-all group">
                  <Facebook className="w-5 h-5 group-hover:text-red-500" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a href="https://tiktok.com/@invaluablessproductions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-600/50 transition-all group">
                  <Music2 className="w-5 h-5 group-hover:text-red-500" />
                  <span className="text-sm font-medium">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 font-bold text-lg tracking-wide transition-all transform hover:scale-105">
              START YOUR SESSION
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Invaluabless Productions. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
            Play it loud. That's the test.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InvaluablessHome;