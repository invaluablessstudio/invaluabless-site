"use client";

import React from "react";
const ProducerSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 border-b-4 border-red-600 pb-4 inline-block">
          The Producer
        </h2>
        
        {/* Journey */}
        <div className="mb-12">
          <p className="text-red-500 font-bold text-lg md:text-xl uppercase tracking-wide mb-6">
            Camuy, PR → Quebradillas → San Juan → San Antonio, TX
          </p>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Started in '09. Small studio in my hometown, cutting demos for local artists. Learned fast—if the 808 don't hit on a phone speaker, you did it wrong.
            </p>
            
            <p>
              <span className="text-white font-bold">2010: La Caldera Records.</span> Me and my brother opened shop in Quebradillas. Pure hustle. Reggaeton, trap, rap, latin—whatever came through, we made it knock.
            </p>
            
            <p>
              <span className="text-white font-bold">2013: San Juan.</span> That's where I leveled up. Worked <span className="text-white">Propiedad Urbana, Unstopable Studio</span>—real studios, real pressure, real artists. Sessions with <span className="text-white font-bold">El Larax, Nencho el León Salvaje, Bimbo el Oso Mañoso, YOMO, Xander el Imaginario</span> and more. While running those rooms, I got certified as a Recording Engineer at <span className="text-white">CCAT in Bayamón</span>—formal training to back up the ear I already had.
            </p>
            
            <p>
              <span className="text-white font-bold">2016: Texas.</span> Built private in San Antonio first, word spread. <span className="text-white font-bold">2021: opened doors to the public.</span> Now working with artists from PR, Mexico, Colombia, all over the U.S.—bridging that island energy with mainland punch.
            </p>
          </div>
        </div>

        {/* Sound Statement */}
        <div className="bg-gray-900 border-l-4 border-red-600 p-6 mb-12">
          <p className="text-lg md:text-xl font-bold text-white mb-2">
            My sound: <span className="text-red-500">Clean. Heavy. Street-ready.</span>
          </p>
          <p className="text-gray-400">
            I don't do "demo quality." I do <em>playlist-ready, DJ-approved, algorithm-fed.</em> Whether you're laying your first trap track or your next reggaeton anthem, you get the same focus I gave those sessions in San Juan.
          </p>
        </div>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-center mb-16 text-red-500">
          Play it loud. That's the test.
        </p>

        {/* Selected Credits */}
        <div className="mb-12">
          <h3 className="text-2xl font-black uppercase mb-6 border-b border-gray-700 pb-2">
            Selected Credits
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-red-500 font-bold uppercase tracking-wide mb-2 text-sm">Puerto Rico</h4>
              <p className="text-white font-bold text-lg leading-relaxed">
                YOMO | El Larax | Nencho el León Salvaje | Bimbo el Oso Mañoso | Xander el Imaginario
              </p>
            </div>
            
            <div>
              <h4 className="text-red-500 font-bold uppercase tracking-wide mb-2 text-sm">San Antonio / Texas</h4>
              <p className="text-white font-bold text-lg leading-relaxed">
                Sammy D | Jay Lex | Baby Killa La Amenaza | NinoPR | Johnny West | Xziel The One and Only | Xuniel & El JJJavi | J Kings | Marco Antonio Lopez | Carli | Ryan Rivera | Lil Tree | Solo Deyvi
              </p>
            </div>
            
            <div>
              <h4 className="text-red-500 font-bold uppercase tracking-wide mb-2 text-sm">Studios</h4>
              <p className="text-gray-400">
                La Caldera Records (Quebradillas, PR) | Propiedad Urbana (San Juan, PR) | Unstopable Studio (San Juan, PR) | Invaluabless Productions (San Antonio, TX)
              </p>
            </div>
            
            <div>
              <h4 className="text-red-500 font-bold uppercase tracking-wide mb-2 text-sm">Certification</h4>
              <p className="text-gray-400">
                Recording Engineer — CCAT, Bayamón, Puerto Rico
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-900 p-6 md:p-8 rounded-lg">
          <h3 className="text-2xl font-black uppercase mb-6 text-red-500">
            Pull Up
          </h3>
          
          <div className="space-y-4 text-gray-300">
            <p>
              <span className="text-white font-bold">Studio:</span><br />
              3200 Wright Carpenter Rd<br />
              San Antonio, Texas 78221
            </p>
            
            <div>
              <span className="text-white font-bold block mb-2">Socials:</span>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/invaluablessproduction" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-white transition-colors font-bold">
                  Instagram
                </a>
                <a href="https://www.youtube.com/@InvaluaBlessProductions" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-white transition-colors font-bold">
                  YouTube
                </a>
                <a href="https://www.tiktok.com/@invaluablessproductions" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-white transition-colors font-bold">
                  TikTok
                </a>
                <a href="https://www.facebook.com/invaluablessproduction/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-white transition-colors font-bold">
                  Facebook
                </a>
              </div>
            </div>
            
            <div>
              <span className="text-white font-bold block mb-2">Email:</span>
              <p>Bookings: <a href="mailto:bookings@invaluablessproduction.com" className="text-red-500 hover:text-white transition-colors">bookings@invaluablessproduction.com</a></p>
              <p>Beats: <a href="mailto:beats@invaluablessproduction.com" className="text-red-500 hover:text-white transition-colors">beats@invaluablessproduction.com</a></p>
              <p>General: <a href="mailto:support@invaluablessproduction.com" className="text-red-500 hover:text-white transition-colors">support@invaluablessproduction.com</a></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProducerSection;
