import { Gift, Book, FileText, Award, Users, Presentation } from 'lucide-react';

export function Bonus() {
    const bonuses = [
        {
            icon: <Book className="w-8 h-8 text-[#F05B7D]" />,
            title: "Guia de Fornecedores Secretos",
            value: "97,00",
            description: "Lista completa com os melhores e mais baratos fornecedores de matéria-prima e embalagens do Brasil. Compre direto da fonte e aumente seu lucro."
        },
        {
            icon: <FileText className="w-8 h-8 text-[#F05B7D]" />,
            title: "Planilha de Precificação",
            value: "47,00",
            description: "Uma planilha automática onde você joga os custos e ela te dá exatamente por quanto você deve vender para ter lucro real."
        },
        {
            icon: <Gift className="w-8 h-8 text-[#F05B7D]" />,
            title: "Receitas de Linha Pet",
            value: "67,00",
            description: "Aprenda a fazer sabonetes específicos para cães e gatos, um dos mercados que mais crescem e dão dinheiro."
        },
        {
            icon: <Presentation className="w-8 h-8 text-[#F05B7D]" />,
            title: "Rótulos e Etiquetas Prontas",
            value: "50,00",
            description: "Modelos editáveis e lindos para você imprimir e deixar seus sabonetes com cara de marca cara e profissional."
        },
        {
            icon: <Users className="w-8 h-8 text-[#F05B7D]" />,
            title: "Acesso à Comunidade",
            value: "147,00",
            description: "Grupo exclusivo de alunas para trocar ideias, tirar dúvidas e ver o que está funcionando para outras pessoas."
        },
        {
            icon: <Award className="w-8 h-8 text-[#F05B7D]" />,
            title: "Certificado Oficial",
            value: "35,00",
            description: "Ao final do treinamento você ganha um certificado lindo de conclusão, atestando sua qualificação em saboaria."
        }
    ];

    return (
        <section className="bg-brand-dark py-16 md:py-24 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Bônus <span className="text-[#F05B7D]">Exclusivos</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Presentes para Alavancar sua Saboaria
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                                {bonus.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                            <p className="text-xs font-semibold text-brand-green uppercase tracking-wider mb-4 border border-brand-green/30 bg-brand-green/10 inline-block px-3 py-1 rounded-full">
                                De R$ {bonus.value} Por R$ 0,00
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {bonus.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
