
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export function Methodology() {
    const benefits = [
        {
            icon: <BookOpen className="w-10 h-10 text-[#F05B7D]" />,
            title: "Feito para iniciantes",
            description: "Mesmo que você nunca tenha feito um sabonete antes, o passo a passo é simples e direto ao ponto."
        },
        {
            icon: <Sparkles className="w-10 h-10 text-[#F05B7D]" />,
            title: "Materiais acessíveis",
            description: "Você não precisa de equipamentos caros. Tudo pode ser feito na cozinha da sua casa com materiais baratos."
        },
        {
            icon: <CheckCircle2 className="w-10 h-10 text-[#F05B7D]" />,
            title: "Receitas testadas e aprovadas",
            description: "Aprenda apenas as fórmulas que mais vendem e que dão o maior lucro no mercado artesanal."
        }
    ];

    return (
        <section className="bg-brand-dark text-white py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px]"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 max-w-2xl mx-auto leading-tight">
                    Por que esse método <span className="text-[#F05B7D]">funciona tão bem?</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
