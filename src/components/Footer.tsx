
import { ShieldCheck } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white py-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                <div className="mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6">
                        <ShieldCheck className="w-8 h-8 text-brand-green" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                        Não é sobre <span className="text-[#F05B7D]">sabonetes.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                        É sobre provar pra si mesmo que dá pra viver do que você cria. É sobre transformar cheiro, cor e toque em <strong className="text-[#F05B7D] font-bold">liberdade e renda real</strong>. Enquanto o mundo pede currículo, <strong className="text-[#F05B7D]">você vai estar vendendo resultado.</strong>
                    </p>
                </div>

                <a
                    href="https://wa.me/5511987880615?text=Ol%C3%A1!%20Quero%20acessar%20a%20Saboaria%20Artesanal."
                    target="_blank" rel="noopener noreferrer"
                    className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl w-full max-w-md transform transition-transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 mb-8 uppercase"
                >
                    <ShieldCheck className="w-5 h-5" />
                    Garantir meu acesso agora
                </a>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium mb-16">
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Acesso Imediato
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Garantia 7 dias
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Suporte Incluído
                    </span>
                </div>

                <div className="w-full border-t border-white/10 pt-8 mt-4 space-y-4">
                    <p className="text-gray-500 text-sm italic mb-4">Esta é a sua chance de decidir por si mesmo.</p>
                    <p className="text-gray-600 text-xs">
                        Pirataria é crime, denuncie. Os resultados variam de pessoa a pessoa.
                    </p>
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} Saboaria Artesanal. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
