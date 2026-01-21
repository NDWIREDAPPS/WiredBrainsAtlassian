export function EnterpriseAgileSection() {
  return (
    <section className="scroll-mt-24 container mx-auto px-4 md:px-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Enterprise Agile & AI Innovation
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-primary">
          Enterprise Agility and AI-Powered Collaboration
        </p>
      </div>

      {/* Signpost Layout */}
      <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-5xl mx-auto">
        {/* Jira Align - Left Card */}
        <div className="group flex-1 relative bg-gradient-to-br from-background to-[#f14a15]/5 rounded-2xl md:rounded-r-none border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f14a15]/10 to-[#010101]/10 rounded-2xl md:rounded-r-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 group-hover:scale-105 transform">
              <img
                src="/jira-align.png"
                alt="Jira Align"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Jira Align
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We help organizations implement Jira Align to connect strategy,
                portfolios, programs and teams. Our approach ensures visibility
                from executive goals to team-level execution, enabling true
                enterprise agility.
              </p>
            </div>
          </div>
        </div>

        {/* Center Signpost Connector */}
        <div className="hidden md:flex items-center justify-center z-10">
          <div className="w-1 h-full bg-stone-300 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#f14a15] to-[#010101] shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/90" />
            </div>
          </div>
        </div>

        {/* Mobile Connector */}
        <div className="flex md:hidden items-center justify-center my-6">
          <div className="h-1 w-24 bg-gradient-to-r from-[#f14a15] via-[#010101] to-[#f14a15] rounded-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#f14a15] to-[#010101] shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/90" />
            </div>
          </div>
        </div>

        {/* Jira Rovo - Right Card */}
        <div className="group flex-1 relative bg-gradient-to-br from-background to-[#f14a15]/5 rounded-2xl md:rounded-l-none border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f14a15]/10 to-[#010101]/10 rounded-2xl md:rounded-l-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 group-hover:scale-105 transform">
              <img
                src="/jira-rovo.png"
                alt="Rovo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Rovo
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We support organizations adopting Atlassian Rovo to enhance
                search, insights and productivity using AI. From knowledge
                discovery to contextual assistance, Rovo helps teams work
                smarter with their Atlassian data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
