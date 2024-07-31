'use client'
import { useState } from "react";
import { CharactersSelector } from "./CharactersSelector";
import ContentBlock from "./ContentBlock";


export function ContentUseState() {

    const array  = [
        {title: 'Gabimaru', description: 'Gabimaru, nascido como Saku, é um ninja de elite de Iwagakure e o último detentor do pseudônimo Gabimaru, o Vazio. É o principal protagonista desta obra, sendo um ninja que foi traído pelo próprio vilarejo após decidir renunciar da função de assassino no propósito de viver uma vida pacífica com sua esposa, Yui. Devido a traição, Gabimaru foi entregue as autoridades para que seja executado e desta forma acabou conhecendo Sagiri do clã Yamada, um clã responsável por executar criminosos sob o comando direto do Shogun. Através de Yamada Sagiri, o assassino recebeu o convite do Shogun para encontrar o Elixir da vida em troca do perdão de todos os seus crimes. '},
        {title: 'Yamada Sagiri', description: 'Nascida e criada em um ambiente marcado pela violência e pela morte, Sagiri internalizou os valores e as expectativas de seu clã. Sua vida gira em torno do domínio da espada e do cumprimentod e sua missão como carrasca. No entanto, por trás de sua fachada implacável, Sagiri revela uma complexidade emocional que a diferencia dos outros membros de seu clã. Como membro do clã Yamada, Sagiri foi enviada para a busca pelo Elixir da Vida como responsável do criminoso Gabimaru, sob ordem do Shogun. Ao longo da história, Sagiri se desenvolve, aprendendo a lidar com as consequências de suas ações e a encontrar um propósito além da violência e do perfeccionismo gerado das expectativas alheias.'}
    ]

    const [currentItem, setCurrentItem] = useState(0)

    function handleSetArray(id:number) {
        setCurrentItem(id)
    }

    return(
        <>
            <div className="space-y-16 flex flex-col place-content-center w-[50%] justify-start">
                <div>
                    <h1 className="text-text-gray text-2xl">Characters</h1>
                </div>

                <CharactersSelector handleSetArray={handleSetArray} />
            </div>
            <div>
                <ContentBlock title={array[currentItem].title} description={array[currentItem].description} />
            </div>
        </>
    )
}