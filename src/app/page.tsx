'use client'
import CardNatural from "@/components/CardNatural";
import CardPromotion from "@/components/CardPromotion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

// import Bandaged from "@/assets/icons/bandaged.svg";
// import Bathroom from "@/assets/icons/bathroom.svg";
// import Eye from "@/assets/icons/eye.svg";
// import Foot from "@/assets/icons/foot.svg";
// import Leg from "@/assets/icons/leg.svg";
// import Pills from "@/assets/icons/pills.svg";
// import Syringe from "@/assets/icons/syringe.svg";


export default function Home() {
  return (
    <>
      <Header />
      {/* Initital */}
      <main className="flex h-screen w-full items-center justify-center">
        <div className="bg-pattern pt-20 flex flex-col items-center justify-center w-full h-full text-center text-secondary px-4">
          <Image
            src="/assets/logo-glicovit.png"
            alt="Glicovit"
            width={200}
            height={200}
            quality={100}
            className="object-cover object-center"
          />
          <h4 className="text-xl my-2">
          A solução completa para o diabetes
          </h4>
          <Image
            src="/assets/frascos/5-Frascos.png"
            alt="Glicovit"
            width={500}
            height={500}
            quality={100}
            className="object-cover object-center"
          />
          <Button variant="secondary">
            Quero vencer o diabetes
          </Button>
        </div>
      </main>

      {/* Section 2 */}
      <section className="w-full p-4">
        <div className="flex flex-col gap-10 bg-secondary w-full h-full py-10 rounded-2xl">
          <h1 className="px-6 text-center leading-8 text-3xl font-bold text-primary">
            Veja as melhorias que o GlicoVIT pode fazer na sua vida!
          </h1>

          <div className="flex gap-4 snap-x snap-proximity px-6 scrollbar-hide overflow-x-auto">
            <div className="snap-center flex-shrink-0">
              <img src="/assets/beneficio/1.png" className="h-44 aspect-video object-cover rounded-lg" />
              <div className="text-center pt-3">
                <h4 className="text-xl font-semibold text-primary">
                  Retinopatia
                </h4>
              </div>
            </div>
            <div className="snap-center flex-shrink-0">
              <img src="/assets/beneficio/2.jpg" className="h-44 aspect-video object-cover rounded-lg" />
              <div className="text-center pt-3">
                <h4 className="text-xl font-semibold text-primary">
                  Neuropatia
                </h4>
              </div>
            </div>
            <div className="snap-center flex-shrink-0">
              <img src="/assets/beneficio/3.jpg" className="h-44 aspect-video object-cover rounded-lg" />
              <div className="text-center pt-3">
                <h4 className="text-xl font-semibold text-primary">
                  Feridas
                </h4>
              </div>
            </div>
            <div className="snap-center flex-shrink-0">
              <img src="/assets/beneficio/4.jpg" className="h-44 aspect-video object-cover rounded-lg" />
              <div className="text-center pt-3">
                <h4 className="text-xl font-semibold text-primary">
                  Dormência e Formigamentos
                </h4>
              </div>
            </div>
            <div className="snap-center flex-shrink-0">
              <img src="/assets/beneficio/5.jpg" className="h-44 aspect-video object-cover rounded-lg" />
              <div className="text-center pt-3">
                <h4 className="text-xl font-semibold text-primary">
                  Falta de Energia e Memória
                </h4>
              </div>
            </div>
            <div className="snap-center flex-shrink-0">
              <img src="/assets/beneficio/6.jpg" className="h-44 aspect-video object-cover rounded-lg" />
              <div className="text-center pt-3">
                <h4 className="text-xl font-semibold text-primary">
                  Sensação Bexiga Cheia
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section 3 */}
      <section className="h-[60vh] flex flex-col items-center text-center justify-center gap-5 text-secondary">
        <h1 className="text-3xl font-bold">
          Benefícios
        </h1>
        <ul className="text-md space-y-1">
          <li>Diminui os Picos de Insulina</li>
          <li>Acaba com os Enjoôs e Ânsias</li>
          <li>Da um fim as Dormências</li>
          <li>Ajuda no contro de Fluxo Urinário</li>
          <li>Melhora em até 98% a Visão</li>
          <li>Acaba com Dores nas Pernas e Mãos</li>
          <li>Pode acabar com a dependência de químicos</li>
        </ul>
      </section>

      {/* section 4 */}
      <div className="bg-pattern py-20 flex flex-col gap-5 items-center justify-center w-full h-full text-center text-secondary px-4">
        <h1 className="text-3xl font-bold">
          Única fórmula que combate as<br/>Moléculas DB7
        </h1>
        <Button variant="secondary">
          Quero vencer o diabetes
        </Button>
      </div>
      
      {/* section 5 */}
      <section className="py-20 flex flex-col text-center gap-10">
        <h3 className="text-2xl font-bold text-secondary">
        Descubra os ativos naturais que irão deixar sua glicose estável
        </h3>
        <div className="flex gap-4 snap-x px-6 scrollbar-hide overflow-x-auto">
          <div className="snap-center">
            <CardNatural
              image="/assets/ingredientes/resveratrol.png"
              title="Resveratrol Americano"
              description="O resveratrol é encontrado em frutas roxas e beneficia a saúde, incluindo a diabetes. Estudos comprovam que ele aumenta a sensibilidade à insulina, controlando os níveis de açúcar no sangue. Seu consumo é importante para pessoas com diabetes."
            />
          </div>
          <div className="snap-center">
            <CardNatural
              image="/assets/ingredientes/coenzima.png"
              title="Coenzima Q10"
              description="A coenzima Q10 é uma substância natural que pode trazer benefícios significativos para pessoas com diabetes. Além de ajudar na produção de energia celular, ela também possui propriedades antioxidantes que combatem o estresse oxidativo, reduzindo os danos causados pelo excesso de açúcar no sangue."
            />
          </div>
          <div className="snap-center">
            <CardNatural
              image="/assets/ingredientes/magnesio.png"
              title="Magnésio"
              description="Este mineral oferece uma ajuda decisiva no processo de absorção da glicose do sangue para as células. Deste modo, aumentando a sensibilidade das células à insulina, o aporte adequado deste nutriente mineral pode desempenhar uma função vital para o bem-estar de quem sofre de diabetes tipo 2."
            />
          </div>
          <div className="snap-center">
            <CardNatural
              image="/assets/ingredientes/oleo.png"
              title="Óleo de Persêa"
              description="O óleo da semente da persêa americana é benéfico para pessoas com diabetes, ajudando a controlar o açúcar no sangue e reduzindo o risco de doenças cardiovasculares. Muito confundido com óleo de abacate, a somente da persêa é muito mais rica em ácidos graxos saudáveis e é uma opção poderosa contra a Glicose descontrolada."
            />
          </div>
        </div>
      </section>


      {/* section 6 */}
      <section className="bg-pattern py-20 flex flex-col gap-5 items-center justify-center w-full h-full text-center text-secondary px-4">
        <h1 className="text-2xl font-bold">
          O poder ativo que elimine<br/>por completo as<br/>moléculas DB7 do corpo
        </h1>
        <Button variant="secondary">
          Quero vencer o diabetes
        </Button>
      </section>


      {/* section 7 */}
      <section className="py-20 flex flex-col gap-5 items-center justify-center w-full h-full text-center text-secondary px-4">
        <Image
          src="/assets/frascos/caixa-e-frasco.png"
          alt="Glicovit"
          width={400}
          height={400}
          quality={100}
          className="object-cover object-center"
        />
        <h1 className="text-2xl font-bold">
          Testes clínicos do GlicoVIT
        </h1>
        <div className="flex flex-col gap-6 pt-5 pb-10">
          <div className="w-full flex gap-4 text-start items-center justify-center">
            <p className="text-5xl font-bold">76%</p>
            <p className="text-3xl font-medium">|</p>
            <p className="text-base font-semibold">Redução dos<br/>Picos de Insulina</p>
          </div>
          <div className="w-full flex gap-4 text-start items-center justify-center">
            <p className="text-5xl font-bold">81%</p>
            <p className="text-3xl font-medium">|</p>
            <p className="text-base font-semibold">Menor Dependência<br/>dos Químicos</p>
          </div>
          <div className="w-full flex gap-4 text-start items-center justify-center">
            <p className="text-5xl font-bold">72%</p>
            <p className="text-3xl font-medium">|</p>
            <p className="text-base font-semibold">Melhoria na<br/>Visão</p>
          </div>
          <div className="w-full flex gap-4 text-start items-center justify-center">
            <p className="text-5xl font-bold">84%</p>
            <p className="text-3xl font-medium">|</p>
            <p className="text-base font-semibold">Redução de Todos os<br/>Sintomas do Diabetes</p>
          </div>
          <p className="text-xs">Liberado pela ANVISA no RDC 240/18</p>
        </div>
        <Button variant="secondary">
          Quero vencer o diabetes
        </Button>
      </section>

      {/* section 8 */}
      <section className="py-20 flex flex-col text-center gap-10">
        <h3 className="text-2xl font-bold text-secondary">
        Escolha 5 meses para melhores resultados!
        </h3>
        <div className="flex gap-4 snap-x px-6 scrollbar-hide overflow-x-auto">
          <div className="snap-center">
            <CardPromotion
              image="/assets/frascos/12-frascos.png"
              promotionTitle="12 meses de tratamento"
              paymentPlan="até 12x de"
              monthlyPrice="R$ 69,70"
              fullPrice="R$ 697,00"
            />
          </div>
          <div className="snap-center">
            <CardPromotion
              image="/assets/frascos/5-frascos.png"
              promotionTitle="5 meses de tratamento"
              paymentPlan="até 12x de"
              monthlyPrice="R$ 39,70"
              fullPrice="R$ 397,00"
            />
          </div>
          <div className="snap-center">
            <CardPromotion
              image="/assets/frascos/3-frascos.png"
              promotionTitle="3 meses de tratamento"
              paymentPlan="até 12x de"
              monthlyPrice="R$ 29,70"
              fullPrice="R$ 297,00"
            />
          </div>
          <div className="snap-center">
            <CardPromotion
              image="/assets/frascos/1-frasco.png"
              promotionTitle="1 mês de tratamento"
              paymentPlan="até 12x de"
              monthlyPrice="R$ 19,70"
              fullPrice="R$ 227,00"
            />
          </div>
        </div>
      </section>

    </>
  )
}
