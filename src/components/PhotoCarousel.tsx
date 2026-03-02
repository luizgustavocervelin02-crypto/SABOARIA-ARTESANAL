import useEmblaCarousel from 'embla-carousel-react';

export function PhotoCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    const photos = [
        "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1584305574647-0cc9ec5f4bb6?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1611078516584-36a5ac1224f8?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1584305575796-068d875a6c11?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=600"
    ];

    return (
        <section className="py-12 bg-brand-light text-brand-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative">
                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex gap-4 md:gap-6">
                            {photos.map((src, index) => (
                                <div key={index} className="flex-[0_0_80%] md:flex-[0_0_25%] min-w-0 relative">
                                    <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full z-10">
                                        {index + 1}/{photos.length}
                                    </span>
                                    <div className="aspect-square bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
                                        <img
                                            src={src}
                                            alt={`Sabonete Artesanal Exemplo ${index + 1}`}
                                            className="w-full h-full object-cover pointer-events-none hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
