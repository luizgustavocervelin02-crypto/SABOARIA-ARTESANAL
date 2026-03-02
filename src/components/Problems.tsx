
import { XCircle, CheckCircle } from 'lucide-react';

export function Problems() {
    const problems = [
        "Sente que trabalha muito e ganha pouco?",
        "Não tem tempo para ficar com a família?",
        "Não sabe o que fazer para ter uma renda extra?",
        "Gostaria de ter seu próprio negócio, mas tem pouco para investir?"
    ];

    return (
        <section className="bg-white text-brand-dark py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 uppercase leading-tight">
                    Se você sente isso, esse método <span className="text-[#F05B7D]">é pra você:</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {problems.map((problem, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-3 items-start text-gray-500">
                                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                                <p className="font-medium text-lg leading-snug">{problem}</p>
                            </div>
                            <div className="w-full h-px bg-gray-200 my-2"></div>
                            <div className="flex gap-3 items-start text-brand-green">
                                <CheckCircle className="w-6 h-6 shrink-0 mt-0.5" />
                                <p className="font-medium">
                                    A Saboaria Artesanal resolve isso e te dá liberdade!
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
