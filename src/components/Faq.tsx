import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Faq() {
    const faqs = [
        {
            q: "Preciso ter experiência para fazer o curso?",
            a: "Não! O método foi desenvolvido para pessoas completamente leigas. Você vai aprender desde os materiais básicos até a primeira barra de sabonete."
        },
        {
            q: "Por quanto tempo terei acesso ao conteúdo?",
            a: "O acesso é vitalício. Você pode assistir e revisar quando e quantas vezes quiser, no seu próprio tempo."
        },
        {
            q: "Em quanto tempo consigo começar a ganhar dinheiro com isso?",
            a: "Muitas das nossas alunas já têm o retorno do investimento logo na primeira semana, vendendo a primeira fornada para amigos e vizinhos."
        },
        {
            q: "Preciso de materiais caros para começar?",
            a: "Definitivamente não. Mostramos no guia como você pode iniciar sua produção usando utensílios que provavelmente já tem na sua cozinha."
        },
        {
            q: "Como vou acessar o curso?",
            a: "Logo após a confirmação do pagamento, você receberá um e-mail com seu login e senha exclusivos para acessar a área de membros vip."
        },
        {
            q: "O curso é físico ou digital?",
            a: "É 100% digital. Você terá o PDF detalhado pronto para acesso imediato - e não recebe nada na sua casa, todo acesso é por email."
        },
        {
            q: "E se eu comprar e não gostar?",
            a: "Você tem a nossa garantia incondicional de 7 dias. Se não se adaptar, devolvemos todo o seu investimento."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-brand-light py-16 md:py-24 px-4 text-brand-dark">
            <div className="max-w-3xl mx-auto">

                <div className="text-center mb-12">
                    <div className="inline-block bg-[#8C6D65] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4">
                        Tire suas dúvidas
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Perguntas <span className="text-[#8C6D65]">Frequentes</span>
                    </h2>
                    <p className="text-gray-500">
                        Tudo o que você precisa saber antes de começar sua jornada na saboaria artesanal
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border text-left border-gray-100 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
                        >
                            <button
                                className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-800 hover:text-[#F05B7D] transition-colors"
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.q}
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-5 pt-0 text-gray-600 text-sm md:text-base leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="bg-[#FAE9EE] text-[#D84568] px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2">
                        🛡️ Compra segura com <strong>garantia de satisfação</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}
