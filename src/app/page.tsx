'use client'
import CardNatural from "@/components/CardNatural";
import CardPromotion from "@/components/CardPromotion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Mousewheel, Pagination } from "swiper/modules";
import CardSick from "@/components/CardSick";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useMediaQuery from "@/components/useMediaQuery";
import Counter from "@/components/ui/Counter";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle } from 'react-icons/md'

export default function Home() {
  const isFullScreen = useMediaQuery('(min-width:1024px)');
  const isLargeScreen = useMediaQuery('(min-width:768px)');
  const isMediumScreen = useMediaQuery('(min-width:640px)');
  const isSmallScreen = useMediaQuery('(min-width:480px)');

  const slidesPerView = isFullScreen ? 4 : isLargeScreen ? 3 : isMediumScreen ? 2 : isSmallScreen ? 1.5 : 1.5;

  return (
    <>
      {/* Initital */}
      <main className="flex h-[100svh] w-full items-center justify-center">
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
            src="/assets/frascos/5-frascos.png"
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

      {/* Section 2 - Melhorias */}
      <section className="w-full max-w-2xl mx-auto p-4">
        <div className="flex flex-col gap-10 bg-secondary w-full h-full py-10 rounded-2xl">
          <h1 className="px-6 text-center leading-8 text-2xl font-bold text-primary">
            Veja as melhorias que o GlicoVIT<br/>pode fazer na sua vida!
          </h1>

          <Swiper
            className="w-full"
            spaceBetween={10}
            slidesPerView={1.4}
            centeredSlides={true}
            modules={[Mousewheel, Pagination]}
            mousewheel={true}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <CardSick
                image="/assets/beneficio/1.png"
                title="Retinopatia"
              />
            </SwiperSlide>

            <SwiperSlide>
              <CardSick
                image="/assets/beneficio/2.jpg"
                title="Neuropatia"
              />
            </SwiperSlide>

            <SwiperSlide>
              <CardSick
                image="/assets/beneficio/3.jpg"
                title="Feridas"
              />
            </SwiperSlide>

            <SwiperSlide>
              <CardSick
                image="/assets/beneficio/4.jpg"
                title="Dormência e Formigamentos"
              />
            </SwiperSlide>

            <SwiperSlide>
              <CardSick
                image="/assets/beneficio/5.jpg"
                title="Falta de Energia e Memória"
              />
            </SwiperSlide>

            <SwiperSlide>
              <CardSick
                image="/assets/beneficio/6.jpg"
                title="Sensação Bexiga Cheia"
              />
            </SwiperSlide>
          </Swiper>

          {/* <div className="flex gap-4 snap-x snap-proximity px-6 scrollbar-hide overflow-x-auto">
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
          </div> */}
        </div>
      </section>


      {/* section 3 - Beneficios */}
      <section id="beneficios" className="h-[60vh] max-w-3xl mx-auto px-4 flex flex-col items-center text-center justify-center text-secondary">
        <h1 className="text-2xl text-secondary font-bold">
          Benefícios do GlicoVIT
        </h1>
        <h4 className="text-lg font-medium text-secondary pb-10 pt-4">
          Enfrentar o diabetes com os recursos certos pode fazer toda a diferença. Nossos benefícios direcionados oferecem suporte em áreas cruciais para proporcionar um alívio duradouro e promover um estilo de vida mais saudável.
        </h4>
        <List spacing={3} fontWeight={'medium'}>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color='secondary' />
            Diminui os Picos de Insulina
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color='secondary' />
            Acaba com os Enjoôs e Ânsias
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color='secondary' />
            Da um fim as Dormências
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color='secondary' />
            Ajuda no contro de Fluxo Urinário
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color='secondary' />
            Melhora em até 98% a Visão
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color='secondary' />
            Acaba com Dores nas Pernas e Mãos
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} boxSize={5} color='secondary' />
            Pode acabar com a dependência de químicos
          </ListItem>
        </List>
        {/* <ul className="text-md space-y-1">
          <li>Diminui os Picos de Insulina</li>
          <li>Acaba com os Enjoôs e Ânsias</li>
          <li>Da um fim as Dormências</li>
          <li>Ajuda no contro de Fluxo Urinário</li>
          <li>Melhora em até 98% a Visão</li>
          <li>Acaba com Dores nas Pernas e Mãos</li>
          <li>Pode acabar com a dependência de químicos</li>
        </ul> */}
      </section>

      {/* section 4 - composição */}
      <div id="composicao" className="bg-pattern py-20 flex flex-col gap-5 items-center justify-center w-full h-full text-center text-secondary px-4">
        <h1 className="text-2xl font-bold">
          Única fórmula que combate<br/>as Moléculas DB7
        </h1>
        <Button variant="secondary">
          Quero vencer o diabetes
        </Button>
      </div>
      
      {/* section 5 */}
      <section className="py-20 flex flex-col text-center gap-10">
        <h3 className="text-2xl font-bold text-secondary">
        Descubra os ativos naturais<br/>que irão deixar sua glicose estável
        </h3>
        <Swiper
          className="w-screen"
          spaceBetween={20}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          modules={[Mousewheel, Pagination]}
          mousewheel={true}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <CardNatural
              image="/assets/ingredientes/resveratrol.png"
              title="Resveratrol Americano"
              description="O resveratrol é encontrado em frutas roxas e beneficia a saúde, incluindo a diabetes. Estudos comprovam que ele aumenta a sensibilidade à insulina, controlando os níveis de açúcar no sangue. Seu consumo é importante para pessoas com diabetes."
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardNatural
              image="/assets/ingredientes/coenzima.png"
              title="Coenzima Q10"
              description="A coenzima Q10 é uma substância natural que pode trazer benefícios significativos para pessoas com diabetes. Além de ajudar na produção de energia celular, ela também possui propriedades antioxidantes que combatem o estresse oxidativo, reduzindo os danos causados pelo excesso de açúcar no sangue."
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardNatural
              image="/assets/ingredientes/magnesio.png"
              title="Magnésio"
              description="Este mineral oferece uma ajuda decisiva no processo de absorção da glicose do sangue para as células. Deste modo, aumentando a sensibilidade das células à insulina, o aporte adequado deste nutriente mineral pode desempenhar uma função vital para o bem-estar de quem sofre de diabetes tipo 2."
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardNatural
              image="/assets/ingredientes/oleo.png"
              title="Óleo de Persêa"
              description="O óleo da semente da persêa americana é benéfico para pessoas com diabetes, ajudando a controlar o açúcar no sangue e reduzindo o risco de doenças cardiovasculares. Muito confundido com óleo de abacate, a somente da persêa é muito mais rica em ácidos graxos saudáveis e é uma opção poderosa contra a Glicose descontrolada."
            />
          </SwiperSlide>
        </Swiper>
      </section>


      {/* section 6 */}
      <section className="bg-pattern py-20 flex flex-col gap-5 items-center justify-center w-full h-full text-center text-secondary px-4">
        <h1 className="text-2xl font-bold">
          O poder ativo que elimine por completo<br/>as moléculas DB7 do corpo
        </h1>
        <Button variant="secondary">
          Quero vencer o diabetes
        </Button>
      </section>

      {/* section 7 */}
      <section id="testes" className="py-20 flex flex-col md:flex-row max-w-3xl mx-auto gap-5 items-center justify-center w-full h-full text-center text-secondary px-4">
        <div>
          <Image
            src="/assets/frascos/caixa-e-frasco.png"
            alt="Glicovit"
            width={400}
            height={400}
            quality={100}
            className="object-cover object-center"
          />
        </div>
        <div>

          <div className="flex flex-col items-center md:items-start gap-6 pt-5 pb-10">
            <h1 className="text-2xl font-bold text-center md:text-start">
              Testes clínicos<br/>do GlicoVIT
            </h1>
            <Counter
              line1="Redução dos"
              line2="Picos de Insulina"
              value={76}
            />
            <Counter
              line1="Menor Dependência"
              line2="dos Químicos"
              value={81}
            />
            <Counter
              line1="Melhoria"
              line2="na Visão"
              value={72}
            />
            <Counter
              line1="Redução de Todos os"
              line2="Sintomas do Diabetes"
              value={84}
            />
            <p className="text-xs">Liberado pela ANVISA no RDC 240/18</p>
          </div>
          <Button variant="secondary">
            Quero vencer o diabetes
          </Button>
        </div>
      </section>

      {/* section 8 - ofertas */}
      <section id="ofertas" className="py-20 flex flex-col text-center gap-10">
        <h3 className="text-2xl font-bold text-secondary">
        Escolha 5 meses para<br/>melhores resultados!
        </h3>
        <Swiper
          className="w-screen"
          spaceBetween={20}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          modules={[Mousewheel, Pagination]}
          mousewheel={true}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <CardPromotion
              image="/assets/frascos/12-frascos.png"
              promotionTitle="12 meses de tratamento"
              paymentPlan="até 12x de"
              monthlyPrice="R$ 69,70"
              fullPrice="R$ 697,00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPromotion
              image="/assets/frascos/5-frascos.png"
              promotionTitle="5 meses de tratamento"
              paymentPlan="até 12x de"
              monthlyPrice="R$ 39,70"
              fullPrice="R$ 397,00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPromotion
              image="/assets/frascos/3-frascos.png"
              promotionTitle="3 meses de tratamento"
              paymentPlan="até 12x de"
              monthlyPrice="R$ 29,70"
              fullPrice="R$ 297,00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPromotion
              image="/assets/frascos/1-frasco.png"
              promotionTitle="1 mês de tratamento"
              paymentPlan="até 12x de"
              monthlyPrice="R$ 19,70"
              fullPrice="R$ 227,00"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* section 9 */}
      <section className="bg-pattern py-20 w-full h-full text-center text-secondary px-4">
        <div className="flex flex-col gap-5 items-center justify-center w-full max-w-xl mx-auto">
          <h1 className="text-2xl font-bold">
            Único com garantia real<br/>de 90 dias!
          </h1>
          <h4 className="text-lg font-medium text-secondary">
            Confiamos tanto na qualidade e no resultado de nosso produto que damos a todos os nossos clientes garantia de 90 dias!
          </h4>
          <h4 className="text-lg font-medium text-secondary">
            Use por 3 meses e veja as mudanças. Se você não ficar satisfeito, devolvemos 100% de  seu dinheiro na hora!
          </h4>
          <Button variant="secondary" className="mt-5">
            Quero vencer o diabetes
          </Button>
        </div>
      </section>

      {/* section 10 - faq */}
      <section id="faq" className="flex flex-col w-full gap-10 items-center justify-center px-10 py-20">
        <h1 className="text-2xl text-secondary text-center font-bold">
          Perguntas Frequentes
        </h1>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              O que é o GlicoVIT?
            </AccordionTrigger>
            <AccordionContent>
              GlicoVIT é um produto em gotas que ajuda a combater o Diabetes de dentro para fora. Ele é o único capaz de eliminar as Moléculas DB7 no organismo, principal causadora da doença segundo estudo recente no Alabama, EUA.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Como o GlicoVIT funciona?
            </AccordionTrigger>
            <AccordionContent>
              O GlicoVIT contém uma combinação de ingredientes ativos que ajudam a eliminar as moléculas DB7, que é a molécula responsável pelos picos de glicose. Além disso, ele promove a diminuição imediata das dores nas pernas, mãos e melhoria na visão turva.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Como devo usar o GlicoVIT?
            </AccordionTrigger>
            <AccordionContent>
              O GlicoVIT deve ser aplicado 2x ao Dia sendo 10 gotas pela manhã e 10 a noite antes de dormir. Pingar as gotas abaixo da lingua e deixar absorver completamente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Quanto tempo leva para ver os resultados do GlicoVIT?
            </AccordionTrigger>
            <AccordionContent>
              Os resultados do GlicoVIT podem variar de pessoa para pessoa, mas geralmente os usuários começam a ver uma melhora no controle da Glicose logo no primeiros 90 dias.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              O GlicoVIT é Aprovado Pela Anvisa?
            </AccordionTrigger>
            <AccordionContent>
              O GlicoVIT é aprovado pela ANVISA com número de registro RDC 240/18 como um Suplemento Fitoterapico. Para obter essa aprovação, o produto passou por rigorosos testes e avaliações da ANVISA para garantir a sua eficácia e segurança para uso. Esses testes incluem a análise da formulação do produto, a verificação da sua qualidade, segurança e eficácia, além da avaliação de possíveis efeitos colaterais e reações adversas. A classificação de Suplemento de grau 2 significa que o GlicoVIT apresenta propriedades terapêuticas adicionais em relação aos suplementos convencionais e pode ser utilizado inclusive por profissionais de saúde.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              O GlicoVIT é seguro de usar?
            </AccordionTrigger>
            <AccordionContent>
              Sim, o GlicoVIT é seguro de usar e foi testado endócrinologicamente. Seus efeitos são seguros para a saúde e não há contra-indicações.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              Quais são os ingredientes do GlicoVIT?
            </AccordionTrigger>
            <AccordionContent>
              Os ingredientes ativos do GlicoVIT incluem Óleo de Semente da Persêa Americana, Resveratrol Americano, Astaxantina, Coenzima Q10 e Vitaminas B e K.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              O GlicoVIT é adequado para todos os Diabéticos?
            </AccordionTrigger>
            <AccordionContent>
              Sim, GlicoVIT é adequado para todos os Diabéticos e não há contra-indicações ou conflitos com remédios bem como Glifage, Glicazilda, Metformina e outros.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  )
}
