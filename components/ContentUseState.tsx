'use client'
import { useState } from "react";
import { CharactersSelector } from "./CharactersSelector";
import ContentBlock from "./ContentBlock";


export function ContentUseState() {

    const array  = [
        {title: 'Gabimaru', description: 'Gabimaru, nascido como Saku, é um ninja de elite de Iwagakure e o último detentor do pseudônimo Gabimaru, o Vazio. É o principal protagonista desta obra, sendo um ninja que foi traído pelo próprio vilarejo após decidir renunciar da função de assassino no propósito de viver uma vida pacífica com sua esposa, Yui.', description2: 'Devido a traição, Gabimaru foi entregue as autoridades para que seja executado e desta forma acabou conhecendo Sagiri do clã Yamada, um clã responsável por executar criminosos sob o comando direto do Shogun. Através de Yamada Sagiri, o assassino recebeu o convite do Shogun para encontrar o Elixir da vida em troca do perdão de todos os seus crimes.', url:'/images/GabimaruArt.png'},
        {title: 'Yamada Sagiri', description: 'Nascida e criada em um ambiente marcado pela violência e pela morte, Sagiri internalizou os valores e as expectativas de seu clã. Sua vida gira em torno do domínio da espada e do cumprimentod e sua missão como carrasca. No entanto, por trás de sua fachada implacável, Sagiri revela uma complexidade emocional que a diferencia dos outros membros de seu clã. Como membro do clã Yamada, Sagiri foi enviada para a busca pelo Elixir da Vida como responsável do criminoso Gabimaru, sob ordem do Shogun. Ao longo da história, Sagiri se desenvolve, aprendendo a lidar com as consequências de suas ações e a encontrar um propósito além da violência e do perfeccionismo gerado das expectativas alheias.', url:'/images/AsagiriArt.png'},
        {title: 'Nurugai', description: 'Nurugai é uma figura andrógino e misteriosa, com uma aparência infantil e longos e bagunçados cabelos negros que descem além de seus ombros. Desde sua aparência a sua origem, Nurugai está cercado de misterio e se encontra na companhia do membro do clã Yamada, Tenza, com quem parece ter uma excelente relação. Demonstra uma imensa habilidade com o uso da Katana, sendo ágil e tendo um bom nível de precisão. Além do mais, Nurugai demonstra um certo alto nível de modéstia, além de ser uma figura bastante direta. ', url:'/images/NurugaiArt.png'},
        {title: 'Yamada Tenza', description: 'Yamada Asaemon Tenza é um dos monitores do clã Yamada durante a expedição em busca pelo Elixir da Imortalidade, sendo responsável por acompanhar Nurugai. Com uma personalidade entusiasmada e persistente, mas sem perder a gentileza, Tenza é uma figura brilhante e com uma personalidade amável, extremamente habilidoso com a Katana e em combate. Honesto e priorizando aquilo que julga correto, o próprio Tenza assume não ser muito inteligente, preferindo assim seguir seus planejamentos mais simples e diretos. O motivo pelo qual Tenza convocou Nurugai para a missão, é por acreditar que o mesmo seja inocente e que mereça o perdão de todos os seus supostos crimes.  '},
        {title:'Aza Chobei', description:'Conhecido como Rei Bandido, possui uma aparência robusta e imponente, com uma cicatriz característica em seu rosto que adiciona um ar de ameaça. Atua como um líder nato, sendo demonstrado como alguém que possuía o respeito e a lealdade de seus homens.', description2:'Mestre no combate corpo a corpo, demonstra habilidade com diferentes tipos de armas e um desenvolvimento extremamente veloz. Sua filosofia marcante é: "Ser capaz de adaptar-se a qualquer situação, isso sim é força verdadeira". Chobei vai para a expedição em busca do Elixir da Imortalidade sob a supervisão de seu irmão infiltrado, Aza Toma. '}, 
        {title:'Aza Toma', description:'Irmão de Aza Chobei, Toma é um infiltrado no clã Yamada para atuar como um dos carrascos e conceder a Aza a missão de encontrar o Elixir da Vida Eterna para que possa obter o perdão de toda sua vida. Possuí uma aparência jovem, com longos cabelos negros e um visual andrógino. É extremamente leal ao irmão mais velho, o admirando de forma absurdamente notória e fazendo de tudo para que possa permanecer ao lado do tal. É excelente na arte da persuasão e da atuação, além de um espadachim habilidoso e o segundo líder do grupo de bandidos liderado por Aza Chobei.'},
        {title:'Tamiya', description:'Tamiya Gantetsusai, também conhecido como "A Lâmina do Dragão" é um ínfame espadachim que cortou a propriedade de um damiyo e por este motivo foi condenado a pena de morte. Gantetsusai é um homem grande com cabelos escuros divididos em três seções e amarrados em um rabo de cavalo, junto com um bigode e uma barba também divididos em três seções. Seu guarda-roupa consiste em um yukata junto com um hakama, amarrado com um obi. Está acompanhado de Yamada Fuchi do clã Yamada, com quem parece compartilhar uma boa relação. Seu objetivo é tornar-se verdadeiramente imortal, não através do Elixir, mas de seus feitos. '},
        {title:'Yamada Fuchi', description:'Yamada Fuchi ou simplesmente Fuchi é o ranking 9 de todo o clã de carrascos, designado a vigiar Tamiya Gantetsusai. De baixa estatura, o carrasco é menor até mesmo que o ninja Gabimaru, que possuí 150cm de altura. Utiliza os trajes comuns do clã e diferencia-se pelos cabelos loiros em corte estilo "hime" e a pele pálida que destacam as grandes olheiras. Diferentemente dos demais membros do clã Yamada, Fuchi demontrava maior interesse no estudo da anatomia e apresenta um comportamento mais frio e racional, achando desnecessário toda ação ilógica. Além do mais, sua lealdade ao clã recebe destaque, de maneira a não tolerar quaisquer insultos aos Yamadas e muito menos traidores.  '},
        {title:'Yuzuriha', description:''},
        {title:'Yamada Senta', description:''},
        {title:'Shion', description:''}
    ]

    const [currentItem, setCurrentItem] = useState(0)

    function handleSetArray(id:number) {
        setCurrentItem(id)
    }

    return(
        <>
            <div className="flex sm:flex-col sm:gap-y-10 md:flex-row w-[100%] h-full justify-center sm:pl-[5%] sm:pr-[5%] md:pl-[15%] md:pr-[15%] pt-[2%] md:pb-[2%] sm:pb-[10%] gap-x-5">
                <div className="relative sm:w-[100%] md:w-[30%] sm:h-[80px] md:h-full flex flex-col justify-center sm:overflow-x-auto md:place-content-center ">
                    <CharactersSelector handleSetArray={handleSetArray} />
                </div>
                <div>
                    <div className="relative">
                        <ContentBlock title={array[currentItem].title} description={array[currentItem].description} description2={array[currentItem].description2} url={array[currentItem].url} />
                    </div>
                </div>
            </div>
            
        </>
    )
}