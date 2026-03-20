import { Menu, ShoppingBag, Activity, Star, BookOpen, Dumbbell, Users, Timer, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen">
      {/* Top Navigation / Logo */}
      <nav className="flex items-center bg-white border-b border-primary/10 p-4 justify-between sticky top-0 z-50">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <Menu className="w-8 h-8" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-primary text-xl font-extrabold tracking-tighter leading-none">NAÍSA MARTA</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold">Nutricionista</span>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="text-primary cursor-pointer">
            <ShoppingBag className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Método Comprovado
            </div>
            <h1 className="text-slate-900 text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-6">
              RECUPERE SUA <span className="text-primary">AUTOESTIMA</span> E DERRETA ATÉ <span className="text-accent">8KG EM 30 DIAS!</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8">
              Participe do Desafio 30 Dias e transforme seu corpo com o método exclusivo da nutricionista Naísa Marta. Sem dietas malucas, apenas resultados reais.
            </p>
            <button className="w-full sm:w-auto gold-gradient text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-transform cursor-pointer">
              QUERO MEU ACESSO AGORA!
            </button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white">
              <img alt="Nutricionista sorridente" className="w-full h-full object-cover" src="https://raw.githubusercontent.com/Wallyson27/Naisa_MArta/6f6810e7e9c266db46ab1c762c8fb8fe9f2f4d8d/IMG%20NIASA%2010.jpeg" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] text-white ring-2 ring-white">MS</div>
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] text-white ring-2 ring-white">JM</div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center text-[10px] text-white ring-2 ring-white">+2k</div>
                </div>
                <p className="text-xs font-bold text-slate-700">+2.450 mulheres transformadas este mês</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-primary/5 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Você está cansada de olhar no espelho e não gostar do que vê?
          </h2>
          <div className="space-y-4 text-left max-w-md mx-auto">
            {[
              "Sofre com o Efeito Sanfona constantemente",
              "Sente que não tem tempo para dietas complexas",
              "Desânimo e baixa autoestima ao se vestir"
            ].map((text, i) => (
              <label key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-primary/10 cursor-pointer">
                <input defaultChecked disabled type="checkbox" className="h-6 w-6 rounded border-slate-300 text-primary focus:ring-primary appearance-none bg-primary border-primary bg-center bg-no-repeat" style={{backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`}} />
                <span className="text-slate-700 font-medium">{text}</span>
              </label>
            ))}
          </div>
          <p className="mt-8 text-primary font-bold italic">Se você respondeu "sim", este desafio foi feito para você.</p>
        </div>
      </section>

      {/* Interactive Simulator */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-accent w-6 h-6" />
              <h3 className="text-xl font-bold">Simulador de Rotina Inteligente</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-400">Qual seu objetivo principal?</label>
                <select className="bg-slate-800 border-slate-700 rounded-lg text-white focus:ring-accent focus:border-accent p-2 outline-none">
                  <option>Perder Gordura Abdominal</option>
                  <option>Ganhar Massa Magra</option>
                  <option>Apenas Saúde/Bem-estar</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-400">Seu nível de atividade?</label>
                <select className="bg-slate-800 border-slate-700 rounded-lg text-white focus:ring-accent focus:border-accent p-2 outline-none">
                  <option>Sedentário (0-1x semana)</option>
                  <option>Moderado (2-3x semana)</option>
                  <option>Ativo (4+x semana)</option>
                </select>
              </div>
            </div>
            <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left flex-1">
                <p className="text-accent font-bold uppercase text-xs tracking-widest mb-1">Previsão Estimada</p>
                <p className="text-2xl font-bold">-6.5kg em 30 dias</p>
                <p className="text-slate-400 text-sm">Baseado no seu perfil e no método Naísa Marta.</p>
              </div>
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-bold text-sm whitespace-nowrap cursor-pointer transition-colors">
                Ver Plano Detalhado
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Quem suou, aprovou!</h2>
            <p className="text-slate-500">Histórias reais de mulheres que transformaram suas vidas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img alt="Mariana S." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFFEy0Tth69IX4WtItFAyoG2NG5kuY1S_wjFQPqGR4MUcRCLcDI33d7Pt_TyYrUpFb15SVs3qJuZGKng8hvOdPo0xwduEKVmv3BoZxiMkaGzlp2gOQNR7Ppi24_tEYwfigx5m-4nfXB5KvPA9PkxSk0KXjCdlMm8BdJ6agCgJl1HAgPiSSjb7VOeoRjS8cUYxbU2mTf8Si4AwVOxrPBsyvDg26JoD6MRDwquXD0b1KabOBzXwSGw0kXcWqoDDYdUUGg5VNX64Z5q4" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Mariana S.</p>
                  <div className="flex text-accent text-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 italic">"Perdi 7kg e minhas roupas voltaram a servir. O melhor é que não passei fome!"</p>
              <div className="mt-4 pt-4 border-t border-slate-50">
                <span className="text-primary font-bold text-sm">- 7.2kg eliminados</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img alt="Juliana M." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDejarHVjqwBnsomteY5b9hwVP9usIHajzY4bYiZYn2V3NeIDJ9KH8fnIpNN9FLh5kE44qsyH1KGjDx1Sf4k9honshajq-wK2lEFeGTnNC4KOPjxTo_70BBAl3NsHCns6xVOEz8voTHf8G2MwkwJb9nbzXeEu6-JDO3XldBX5Qhvvz1dMzqC70Qz3W4LfJ3i0ZIGtF1dwy43CarnCtJv2BWbxgWRfhGbvRg-xhO1Z3WrtbUfoYrdhlATIDPSu-pOmNSFQb_aQIZUO4" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Juliana M.</p>
                  <div className="flex text-accent text-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 italic">"O grupo VIP me manteve motivada todos os dias. Amei as receitas práticas."</p>
              <div className="mt-4 pt-4 border-t border-slate-50">
                <span className="text-primary font-bold text-sm">- 5.8kg eliminados</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img alt="Carla P." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM74bxUoX76UBzH_tv9jOXBovLJiAP4GuBoGOyW5ybOxdsK24JlXBH3k5e3mYVYzkzwIR3D495bho9mu_7W-DYv1qMklJPatOZiPR_00FiS-78jhCA406cTOEnMI-KgRE3zCJjj0Zj1h72yeBk_QAFSnVLMR5_ZAfEbF6njvuwSsHnJcjw0IgPAB2hHnymofiwqCpeSp9Q8JP9yP0aUfiIRPP3Kfk5l20IZZKviFWDzwFcIQ_KRjl-5zYFixPYlQEzQCVqCHqDrtE" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Carla P.</p>
                  <div className="flex text-accent text-sm">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 italic">"Nunca achei que conseguiria em 30 dias. Mudou totalmente minha rotina."</p>
              <div className="mt-4 pt-4 border-t border-slate-50">
                <span className="text-primary font-bold text-sm">- 8.1kg eliminados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer/Stack */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 italic">Isso é tudo o que você vai levar:</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <BookOpen className="text-accent w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl">Guia Principal: Protocolo 30 Dias</h4>
                <p className="text-white/70 text-sm">Cardápio completo passo a passo desenvolvido por nutricionista.</p>
              </div>
              <div className="hidden sm:block text-accent font-bold">R$ 47,00</div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Dumbbell className="text-accent w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl">Manual HIIT: Treinos em Casa</h4>
                <p className="text-white/70 text-sm">Acelere o metabolismo com apenas 15 minutos diários.</p>
              </div>
              <div className="hidden sm:block text-accent font-bold">R$ 37,00</div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-accent rounded-2xl border border-accent/20">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Users className="text-white w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl">BÔNUS: Grupo VIP WhatsApp</h4>
                <p className="text-white/90 text-sm">Suporte direto e comunidade motivacional exclusiva.</p>
              </div>
              <div className="hidden sm:block text-white font-bold">GRÁTIS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-lg inline-flex items-center gap-2 font-bold animate-pulse">
            <Timer className="w-5 h-5" />
            OFERTA POR TEMPO LIMITADO: 00:14:59
          </div>
          <div className="mb-2 text-slate-400 line-through text-lg">De R$ 119,90</div>
          <div className="mb-6 flex flex-col items-center">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Apenas hoje por</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">R$</span>
              <span className="text-7xl font-black text-primary">19,90</span>
            </div>
            <span className="text-sm text-slate-400">Pagamento único, acesso vitalício</span>
          </div>
          <button className="w-full gold-gradient text-white py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-accent/40 mb-6 hover:scale-[1.02] transition-transform cursor-pointer">
            QUERO MEU ACESSO AGORA!
          </button>
          <div className="flex items-center justify-center gap-6 opacity-60 grayscale">
            <img alt="Visa" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4LJzA44eqXi1UZtl88wu0DfCA0zlJQmXYKxDF8t1FuFVyTWpAG4QJn2z083F_1dry-7Sb2CKVOhhkWLAXX7_bHheggg42UV0VoPZTdy1cuPb7qPHkfGolKAieCp-961aM86Hg-OHVKylXX6BxWlqnsj1AmUoMxiAg5r7Gwz5-bzX7gAzbAt3UHDWSwJxUa0LQ2oIkdP5XL-L6x_pMYLD_Z0W73kI6lNfoPJFJM2NqPKgFQws_p22DJjCNpJx4n37Cu3yiJ442P60" referrerPolicy="no-referrer" />
            <img alt="Mastercard" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFNsM2ThVYuPmN_X2Z_nUGI1o9VKJvNWOerRPQPfV0NgYwKlNqwpFXn4UJqKrNsAny_Bnw6gq8ze9FFRZ3JlSnA-z1QvCbwCmPhdC5gBbykpoKBh8EX1az8bjHMtBLiWRt13H6-gONuMBVnASbUBYAbcC8DT-_y3BMX95SCXBl1CTaSYPn3HuRLzFzjN2VK7FydWqeDlobaMm4P-ecvExD0c3IfAloDQjcr_qzqPsp1300UxZIHfI6aaN_6plgSPnpHy5VtjtN4b8" referrerPolicy="no-referrer" />
            <img alt="Pix" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA18BsFLAbKasNKv8SWF1c9wAH-7UB9KFYRsOj11OV5vZUiZVu2r-4H-NTMdFvrsLmEsVM9CPcBWZDEU0bi63wJC1jVISP52ao58lSWt4wDlYs1l_OoAivY1HGKebr1WLgDLhmAam_i8kf5LYHlX1e85uiZ9JGaQHD-fpMA2_ZCG3wbNRncIawY2EbBF-nn8JKDK_aRckVfmhTyuVkjr-rqCpWEKEPN-pqFMYyYkMEN5MBwB0vbgIIJe_mXcF_vG0wMuhihBNYIXwY" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 px-4 border-y border-slate-100">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
          <div className="w-32 h-32 shrink-0">
            <img alt="Selo de Garantia" className="w-full h-full object-contain rounded-full border-4 border-accent/20 p-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKrGAm8kg5Y_t6knD7faXDKxaVTlxqjMSSxmk-zMV1YNMCDfZhGjAADycBoV0LsJmTyUAjpeUqTjZPrcnQuB9GcL6YUrvBEgXu21vBQ24sHAl-AD-8AlY2CkcnGIKDi10V_xkRuoVuFFWnWkHw8CrLQ1UgKm443PhkF26KD4BlPEd-Ao4wN33L8SXsB3ZMCyzIkzctd0c82x7oTDKsoSfYN-j6S0X0uhatMzMfKqoUz_phA6xbQO6CFqPA_oGWjvHQMX7wJQzEl80" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">Garantia Blindada: 7 Dias Risco Zero</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Você tem 7 dias para testar o método. Se não ver resultados ou não gostar do material, basta enviar um único e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden" open>
              <summary className="p-6 flex items-center justify-between cursor-pointer font-bold text-slate-900 list-none">
                Preciso tomar remédios ou suplementos?
                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm">
                Não! O método é 100% baseado em alimentação natural e estratégica. Nosso foco é reeducar seu corpo para que ele queime gordura de forma natural.
              </div>
            </details>
            <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
              <summary className="p-6 flex items-center justify-between cursor-pointer font-bold text-slate-900 list-none">
                Por quanto tempo terei acesso ao material?
                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm">
                O acesso é vitalício! Você paga uma única vez e pode consultar o material sempre que precisar.
              </div>
            </details>
            <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
              <summary className="p-6 flex items-center justify-between cursor-pointer font-bold text-slate-900 list-none">
                Funciona para quem não tem tempo?
                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm">
                Com certeza. As receitas são rápidas (menos de 15 min) e os treinos HIIT levam apenas 15 minutos por dia, podendo ser feitos em qualquer lugar.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-slate-400 text-center text-sm border-t border-slate-800">
        <div className="flex flex-col items-center mb-8">
          <span className="text-white text-lg font-extrabold tracking-tighter leading-none mb-1">NAÍSA MARTA</span>
          <span className="text-[8px] tracking-[0.3em] uppercase text-accent font-bold">Nutricionista</span>
        </div>
        <p className="mb-4">© 2024 Desafio 30 Dias. Todos os direitos reservados.</p>
        <p className="max-w-lg mx-auto leading-relaxed">
          Os resultados podem variar de pessoa para pessoa. Sempre consulte um médico antes de iniciar qualquer programa de exercícios ou dieta.
        </p>
      </footer>
    </div>
  );
}
