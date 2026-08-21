export default function Contato() {
  const redes = [
    { label: 'GitHub', href: 'https://github.com/ThalisVN' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thalis-vn-53203433b/' },
    { label: 'Instagram', href: 'https://www.instagram.com/thalisvn/' },
    { label: 'youtube', href: 'https://www.youtube.com/@thalisCoder'},
  ]

  return (
    <section id="contato" className="border-t border-border py-22">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="bg-surface border border-border rounded-2xl px-10 py-14 text-center">
          <div className="font-mono text-xs text-green mb-2.5 flex justify-center">
            04 · contato
          </div>
          <h2 className="font-mono text-[clamp(22px,3vw,30px)] mb-3.5">
            Transforme a sua ideia em realidade.
          </h2>
          <p className="text-text-muted mb-7">
            Disponível para projetos freelance e oportunidades como desenvolvedor júnior.
          </p>
          <a href="mailto:thalisVn2003@gmail.com"
            className="font-mono text-[13px] font-semibold px-5 py-2.5 rounded-lg bg-green text-[#08130b] inline-flex items-center gap-2"
          >
            enviar e-mail
          </a>
          <div className="flex justify-center gap-3.5 mt-7 flex-wrap">
            {redes.map((rede) => (
              
              <a key={rede.label}
                href={rede.href}
                target="blank"
                rel="noopener"
                className="font-mono text-[13px] text-text-muted border border-border px-4 py-2.5 rounded-lg hover:text-green hover:border-green transition-colors"
              >
                {rede.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}