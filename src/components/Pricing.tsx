
import { Check } from 'lucide-react';

export function Pricing() {
    return (
        <section id="pricing" className="bg-white py-16 md:py-24 px-4 text-brand-dark">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase leading-tight">
                        Escolha o melhor plano <span className="text-[#F05B7D]">para você</span>
                    </h2>
                    <p className="text-gray-500 font-medium">Acesso imediato ao material completo e bônus</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

                    {/* Plano Essencial */}
                    <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm flex flex-col h-full relative">
                        <h3 className="text-2xl font-bold mb-2">Essencial</h3>
                        <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100">Ideal para quem quer apenas começar com o básico.</p>

                        <div className="mb-8">
                            <span className="text-sm font-semibold text-gray-400 line-through">De R$ 67,00</span>
                            <div className="flex items-end gap-1 text-[#F05B7D]">
                                <span className="text-2xl font-bold">R$</span>
                                <span className="text-6xl font-black leading-none">10</span>
                                <span className="text-2xl font-bold">,00</span>
                            </div>
                            <span className="text-sm text-gray-500 font-medium">Pagamento único</span>
                        </div>

                        <ul className="flex flex-col gap-4 mb-8 flex-grow">
                            <li className="flex gap-3 text-gray-700">
                                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                <span>Passo a Passo Completo em PDF</span>
                            </li>
                            <li className="flex gap-3 text-gray-700">
                                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                <span>Lista Básica de Materiais</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Check className="w-5 h-5 text-gray-200 shrink-0 mt-0.5" />
                                <span className="line-through">Bônus Exclusivos</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Check className="w-5 h-5 text-gray-200 shrink-0 mt-0.5" />
                                <span className="line-through">Planilha Automática</span>
                            </li>
                        </ul>

                        <a
                            href="https://wa.me/5511987880615?text=Ol%C3%A1!%20Quero%20o%20plano%20Essencial."
                            target="_blank" rel="noopener noreferrer"
                            className="w-full block py-4 text-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold uppercase transition-colors"
                        >
                            Quero o Essencial
                        </a>
                    </div>

                    {/* Plano Completo */}
                    <div className="border-2 border-brand-green rounded-2xl p-8 bg-white shadow-lg flex flex-col h-[105%] relative transform md:-translate-y-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white font-bold text-sm px-4 py-1 rounded-full uppercase tracking-wider">
                            MAIS ESCOLHIDO
                        </div>

                        <h3 className="text-2xl font-bold mb-2">Completo</h3>
                        <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100">O pacote completo com acesso a todos os bônus e atualizações.</p>

                        <div className="mb-8">
                            <span className="text-sm font-semibold text-gray-400 line-through">De R$ 147,00</span>
                            <div className="flex items-end gap-1 text-brand-green">
                                <span className="text-2xl font-bold">R$</span>
                                <span className="text-6xl font-black leading-none">19</span>
                                <span className="text-2xl font-bold">,90</span>
                            </div>
                            <span className="text-sm text-gray-500 font-medium">Pagamento único</span>
                        </div>

                        <ul className="flex flex-col gap-4 mb-8 flex-grow font-medium">
                            <li className="flex gap-3 text-gray-800">
                                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                <span>Passo a Passo Completo em PDF</span>
                            </li>
                            <li className="flex gap-3 text-gray-800">
                                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                <span>Lista Premium de Materiais e Fornecedores</span>
                            </li>
                            <li className="flex gap-3 text-gray-800">
                                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                <span><strong className="text-brand-green">TODOS</strong> os 6 Bônus Exclusivos</span>
                            </li>
                            <li className="flex gap-3 text-gray-800">
                                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                <span>Grupo VIP no WhatsApp</span>
                            </li>
                        </ul>

                        <a
                            href="https://wa.me/5511987880615?text=Ol%C3%A1!%20Quero%20o%20plano%20Completo."
                            target="_blank" rel="noopener noreferrer"
                            className="w-full block py-4 text-center rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg uppercase transition-transform hover:scale-105 shadow-md animate-pulseGlow"
                        >
                            Quero o Completo
                        </a>
                    </div>

                </div>

                {/* Guarantee Seal */}
                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <div className="bg-[#FFF8E7] rounded-2xl p-8 border border-[#FBE6A2]">
                        <h4 className="text-2xl font-bold text-yellow-600 mb-2">Garantia incondicional de 7 dias</h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            O risco é todo nosso! Se você comprar, acessar e achar que não é para você, basta nos enviar um único e-mail ou mensagem no WhatsApp e devolvemos 100% do seu dinheiro, sem perguntas.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
