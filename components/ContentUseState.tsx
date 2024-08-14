'use client'
import { useState } from "react";
import { CharactersSelector } from "./CharactersSelector";
import ContentBlock from "./ContentBlock";


export function ContentUseState() {

    const array  = [
        {title: 'Gabimaru', description: 'Gabimaru, nascido como Saku, é um ninja de elite de Iwagakure e o último detentor do pseudônimo Gabimaru, o Vazio. É o principal protagonista desta obra, sendo um ninja que foi traído pelo próprio vilarejo após decidir renunciar da função de assassino no propósito de viver uma vida pacífica com sua esposa, Yui.', description2: 'Devido a traição, Gabimaru foi entregue as autoridades para que seja executado e desta forma acabou conhecendo Sagiri do clã Yamada, um clã responsável por executar criminosos sob o comando direto do Shogun. Através de Yamada Sagiri, o assassino recebeu o convite do Shogun para encontrar o Elixir da vida em troca do perdão de todos os seus crimes.'},
        {title: 'Yamada Sagiri', description: 'Nascida e criada em um ambiente marcado pela violência e pela morte, Sagiri internalizou os valores e as expectativas de seu clã. Sua vida gira em torno do domínio da espada e do cumprimentod e sua missão como carrasca. No entanto, por trás de sua fachada implacável, Sagiri revela uma complexidade emocional que a diferencia dos outros membros de seu clã. Como membro do clã Yamada, Sagiri foi enviada para a busca pelo Elixir da Vida como responsável do criminoso Gabimaru, sob ordem do Shogun. Ao longo da história, Sagiri se desenvolve, aprendendo a lidar com as consequências de suas ações e a encontrar um propósito além da violência e do perfeccionismo gerado das expectativas alheias.'},
        {title: 'Nurugai', description: 'Nurugai é uma figura andrógino e misteriosa, com uma aparência infantil e longos e bagunçados cabelos negros que descem além de seus ombros. Desde sua aparência a sua origem, Nurugai está cercado de misterio e se encontra na companhia do membro do clã Yamada, Tenza, com quem parece ter uma excelente relação. Demonstra uma imensa habilidade com o uso da Katana, sendo ágil e tendo um bom nível de precisão. Além do mais, Nurugai demonstra um certo alto nível de modéstia, além de ser uma figura bastante direta. '},
        {title: 'Yamada Tenza', description: 'Yamada Asaemon Tenza é um dos monitores do clã Yamada durante a expedição em busca pelo Elixir da Imortalidade, sendo responsável por acompanhar Nurugai. Com uma personalidade entusiasmada e persistente, mas sem perder a gentileza, Tenza é uma figura brilhante e com uma personalidade amável, extremamente habilidoso com a Katana e em combate. Honesto e priorizando aquilo que julga correto, o próprio Tenza assume não ser muito inteligente, preferindo assim seguir seus planejamentos mais simples e diretos. O motivo pelo qual Tenza convocou Nurugai para a missão, é por acreditar que o mesmo seja inocente e que mereça o perdão de todos os seus supostos crimes.  '},
        {title:'Aza Chobei', description:''}, 
        {title:'Aza Toma', description:''},
        {title:'Tamiya', description:''},
        {title:'Yamada Fuchi', description:''},
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
            <div className="flex sm:flex-col sm:gap-y-10 md:flex-row w-[100%] h-full justify-center sm:pl-[5%] sm:pr-[5%] md:pl-[15%] md:pr-[15%] pt-[3%] pb-[10%] gap-x-5">
                <div className="relative sm:w-[100%] md:w-[30%] sm:h-[80px] md:h-auto flex flex-col justify-start sm:overflow-x-auto md:place-content-center ">
                    <CharactersSelector handleSetArray={handleSetArray} />
                </div>
                <div>
                    <div className="relative">
                        <ContentBlock title={array[currentItem].title} description={array[currentItem].description} description2={array[currentItem].description2} />
                    </div>
                </div>
            </div>
            
        </>
    )
}