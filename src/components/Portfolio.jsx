import { useState, useMemo } from 'react'
import dadosProjetos from '../../src/data/projetos.json' // Ajuste o caminho conforme sua estrutura

export default function Portfolio() {
  const [filtro, setFiltro] = useState('todos')

  // Transforma o objeto { desktop: [...], web: [...] } em uma lista única com a propriedade "tipo"
  const todosProjetos = useMemo(() => {
    return Object.entries(dadosProjetos).flatMap(([tipo, lista]) =>
      lista.map((item) => ({
        ...item,
        tipo,
        ext: tipo === 'desktop' ? '.app' : '.web',
      }))
    )
  }, [])

  // Filtra de acordo com a seleção dos botões
  const visiveis = filtro === 'todos' 
    ? todosProjetos 
    : todosProjetos.filter((p) => p.tipo === filtro)

  return (
    <section id="portfolio" className="border-t border-border py-22">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-mono text-xs text-green mb-2.5">03 · projetos</div>
        <h2 className="font-mono font-bold text-[clamp(24px,3vw,32px)] mb-8 tracking-tight">
          Portfólio
        </h2>
        
        {/* Botões de Filtro */}
        <div className="flex gap-2.5 mb-8 font-mono text-sm">
          {['todos', 'web', 'desktop'].map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-full border transition-colors capitalize ${
                filtro === f 
                  ? 'border-green text-green' 
                  : 'border-border text-text-muted hover:border-green hover:text-green'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid de Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {visiveis.map((p, i) => (
            <div
              key={`${p.titulo}-${i}`}
              className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:border-purple transition-all"
            >
              {/* Imagem de Preview */}
              <div className="h-44 border-b border-border bg-surface-2 overflow-hidden flex items-center justify-center">
                {p.imagem ? (
                  <img 
                    src={p.imagem} 
                    alt={p.titulo} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback visual caso a imagem não carregue
                      e.target.style.display = 'none'
                    }}
                  />
                ) : (
                  <span className="font-mono text-text-muted text-xs">preview indisponível</span>
                )}
              </div>

              {/* Informações do Card */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-mono text-[11px] text-green mb-2">{p.ext}</div>
                <h3 className="font-mono text-base font-bold mb-2">{p.titulo}</h3>
                <p className="text-text-muted text-sm mb-4 flex-1">{p.descricao}</p>
                
                {/* Links (Demo e GitHub) */}
                <div className="flex items-center gap-4 mt-auto font-mono text-xs">
                  {p.linkDemo && p.linkDemo !== '#' && (
                    <a
                      href={p.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple hover:underline"
                    >
                      demo →
                    </a>
                  )}
                  {p.linkGithub && p.linkGithub !== '#' && (
                    <a
                      href={p.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-green transition-colors"
                    >
                      github ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}