import { NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { Itens } from '../models/itens/itens';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  textColor:string = 'white'
  tierColor:string[] = ['gray', 'blue','#57386c']

  buttons: string[] = ['Armas'];
  buttonColors: string = '#bb946e'; // Inicializa o array com a cor padrão

  toggleButtonColor(isMouseOver: boolean) {
    this.buttonColors = isMouseOver ? '#997048' : '#bb946e';
  }

  dropdownItens = [
    ['Espada/Escudo', 'Adaga', 'Lança', 'Varinha', 'Cajado', 'Balestra', 'Arco', 'Espadão'],
    ['Elmo', 'Peitoral', 'Bota', 'Calça', 'Luva', 'Capa'],
    ['Colar', 'Anel', 'Cinto', 'Bracelete']
  ]

  itens: Itens[] = [

    //ESPADA/ESCUDO

    new Itens('Lâmina Heróica da Resistência', 'Dano e Redução de Dano', 'Vida Máxima, Chance de Acerto, Chance de Ataque Pesado, Chance de Acerto Crítico, Chance de Colisão ou Bônus de Dano Contra Humanóides', 2, 'Espada/Escudo', '/espada_heroica.webp'),
    new Itens('A Lâmina da Decapitação de Chernobog', 'Dano e Redução de Dano', 'Vida Máxima, Regeneração de Vida, Chance de Acerto, Chance de Ataque Pesado, Chance de Acerto Crítico, Bônus de Dano em Mortos Vivos', 2, 'Espada/Escudo', '/chernobog_lamina.webp'),
    new Itens('Lâmina Lânguida da Rainha Bellandir', 'Dano e Redução de Dano', 'Vida Máxima, Chance Acerto, Chance de Acerto Pesado, Chance de Acerto Crítico, Duração de Debuff ou Dano bônus Wildkin', 2, 'Espada/Escudo', '/bellandir.webp', 'Areia Movediça da Rainha Bellandir'),
    new Itens('Borda Animada de Cornelius', 'Dano e Redução de Dano', 'Vida Máxima, Chance de Acerto, Chance de Ataque Pesado, Chance de Acerto Crítico, Chance de Colisão, Regeneração de Vida ou Dano Bônus Wildkin', 2, 'Espada/Escudo', '/Cornelius.webp'),
    new Itens('Espada Sifonadora de Ahzreil', 'Dano e Redução de Dano','Mana Máxima, Regeneração de Mana, Chance de Acerto, Chance de Acerto Pesado, Chance de Acerto Crítico ou Dano Bônus de Construção', 2,  'Espada/Escudo', '/Ahzeil.webp', 'Ilusão de Ahzeil'),
    new Itens('Espada dos Ecos de Nirma', 'Dano e Redução de Dano', 'Regeneração de Mana, Chance de Acerto, Chance de Acerto Pesado, Chance de Acerto Crítico, Custo de Mana Eficiente ou Dano Bônus em Mortos Vivos', 2, 'Espada/Escudo', '/Nirma.webp', 'Onda de Choque de Nirma'),
    new Itens('Lâmina Etérea de Karnix', 'Dano e Redução de Dano','Vida Máxima, Regeneração de Vida, Chance de Acerto, Chance de Ataque Pesado, Chance de Acerto Crítico, Dano Bônus em Humanóides', 2, 'Espada/Escudo', '/Karnix.webp'),

    //ESPADÕES

    new Itens('Lâmina de Guerra Fúria do Duque Magna', 'Dano', 'Regeneração de Vida, Chance de Acerto, Chance de Stun, Chance de Ataque Pesado, Chance de Acerto Crítico ou Dano Bônus em Mortos Vivos', 2, 'Espadão', '/Magna01.webp', 'Berserk do Duque Magna'),
    new Itens('Espada Larga Heroica da Resistência', 'Dano', 'Vida Máxima, Chance de Acerto, Chance de Stun, Chance de Ataque Pesado, Chance de Acerto Crítico ou Dano Bônus em Humanóides', 2, 'Espadão', '/espadao_resis.webp'),
    new Itens('Espadão da Banshee', 'Dano', 'Vida Máxima, Regeneração de Vida, Chance de Acerto, Chance de Acerto Pesado, Chance de Acerto Crítico ou Bônus de Dano em Mortos Vivos', 2, 'Espadão', '/banshee.webp'),
    new Itens('Lâmina de Guerra do Desespero de Tevent', 'Dano', 'Vida Máxima, Chance de Acerto, Chance de Ataque Pesado, Chance de Acerto Crítico, Dano Bônus em Mortos Vivos ou Duração de Debuff', 2, 'Espadão', 'Tevents.webp', 'Armadilha do Desespero de Tevent'),
    new Itens('Grande Lâmina da Corrupção de Morokai', 'Dano', 'Mana Máxima, Chance de Acerto, Chance de Stun, Chance de Ataque Pesado, Chance de Acerto Crítico ou Dano Bônus em Wildkin', 2, 'Espadão', '/Morokai.webp'),
    new Itens('Espadão Gargantuesco de Adentus', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Construções', 2, 'Espadão', 'Adentus.webp', 'A Paixão de Adentus'),
    new Itens('Lâmina de Guerra Juggernaut de Junobote', 'Dano', 'Regeneração de Mana, Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Velocidade de Recarga ou Dano Bônus em Wildkin', 2, 'Espadão', '/Junobote.webp', 'Vazio de Junobote'),
    new Itens('Lâmina de Guerra Provocativa de Duke Magna', 'Dano', 'Chance de Acerto Crítico, Chance de Acerto, Chance de Ataque Pesado, Vida Máxima, Dano Bônus em Mortos Vivos', 2, 'Espadão', '/Magna02.webp', 'Provocação do Duke Magna'),

    //ADAGAS

    new Itens('Adagas Heroicas da Resistência', 'Dano e Dano na Segunda Arma', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Chance de Fraqueza ou Dano Bônus em Humanóides', 2, 'Adaga', '/adagas_resis.webp',),
    new Itens('Presas Furiosas de Tevent', 'Dano e Dano na Segunda Arma', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Duração de Buff ou Dano Bônus em Mortos Vivos', 2, 'Adaga', '/ad_tevents.webp', 'A Raiva Furiosa de Tevent'),
    new Itens(' Presas de Rex Chimaerus', 'Dano e Dano na Segunda Arma', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Vida, Chance de Fraqueza ou Dano Bônus em Wildkin', 2, 'Adaga', '/ad_rex.webp',),
    new Itens('Adagas Incapacitantes de Minzerok', 'Dano e Dano na Segunda Arma', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Wildking', 2, 'Adaga', '/Minezerok_ad.webp', 'Freio de Minezerok'),
    new Itens('Adagas do Crepúsculo de Kowazan', 'Dano e Dano na Segunda Arma', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Vida, Custo Eficiente de Mana ou Dano Bônus em Construções', 2, 'Adaga', '/kowazan_ad.webp', 'Loucura de Kowazan'),
    new Itens('Adagas Assassinas das Trevas', 'Dano e Dano na Segunda Arma', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Maxima, Regeneração de Vida ou Dano Bônus em Mortos Vivos', 2, 'Adaga', '/trevas_ad.webp',),
    new Itens('Os espinhos perversos de Lequirus', 'Dano e Dano na Segunda Arma', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Humanóides', 2, 'Adaga', '/lequirus_ad.webp', 'Lâmina Vendaval de Lequirus'),

    //ARCOS

    new Itens('Longa-arco Heroico da Resistência', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Chance de Cegueira ou Dano Bônus em Humanóides', 2, 'Arco', '/herobow.webp'),
    new Itens('Arco da Morte Lamentadora de Tevent', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Velocidade de Ataque ou Dano Bônus em Demônios', 2, 'Arco', '/teventsbow.webp', 'Bombardeio de Tevent'),
    new Itens('Longa-arco da Árvore do Mundo', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Regeneração de Mana ou Dano Bônus em Wildkin', 2, 'Arco', '/worldtreebow.webp'),
    new Itens('Longa-arco da Marca da Morte de Toublek', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Custo Eficiente de Mana ou Dano Bônus em Wildkin', 2, 'Arco', '/toublekbow.webp', 'Truque do Toublek'),
    new Itens('Longa-arco Rejuvenescedor de Aelon', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Construções', 2, 'Arco', '/aelonbow.webp', 'Benção do Grande Aelon'),
    new Itens('Longa-arco das Trevas de Karnix', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Regeneração de Vida ou Dano Bônus em Mortos Vivos', 2, 'Arco', '/karnixbow.webp', 'Olho de Karnix'),
    new Itens('Arco Longo da Mente Profunda de Shaikal', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Chance de Cegueira ou Dano Bônus em Mortos Vivos', 2, 'Arco', '/shikailbow.webp'),

    //BALESTRAS 

    new Itens('Bestas de Aço Infinito', 'Dano e Dano na Arma Secundária', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Wildking', 2, 'Balestra', '/açocrossbow.webp'),
    new Itens('Bestas Trazidoras de Tempestades', 'Dano e Dano na Arma Secundária', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Chance de Fraqueza ou Dano Bônus em Humanóides', 2, 'Balestra', '/stormcrossbow.webp'),
    new Itens('Bestas Heroicas da Resistência', 'Dano e Dano na Arma Secundária', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Chance de Fraqueza ou Dano Bônus em Humanóides', 2, 'Balestra', '/resiscrossbow.webp'),
    new Itens('Lançadores de Espinhos Tóxicos da Rainha Bellandir', 'Dano e Dano na Arma Secundária', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Duração de Buff ou Dano Bônus em Demônios', 2, 'Balestra', '/bellandircrossbow.webp', 'Veneno Corruptivo da Rainha Bellandir'),
    new Itens('Bestas de Chama Solar de Kowazan', 'Dano e Dano na Arma Secundária', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Regeneração de Vida ou Dano Bônus em Humanóides', 2, 'Balestra', '/kowazancrossbow.webp', 'O bombardeio de Kowazan'),
    new Itens('Bestas Energizantes de Malakar', 'Dano e Dano na Arma Secundária', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Demônios', 2, 'Balestra', '/malakarcrossbow.webp', 'Olho da Tempestade de Malakar'),
    new Itens('Balestra de Rex Chimaerus', 'Dano e Dano na Arma Secundária', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Velocidade de Ataque ou Dano Bônus em Mortos Vivos', 2, 'Balestra', '/rexcrossbow.webp', 'A Fome de Rex Chimaerus'),

    //VARINHAS

    new Itens('Manuscrito Sagrado', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou  Dano Bônus em Demônios', 2, 'Varinha', '/sagradovarinha.webp'),
    new Itens('Cetro Heroico da Resistência', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Chance de Adormecer ou Dano Bônus em Humanóides', 2, 'Varinha', '/resisvarinha.webp'),
    new Itens('Agarramento Murchante de Tevent', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Velocidade de Recarga ou Dano Bônus em Humanóides', 2, 'Varinha', '/teventvarinha.webp', 'A Fome de Tevent'),
    new Itens('Tomo Cobiçado de Lequirus', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Vida, Duração de Buff ou Dano Bônus em Construções', 2, 'Varinha', '/lequirusvarinha.webp', 'Emboscada de Lequirus'),
    new Itens('Cetro de Fogo Mental de Shaikal', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Wildking', 2, 'Varinha', '/shikailvarinha.webp', 'Fluido Dissolvente de Shaikal'),
    new Itens('Cetro Misterioso do Excavador', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Regeneração de Vida ou Dano Bônus em Wildking', 2, 'Varinha', '/excavadorvarinha.webp', 'Respiração da Escavadeira'),
    new Itens('Tomo do Remédio Próximo', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Chance de Adormecer ou Dano Bônus em Wildkin', 2, 'Varinha', '/varinharemedio.webp'),

    //CAJADOS

    new Itens('Cajado Heroico da Resistência', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Chance de Fraqueza ou Dano Bõnus em Humanóides', 2, 'Cajado', '/resiscajado.webp'),
    new Itens('Cajado do Manipulador das Sombras', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Regeneração de Vida ou Dano Bõnus em Mortos Vivos', 2, 'Cajado', '/sombrascajado.webp'),
    new Itens('Cajado da Luz Lúcida', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bõnus em Demônios', 2, 'Cajado', '/lightcajado.webp'),
    new Itens('Cajado da Mente Coletiva da Rainha Bellandir', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Velocidade de Ataque ou Bônus de Dano em Wildking', 2, 'Cajado', '/bellandircajado.webp', 'Inseto Explosivo da Rainha Bellandir'),
    new Itens('Cajado Cristalino de Talus', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Construções', 2, 'Cajado', '/taluscajado.webp', 'Pedra Fria de Talus'),
    new Itens('Cajado Noduoso do Vazio de Aridus', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Chance de Fraqueza ou Dano Bônus em Mortos Vivos', 2, 'Cajado', '/ariduscajado.webp', 'O Ódio de Aridus'),
    new Itens('Cajado Destruidor de Toublek', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Velocidade de Recarga ou Dano Bônus em Wildking', 2, 'Cajado', '/toublekcajado.webp', 'Impulso de Toublek'),

    //LANÇAS
    
    new Itens('Lança Corta-Crânios', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Chance de Stun ou  Dano Bônus em Wildkin', 2, 'Lança', '/cranioslança.webp'),
    new Itens('Ranseur Fumegante de Junobote', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Mana Máxima, Regeneração de Mana ou Dano Bônus em Construções', 2, 'Lança', '/junobotelança.webp', 'Fogo de Junobote'),
    new Itens('Arpão Véu Mental de Shaikal', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Regeneração de Mana, Velocidade de Recarga ou Dano Bônus em Wildkin', 2, 'Lança', '/shikaillança.webp', 'Céu de Shaikal'),
    new Itens('Ponta Serrilhada da Rainha Bellandir', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Chance de Stun ou Duração de Buff', 2, 'Lança', '/bellandirlança.webp', 'A Fome da Rainha Bellandir'),
    new Itens('Arma de Haste Heroica da Resistência', 'Dano', 'Chance de Acerto, Chance de Acerto Crítico, Chance de Ataque Pesado, Vida Máxima, Regeneração de Vida ou Dano Bônus em Mortos Vivos', 2, 'Lança', '/resislança.webp'),

  ]

  categoriaSelecionada:string | null = null
  
  selecionarCategoria(categoria:string){
    this.categoriaSelecionada = categoria
  }
 

  get itensFiltrados(): Itens[] {
    return this.itens.filter(itens => itens.categoria === this.categoriaSelecionada);
  }
}
