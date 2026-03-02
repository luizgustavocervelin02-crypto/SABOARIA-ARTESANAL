

export function Hero() {
    return (
        <div className="w-full flex flex-col items-center bg-brand-dark/95 relative overflow-hidden pb-16">
            {/* Background Glows */}
            <div className="absolute top-[20%] left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-[80px]"></div>
            <div className="absolute top-[40%] right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-[100px]"></div>

            {/* Top Banner */}
            <div className="w-full bg-[#FFEBF0] text-[#E84E76] text-xs md:text-sm font-semibold text-center py-2 tracking-wide">
                ACESSO IMEDIATO + BÔNUS EXCLUSIVOS 💖
            </div>

            <div className="max-w-4xl w-full px-4 pt-12 md:pt-20 flex flex-col items-center text-center z-10">

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-[1.1] tracking-tight text-white mb-6">
                    Microfábrica de <br />
                    <span className="text-[#F05B7D]">Sabonetes Artesanais</span><br />
                    Gourmet do <span className="text-[#F05B7D]">Zero</span><br />
                    À <span className="text-[#F05B7D]">Primeira Venda</span>
                </h1>

                {/* Subheadline */}
                <p className="text-gray-300 text-lg md:text-xl font-light mb-8 max-w-3xl leading-relaxed">
                    Descubra como <span className="text-[#F05B7D] font-medium">mulheres comuns</span> estão criando uma <span className="text-[#F05B7D] font-medium">renda extra em casa</span> com sabonetes artesanais, começando do zero, com receitas simples e no <span className="text-[#F05B7D] font-medium">próprio ritmo</span>.
                </p>

                {/* Video Callout */}
                <div className="text-white font-medium mb-4 flex items-center justify-center gap-2">
                    <span>✨</span>
                    <p>ASSISTA O VÍDEO ABAIXO COMPLETO E DESCUBRA COMO!</p>
                    <span>✨</span>
                </div>

                {/* Wistia Video */}
                {/* Wistia Video */}
                <div className="w-full max-w-4xl mb-8 relative">
                    <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                            <div className="wistia_embed wistia_async_pgqg5ez6vi seo=false videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)' }}>
                                <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                                    <img src="https://fast.wistia.com/embed/medias/pgqg5ez6vi/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <a
                    href="https://wa.me/5511987880615?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20curso%20F%C3%A1brica%20Caseira%20de%20Sabonetes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-xl md:text-2xl py-5 px-10 rounded-xl w-full max-w-2xl transform transition-transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-pulseGlow text-center uppercase"
                >
                    Quero acessar a Microfábrica Caseira
                </a>

                {/* Secure Purchase */}
                <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-green" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Compra 100% segura e acesso imediato
                </div>
            </div>
        </div>
    );
}
