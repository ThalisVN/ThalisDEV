export default function Hero() {
  return (
    <section className="pt-24 pb-18 relative z-10">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs text-text-muted">~/thalis — zsh</span>
          </div>
          <div className="px-7 py-9 font-mono">
            <div className="text-text-muted text-sm mb-1.5">
              <span className="text-green">➜</span> whoami
            </div>
            <h1 className="font-extrabold text-[clamp(28px,4.5vw,46px)] leading-tight my-2.5 mb-4 tracking-tight">
              Thalis, desenvolvedor<br />
              <span className="text-green">Full-Stack Júnior</span>
              <span className="cursor" />
            </h1>
            <p className="font-sans text-text-muted text-base max-w-[520px] mb-6">
              Estudante de Ciência da Computação construindo aplicações web e mobile de
              ponta a ponta — do banco de dados à interface.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-7">
              {['C', 'C#', 'Node.js', 'JavaScript' , 'python','Flutter'].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs text-purple border border-border rounded-full px-3 py-1.5 bg-purple/5"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              
                <a href="#contato"
                className="font-mono text-[13px] font-semibold px-5 py-2.5 rounded-lg bg-green text-[#08130b] hover:-translate-y-0.5 transition-transform inline-flex items-center gap-2"
                >
                contato --hire-me
              </a>
              <a
                href="#portfolio"
                className="font-mono text-[13px] font-semibold px-5 py-2.5 rounded-lg border border-border text-text hover:border-green hover:text-green hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >  
                ver projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}