import { Star } from 'lucide-react';

export function Testimonials() {
    const reviews = [
        {
            name: "Maria S.",
            text: "Eu estava desempregada e comecei a fazer só para presentear. Hoje, tiro mais de R$ 3.000 por mês só com encomendas da minha cidade! Obrigada por mudar minha vida.",
            image: "https://i.pravatar.cc/150?img=1"
        },
        {
            name: "Keyla C.",
            text: "As receitas são incríveis! Achei que seria difícil, mas o passo a passo é muito bem explicado. Já vendi tudo da minha primeira fornada.",
            image: "https://i.pravatar.cc/150?img=5"
        },
        {
            name: "Iranete F.",
            text: "Melhor investimento que já fiz. Além de uma terapia, virou minha principal fonte de renda. O suporte de vocês é maravilhoso.",
            image: "https://i.pravatar.cc/150?img=9"
        }
    ];

    return (
        <section className="bg-white text-brand-dark py-16 md:py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-[#EAB308] text-[#EAB308]" />
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mais de <span className="text-[#F05B7D]">8.324 alunas</span> já mudaram de vida
                    </h2>
                    <p className="text-gray-500 font-medium">
                        Veja o que elas estão dizendo sobre a Microfábrica de Sabonetes Artesanais:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm relative pt-12">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-16 h-16 rounded-full border-4 border-white shadow-sm absolute -top-8 left-6 object-cover"
                            />
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4 italic text-sm md:text-base leading-relaxed">
                                "{review.text}"
                            </p>
                            <p className="font-bold text-gray-900">{review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
