const text = document.querySelector("#text");
const refresh = document.querySelector(".refresh");

const randFrase = () => {
  const len = frases.length;
  const rand = Math.floor(Math.random() * len);
  text.textContent = `“${frases[rand]}”`;
  refresh.classList.add("ative");
  setTimeout(() => {
    refresh.classList.remove("ative");
  }, 500);
};

refresh.addEventListener("click", randFrase);
window.onload = () => randFrase();

const frases = [
  "A persistência é\no caminho do êxito.",
  "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.",
  "Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho.",
  "Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?",
  "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
  "Só existe um êxito: a capacidade de levar a vida que se quer.",
  "Ser você mesmo em um mundo que está constantemente tentando fazer de você outra coisa é a maior realização.",
  "Os professores abrem a porta, mas você deve entrar por você mesmo.",
  "Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.",
  "Você consegue o melhor dos outros quando  você dá o melhor de você mesmo.",
  "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
  "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
  "Cuide-se como se você fosse de ouro, ponha-se você mesmo de vez em quando numa redoma e poupe-se.",
  "E aí, quando você estiver muito apaixonado por você mesmo, vai poder ser muito feliz e se apaixonar por alguém.",
  "Durante todo o tempo de tua vida, seja sempre você mesmo, com todas as tuas virtudes e imperfeições. Muitos seriam pessoas melhores se não quisessem ser tão bons.",
  "E eu ainda escolheria você, mesmo com todas as opções do planeta.",
  "O que é realmente importante é estar feliz com você mesmo...",
  "Imagine uma nova história para sua vida e acredite nela.",
  "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
  "Acredite que você pode, assim você já está no meio do caminho.",
  "Se você quer um pedacinho do paraíso, acredite em Deus.\nMas se você quer conquistar o mundo, acredite em você\nporque Deus já te deu tudo o que você precisa \npara você vencer.",
  "Devíamos ser ensinados a não\nesperar por inspiração para\ncomeçar algo. Ação sempre gera\ninspiração. Inspiração raramente gera ação.",
  "A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.",
  "A coragem não é ausência do medo; é a persistência apesar do medo.",
  "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
  "O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.",
  "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.",
  "Todo mundo é capaz de sentir os sofrimentos de um amigo. Ver com agrado os seus êxitos exige uma natureza muito delicada.",
];
