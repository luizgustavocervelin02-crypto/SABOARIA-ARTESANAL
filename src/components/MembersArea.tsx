import { MonitorPlay, RefreshCw, Layers } from 'lucide-react';

export function MembersArea() {
    const features = [
        {
            icon: <MonitorPlay className="w-6 h-6 text-brand-green" />,
            title: "Plataforma Intuitiva",
            desc: "Assista as aulas de qualquer dispositivo, seja celular, tablet ou computador, de forma simples e rápida."
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-brand-green" />,
            title: "Acesso Vitalício",
            desc: "O curso é seu para sempre. Pague uma vez e tenha acesso a todas as futuras atualizações sem custo."
        },
        {
            icon: <Layers className="w-6 h-6 text-brand-green" />,
            title: "Materiais de Apoio",
            desc: "Baixe todas as planilhas, PDFs e guias complementares direto na plataforma para estudar offline."
        }
    ];

    return (
        <section className="bg-brand-dark py-16 md:py-24 text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Conheça sua <span className="text-[#F05B7D]">Área de Membros</span>
                    </h2>
                    <p className="text-gray-400 font-medium text-lg">
                        Um ambiente de estudos moderno, rápido e fácil de usar.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Mockup Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-green/20 blur-[100px] rounded-full"></div>
                        <img
                            src="https://placehold.co/800x600/121212/F05B7D?text=Área+de+Membros+na+Prática"
                            alt="Área de Membros Mockup"
                            className="w-full h-auto rounded-3xl shadow-[0_0_50px_rgba(240,91,125,0.15)] relative z-10 border border-white/5"
                        />
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-brand-green/10 rounded-xl shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
