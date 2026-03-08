import { FileText, Download } from "lucide-react";

const downloads = [
  {
    title: "Studio Session Checklist",
    description: "Show up prepared and get the most out of every recording session.",
    file: "/downloads/studio-session-checklist.pdf",
  },
  {
    title: "Split Sheet Template",
    description: "Track songwriting ownership between collaborators.",
    file: "/downloads/split-sheet-template.pdf",
  },
  {
    title: "Song Release Checklist",
    description: "A step-by-step guide to release your music professionally.",
    file: "/downloads/song-release-checklist.pdf",
  },
];

export default function ArtistDownloads() {
  return (
    <section className="relative border-t border-white/10 py-20">

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#00f0ff] mb-4">
            Free Artist Resources
          </p>

          <h2 className="font-urban text-4xl md:text-6xl uppercase text-white">
            Artist Download Hub
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tools to help artists prepare for sessions, organize collaborations,
            and release music professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {downloads.map((item) => (
            <a
              key={item.title}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-white/10 bg-white/5 p-8 hover:border-[#ff0040]/50 hover:bg-[#ff0040]/10 transition-all"
            >
              <div className="mb-4 text-[#ff0040]">
                <FileText className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-[#00f0ff] uppercase tracking-wider">
                <Download className="w-4 h-4" />
                Download
              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}