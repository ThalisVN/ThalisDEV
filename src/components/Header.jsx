export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <nav className="max-w-[1080px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono font-bold text-[15px] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_theme(colors.green)]" />
          Thalis.Coder
          
        </a>
        <div className="hidden md:flex gap-2 font-mono text-[13px]">
          {[
            ['01', 'sobre'],
            ['02', 'skills'],
            ['03', 'projetos'],
            ['04', 'contato'],
          ].map(([idx, label]) => (
            
             <a key={label}
              href={`#${label === 'skills' ? 'habilidades' : label === 'projetos' ? 'portfolio' : label}`}
              className="px-3.5 py-2 rounded-md text-text-muted hover:text-green hover:bg-green/10 transition-colors"
            >
              <span className="text-purple mr-0.5">{idx}</span>{label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}