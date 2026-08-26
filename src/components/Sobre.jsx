export default function Sobre() {
  return (
    <section id="sobre" className="border-t border-border py-22">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-mono text-xs text-green mb-2.5 flex items-center gap-2.5 before:content-['//'] before:text-text-muted">
          01 · sobre
        </div>
        <h2 className="font-mono font-bold text-[clamp(24px,3vw,32px)] mb-10 tracking-tight">
          Em busca de novos desafios
        </h2>
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-start">
          <div className="space-y-4 text-text-muted text-base">
            <p>
              Meu nome é <strong className="text-text font-semibold">Thalis</strong>, sou
              estudante de Ciência da Computação e desenvolvedor em formação com foco em
              tecnologias web.
            </p>
            <p>
              Tenho conhecimentos em{' '}
              <strong className="text-text font-semibold">HTML, CSS e JavaScript</strong>,
              e estou me aprofundando cada vez mais no desenvolvimento{' '}
              <strong className="text-text font-semibold">Full-Stack</strong>. Busco
              minhas primeiras oportunidades como freelancer para aplicar o que aprendi
              e, ao mesmo tempo, aprender ainda mais com projetos reais.
            </p>
            <p>
              Fora da programação, gosto de desafios criativos, resolver problemas e
              trabalhar em equipe.
            </p>
          </div>
          <div className="border border-border rounded-xl overflow-hidden bg-surface max-w-[320px] md:max-w-none">
            <img
              src="src\assets\img\perfil.jpeg"
              alt="Foto de Thalis"
              className="w-full block grayscale-[30%] contrast-[1.05]"
            />
            <div className="px-4 py-3 font-mono text-xs text-text-muted border-t border-border">
              /assets/img/perfil.jpg
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}