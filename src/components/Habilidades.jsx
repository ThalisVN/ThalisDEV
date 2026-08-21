const skills = [
  { tag: 'SERVER-SIDE', title: 'Back-end', desc: 'Node.js, Python e C#. APIs REST, bancos relacionais e NoSQL, autenticação, segurança e lógica de negócios eficiente.' },
  { tag: 'CLIENT-SIDE', title: 'Front-end', desc: 'Interfaces modernas e responsivas com HTML, CSS e JavaScript. Layouts intuitivos, acessibilidade e usabilidade.' },
  { tag: 'CROSS-PLATFORM', title: 'Mobile', desc: 'Apps com Flutter, design responsivo e fluído para Android e iOS. Arquitetura limpa e gerenciamento de estado.' },
]

export default function Habilidades() {
  return (
    <section id="habilidades" className="border-t border-border py-22">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-mono text-xs text-green mb-2.5">02 · habilidades</div>
        <h2 className="font-mono font-bold text-[clamp(24px,3vw,32px)] mb-10 tracking-tight">
          Stack e áreas de atuação
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {skills.map((s) => (
            <div
              key={s.title}
              className="bg-surface border border-border rounded-xl p-6 hover:border-green hover:-translate-y-1 transition-all"
            >
              <span className="font-mono text-[11px] text-amber tracking-wide mb-2.5 block">{s.tag}</span>
              <h3 className="font-mono text-lg mb-2.5">{s.title}</h3>
              <p className="text-text-muted text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}