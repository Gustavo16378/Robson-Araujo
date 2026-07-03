// ─────────────────────────────────────────────────────────────────────────────
//  FONTE ÚNICA DE CONTEÚDO — Robson Araújo · Engenharia e Projetos Integrados
//  Regra dura: nenhum texto deve ser hardcoded em JSX. Tudo sai daqui.
// ─────────────────────────────────────────────────────────────────────────────

export interface Brand {
  monogram: string;
  name: string;
  tagline: string;
  city: string;
  whats: string;
  email: string;
  credit: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Floor {
  code: string;
  label: string;
  anchor: string;
}

export interface Hero {
  kicker: string;
  image: string;
  title: [string, string];
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  caption: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface MiniStat {
  value: string;
  label: string;
}

export interface About {
  kicker: string;
  photo: string;
  title: string;
  role: string;
  paragraphs: string[];
  badge: string;
  miniStats: MiniStat[];
  photoCaption: string;
}

export interface Service {
  n: string;
  title: string;
  desc: string;
}

export interface Philosophy {
  kicker: string;
  thesis: string[];
  body: string[];
  services: Service[];
}

export interface CostItem {
  stat: string;
  title: string;
  desc: string;
}

export interface Cost {
  kicker: string;
  title: string;
  lead: string;
  items: CostItem[];
}

export type ProjectSpan = "wide" | "tall" | "normal";

export interface ProjectFact {
  k: string;
  v: string;
}

export interface Project {
  id: string;
  title: string;
  place: string;
  type: string;
  year: string;
  span: ProjectSpan;
  img: string;
  caption: string;
  problem: string;
  decision: string;
  result: string;
  facts: ProjectFact[];
}

export interface ShieldStep {
  n: string;
  phase: string;
  risk: string;
  shield: string;
}

export interface Shield {
  kicker: string;
  title: string;
  steps: ShieldStep[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Contact {
  kicker: string;
  title: string[];
  lead: string;
  cta: string;
  ctaAlt: string;
}

export interface RaData {
  brand: Brand;
  nav: NavItem[];
  floors: Floor[];
  hero: Hero;
  stats: Stat[];
  about: About;
  philosophy: Philosophy;
  cost: Cost;
  projects: Project[];
  shield: Shield;
  testimonials: Testimonial[];
  contact: Contact;
}

export const RA_DATA: RaData = {
  brand: {
    monogram: "RA",
    name: "ROBSON ARAÚJO",
    tagline: "Engenharia e Projetos Integrados",
    city: "Palmas / TO",
    whats: "+55 63 99999-0000",
    email: "contato@robsonaraujo.eng.br",
    credit: "Desenvolvido por Gustavo Dev.",
  },
  nav: [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "filosofia", label: "Filosofia" },
    { id: "projetos", label: "Projetos" },
    { id: "contato", label: "Contato" },
  ],
  floors: [
    { code: "TÉRREO", label: "Início", anchor: "inicio" },
    { code: "PAV 01", label: "Sobre", anchor: "sobre" },
    { code: "PAV 02", label: "Filosofia", anchor: "filosofia" },
    { code: "PAV 03", label: "O Custo", anchor: "custo" },
    { code: "PAV 04", label: "Projetos", anchor: "projetos" },
    { code: "PAV 05", label: "Blindagem", anchor: "blindagem" },
    { code: "PAV 06", label: "Vozes", anchor: "vozes" },
    { code: "COBERTURA", label: "Contato", anchor: "contato" },
  ],
  hero: {
    kicker: "Engenheiro Civil · CREA-TO",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1800",
    title: ["Forma, função", "e precisão."],
    lead: "Projeto, estrutura e gestão de obra para quem entende que uma construção bem feita se mede em décadas — não em metros quadrados.",
    ctaPrimary: "Solicitar orçamento",
    ctaSecondary: "Ver projetos",
    caption: "Render · Edifício residencial · Palmas/TO",
  },
  stats: [
    { value: "30+", label: "Anos de atuação" },
    { value: "240+", label: "Projetos entregues" },
    { value: "98%", label: "Clientes satisfeitos" },
    { value: "35+", label: "Obras acompanhadas" },
  ],
  about: {
    kicker: "Quem assina o projeto",
    photo:
      "https://images.pexels.com/photos/13729358/pexels-photo-13729358.png?auto=compress&cs=tinysrgb&w=1200",
    title: "Robson Araújo",
    role: "Engenheiro Civil · Projetos e Gestão de Obras",
    paragraphs: [
      "Formado em Engenharia Civil com mais de 30 anos no canteiro, Robson reúne o que raramente vem junto: o rigor de quem calcula a estrutura e a sensibilidade de quem desenha o espaço onde a vida acontece.",
      "Hoje atende como profissional autônomo em Palmas e região — com a proximidade de quem assina pessoalmente cada projeto. O escritório próprio está nos planos; o padrão de entrega, já está aqui.",
    ],
    badge: "Atende como freelancer · Escritório próprio em breve",
    miniStats: [
      { value: "CREA-TO", label: "Registro ativo" },
      { value: "Palmas/TO", label: "Base de atuação" },
      { value: "1 a 1", label: "Atendimento direto" },
    ],
    photoCaption: "Maquete · estudo de projeto",
  },
  philosophy: {
    kicker: "Como eu penso um projeto",
    thesis: [
      "Engenharia não é desenhar o que cabe",
      "no orçamento. É desenhar o que vai",
      "durar 50 anos.",
    ],
    body: [
      "Antes de qualquer linha, eu pergunto como esse espaço vai ser usado daqui a vinte anos. A decisão técnica certa raramente é a mais barata na planilha — é a que evita a fissura, o retrabalho e a reforma que ninguém previu.",
      "Por isso não vendo serviços avulsos. Vendo um raciocínio integrado: a estrutura conversa com a arquitetura, que conversa com a obra, que conversa com o orçamento real do cliente.",
    ],
    services: [
      {
        n: "01",
        title: "Projeto Estrutural",
        desc: "Cálculo, dimensionamento e detalhamento de fundações, lajes, pilares e vigas com responsabilidade técnica.",
      },
      {
        n: "02",
        title: "Projeto Arquitetônico",
        desc: "Concepção do espaço unindo conforto, estética e viabilidade construtiva desde o primeiro estudo.",
      },
      {
        n: "03",
        title: "Gerenciamento de Obra",
        desc: "Fiscalização técnica, controle de prazo, custo e qualidade — o projeto sai do papel como foi pensado.",
      },
      {
        n: "04",
        title: "Consultoria Técnica",
        desc: "Laudos, perícias e pareceres para decisões seguras antes de comprar, reformar ou construir.",
      },
      {
        n: "05",
        title: "Regularização",
        desc: "ART, aprovação de projeto, alvará e habite-se — a obra legalizada e o patrimônio protegido.",
      },
    ],
  },
  cost: {
    kicker: "O custo de não ter um engenheiro",
    title: "Economizar no projeto é caro.",
    lead: "Toda obra sem acompanhamento técnico paga a conta depois — e ela vem com juros.",
    items: [
      {
        stat: "até 30%",
        title: "Retrabalho",
        desc: "Do orçamento desperdiçado refazendo o que foi mal executado por falta de projeto.",
      },
      {
        stat: "embargo",
        title: "Multa e paralisação",
        desc: "Obra sem ART e projeto aprovado pode ser embargada e multada pela prefeitura a qualquer momento.",
      },
      {
        stat: "estrutural",
        title: "Risco oculto",
        desc: "Fissuras, recalque e sobrecarga só aparecem anos depois — quando o conserto custa uma obra nova.",
      },
      {
        stat: "-20%",
        title: "Desvalorização",
        desc: "Imóvel irregular ou com vícios construtivos perde valor real na hora da venda ou do financiamento.",
      },
    ],
  },
  projects: [
    {
      id: "horizonte",
      title: "Residência Horizonte",
      place: "Palmas / TO",
      type: "Residencial unifamiliar",
      year: "2024",
      span: "wide",
      img: "https://images.pexels.com/photos/6342356/pexels-photo-6342356.jpeg?auto=compress&cs=tinysrgb&w=1400",
      caption: "Fachada · Residência Horizonte",
      problem:
        "O terreno em aclive e a vontade do cliente por amplos vãos livres exigiam uma solução estrutural que a alvenaria convencional não entregaria sem pilares no meio da sala.",
      decision:
        "Projetamos uma estrutura em concreto armado com vigas de transição e laje nervurada, eliminando pilares na área social e ancorando a edificação no aclive com fundação em tubulão.",
      result:
        "Sala de estar com vão livre de 9 metros, zero patologias na entrega e cronograma cumprido com 8% de economia sobre o orçamento inicial graças à compatibilização de projetos.",
      facts: [
        { k: "Área", v: "320 m²" },
        { k: "Prazo", v: "11 meses" },
        { k: "Economia", v: "8%" },
      ],
    },
    {
      id: "aurora",
      title: "Edifício Aurora",
      place: "Palmas / TO",
      type: "Multifamiliar · 6 pavimentos",
      year: "2023",
      span: "tall",
      img: "https://images.pexels.com/photos/18214902/pexels-photo-18214902.jpeg?auto=compress&cs=tinysrgb&w=1400",
      caption: "Fachada · Edifício Aurora",
      problem:
        "Empreendimento multifamiliar com pressão de custo e prazo, e baixa tolerância a aditivos no orçamento estrutural.",
      decision:
        "Estrutura calculada para racionalização de formas e armaduras, com controle tecnológico do concreto em todas as concretagens e cronograma físico-financeiro semanal.",
      result:
        "6 pavimentos entregues no prazo contratual, sem aditivo de custo estrutural e com rastreabilidade completa de cada elemento executado.",
      facts: [
        { k: "Área", v: "2.400 m²" },
        { k: "Prazo", v: "18 meses" },
        { k: "Pavimentos", v: "6" },
      ],
    },
    {
      id: "cerrado",
      title: "Galpão Cerrado",
      place: "Porto Nacional / TO",
      type: "Industrial / Logístico",
      year: "2023",
      span: "normal",
      img: "https://images.pexels.com/photos/12771407/pexels-photo-12771407.jpeg?auto=compress&cs=tinysrgb&w=1400",
      caption: "Estrutura metálica · Galpão Cerrado",
      problem:
        "Necessidade de grandes vãos livres para movimentação de carga com o menor custo por m² coberto possível.",
      decision:
        "Estrutura metálica com pórticos de 25 m de vão e fechamento em telha termoacústica, fundação em sapatas isoladas dimensionadas pela sondagem local.",
      result:
        "1.800 m² de área coberta sem pilares intermediários, montagem em 4 meses e custo 12% abaixo da alternativa em concreto pré-moldado.",
      facts: [
        { k: "Vão livre", v: "25 m" },
        { k: "Prazo", v: "4 meses" },
        { k: "Economia", v: "12%" },
      ],
    },
    {
      id: "solar",
      title: "Reforma Solar",
      place: "Palmas / TO",
      type: "Reforço estrutural",
      year: "2022",
      span: "normal",
      img: "https://images.pexels.com/photos/34331633/pexels-photo-34331633.jpeg?auto=compress&cs=tinysrgb&w=1400",
      caption: "Estrutura · Reforma Solar",
      problem:
        "Imóvel dos anos 90 com fissuras ativas e desejo do proprietário de abrir um pavimento adicional sobre a laje existente.",
      decision:
        "Laudo estrutural, mapeamento de fissuras e reforço de pilares com encamisamento em concreto, viabilizando a sobrecarga do novo pavimento com segurança.",
      result:
        "Patologias estabilizadas, novo pavimento liberado dentro da norma e laudo técnico que valorizou o imóvel para refinanciamento.",
      facts: [
        { k: "Área", v: "180 m²" },
        { k: "Prazo", v: "6 meses" },
        { k: "Laudo", v: "ART" },
      ],
    },
    {
      id: "clinico",
      title: "Centro Clínico Norte",
      place: "Palmas / TO",
      type: "Comercial / Saúde",
      year: "2024",
      span: "wide",
      img: "https://images.pexels.com/photos/30912898/pexels-photo-30912898.jpeg?auto=compress&cs=tinysrgb&w=1400",
      caption: "Interior · Centro Clínico Norte",
      problem:
        "Edificação de saúde com exigências rígidas de acessibilidade, instalações e fluxos — e nenhuma margem para retrabalho.",
      decision:
        "Compatibilização total entre arquitetura, estrutura e instalações em modelo único, antecipando conflitos antes da obra começar.",
      result:
        "Aprovação na vigilância sanitária na primeira submissão e obra executada sem interferências entre disciplinas.",
      facts: [
        { k: "Área", v: "640 m²" },
        { k: "Prazo", v: "10 meses" },
        { k: "Aprovação", v: "1ª via" },
      ],
    },
    {
      id: "patio",
      title: "Casa Pátio",
      place: "Palmas / TO",
      type: "Residencial unifamiliar",
      year: "2022",
      span: "normal",
      img: "https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&w=1400",
      caption: "Pátio interno · Casa Pátio",
      problem:
        "Clima quente de Palmas exigia conforto térmico sem depender só de ar-condicionado, dentro de orçamento residencial.",
      decision:
        "Projeto arquitetônico orientado por ventilação cruzada e pátio interno sombreado, com estrutura enxuta para preservar o orçamento.",
      result:
        "Redução real do uso de climatização artificial e uma casa que respira — entregue dentro do custo planejado.",
      facts: [
        { k: "Área", v: "210 m²" },
        { k: "Prazo", v: "9 meses" },
        { k: "Conforto", v: "passivo" },
      ],
    },
  ],
  shield: {
    kicker: "O que pode dar errado — e como eu blindo",
    title: "Toda obra tem cinco pontos de ruptura. Eu fecho os cinco.",
    steps: [
      {
        n: "01",
        phase: "Sondagem & Fundação",
        risk: "Solo avaliado “no olho” gera recalque, trincas e fundação superdimensionada — dinheiro enterrado, literalmente.",
        shield:
          "Sondagem SPT e fundação dimensionada para o solo real do terreno. Nem a menos, nem a mais.",
      },
      {
        n: "02",
        phase: "Projeto & Compatibilização",
        risk: "Estrutura, arquitetura e instalações desenhadas separadas se chocam na obra — e o conserto é quebrar o que já foi feito.",
        shield:
          "Todos os projetos compatibilizados antes da primeira concretagem. O conflito morre no papel.",
      },
      {
        n: "03",
        phase: "Execução da Estrutura",
        risk: "Concreto fora de especificação e armadura mal posicionada comprometem a estrutura para sempre — sem aviso.",
        shield:
          "Controle tecnológico do concreto e fiscalização de armaduras a cada etapa, com registro.",
      },
      {
        n: "04",
        phase: "Instalações & Acabamento",
        risk: "Furos em viga, caimentos errados e infiltração viram a dor de cabeça que reaparece todo ano.",
        shield:
          "Acompanhamento das instalações dentro do projeto, evitando improviso no acabamento.",
      },
      {
        n: "05",
        phase: "Entrega & Regularização",
        risk: "Obra linda, mas sem habite-se: imóvel irregular, sem financiamento e com multa à espreita.",
        shield:
          "As-built, ART e documentação completa. A obra entregue é a obra legalizada.",
      },
    ],
  },
  testimonials: [
    {
      quote:
        "Contratei achando que engenheiro era custo. Entendi na entrega que foi o que segurou meu orçamento. Não construo mais sem.",
      name: "Marina Castro",
      role: "Residência · Palmas/TO",
    },
    {
      quote:
        "Acompanhou cada concretagem pessoalmente. A obra andou sem surpresa e o laudo final valorizou o imóvel na hora de financiar.",
      name: "Eduardo Lima",
      role: "Reforma estrutural · Palmas/TO",
    },
    {
      quote:
        "O galpão saiu antes do prazo e abaixo do que orçamos com outra empresa. Profissionalismo do começo ao fim.",
      name: "Cláudia Ferreira",
      role: "Galpão logístico · Porto Nacional/TO",
    },
  ],
  contact: {
    kicker: "Vamos projetar",
    title: ["Sua próxima obra", "começa por uma", "conversa técnica."],
    lead: "Conte o que você quer construir, reformar ou regularizar. A primeira análise é direta comigo — sem intermediário.",
    cta: "Falar no WhatsApp",
    ctaAlt: "Enviar e-mail",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  Microcopy estrutural (rótulos de UI que não fazem parte do conteúdo do
//  cliente). Mantido fora de RA_DATA, mas igualmente fora do JSX.
// ─────────────────────────────────────────────────────────────────────────────

export const UI_LABELS = {
  projects: {
    kicker: "Projetos selecionados",
    title: "Obras que explicam o método.",
    lead: "Cada projeto começou por um problema técnico — resolvido no papel antes do canteiro. Toque em um projeto para ver a decisão por trás dele.",
  },
  testimonials: {
    kicker: "Vozes de quem construiu",
    title: "A confiança vem da entrega.",
  },
  shield: {
    risk: "O risco",
    blindage: "A blindagem",
  },
  contactInfo: {
    whatsLabel: "WhatsApp",
    emailLabel: "E-mail",
    baseLabel: "Base",
  },
  modal: {
    problem: "O problema",
    decision: "A decisão técnica",
    result: "O resultado",
    close: "Fechar",
  },
  card: {
    open: "Ver projeto",
  },
} as const;
