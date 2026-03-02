import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';

export function SocialProof() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const whatsappPrints = [
        "https://placehold.co/400x700/22C55E/FFFFFF?text=Depoimento+1",
        "https://placehold.co/400x700/22C55E/FFFFFF?text=Depoimento+2",
        "https://placehold.co/400x700/22C55E/FFFFFF?text=Depoimento+3",
        "https://placehold.co/400x700/22C55E/FFFFFF?text=Depoimento+4",
    ];

    return (
        <section className="py-16 md:py-24 bg-brand-light text-brand-dark overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        O que <span className="text-[#F05B7D]">nossos alunos</span> dizem
                    </h2>
                    <p className="text-gray-600 font-medium">
                        Resultados e satisfação de quem já aprendeu com nosso guia passo a passo
                    </p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex gap-4">
                            {whatsappPrints.map((print, index) => (
                                <div key={index} className="flex-[0_0_80%] md:flex-[0_0_30%] min-w-0">
                                    <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
                                        <img
                                            src={print}
                                            alt={`Depoimento WhatsApp ${index + 1}`}
                                            className="w-full h-auto rounded-xl object-cover pointer-events-none"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-800 hover:text-[#F05B7D] transition-colors z-10 hidden md:flex"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-800 hover:text-[#F05B7D] transition-colors z-10 hidden md:flex"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
