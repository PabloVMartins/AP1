import Heroi from "./heroi";
import Mobs from "./mobs";
import prompt from "prompt-sync";

let person: Heroi = new Heroi("Suyside");

 // person.definirNivel(50);

let mobs: Mobs[] = []

mobs[0] = new Mobs("Slime");
mobs[1] = new Mobs("Goblin");
mobs[2] = new Mobs("Orc");
mobs[3] = new Mobs("Vampiro");
mobs[4] = new Mobs("Dragão");


let teclado = prompt();
let option: number = 0;

while (option != 9 && mobs[4].vida > 0) {
    console.log("+========== Personagem ==========+");
    console.log("|1. Entrar na Dungeon            |");
    console.log("|2. Descansar                    |");
    console.log("|3. Exibir Atributos             |");
    console.log("|9. Sair                         |");
    console.log("+================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            console.clear();
            console.log("+=========== Andares ============+");
            console.log("|1. Poço dos Slimes              |");
            console.log("|2. Calabouço dos Goblins        |");
            console.log("|3. Fortaleza dos orcs           |");
            console.log("|4. Palacio dos Vampiros         |");
            console.log("|5. Covil do Dragão              |");
            console.log("|9. Voltar                       |");
            console.log("+================================+");

            let selecao = +teclado("Escolha uma ação: ");
            console.clear();
            if (selecao >= 1 && selecao <= 5) {

                geraçãoMobs(selecao);

                let logBatalha = person.Batalha(mobs[selecao - 1]);

                for (let i = 0; i < logBatalha.length; i++) {
                    console.log(logBatalha[i]);
                    for (let j = 0; j < 200; j++)
                        for (let k = 0; k < 10000000; k++);
                }
            }
            else if (selecao != 9) {
                console.log(`O herói ficou confuso... Não saiu do lugar`);
            }
            break;
        case 2:
            console.clear();
            console.log();
            console.log("+================================+");
            console.log(person.descansar());
            console.log("+================================+");
            console.log();
            console.log();
            break;
        case 3:
            console.clear();
            console.log("+================================+");
            console.log(person.status());
            console.log("+================================+");
            break;
        default:
            break;
    }
}

if (mobs[4].vida <= 0) {
    console.log();
    console.log("+=========================================================+");
    console.log(`| Parabéns! Venceu Derrotou o Dragão, e salvou o mundo!!! |`);
    console.log("+=========================================================+");
}

function geraçãoMobs(selecao: number) {
  
    if (selecao == 1) {
        mobs[0] = new Mobs("Slime");
    }
    if (selecao == 2) {
        mobs[1] = new Mobs("Goblin");
    }
    if (selecao == 3) {
        mobs[2] = new Mobs("Orc");
    }
    if (selecao == 4) {
        mobs[3] = new Mobs("Vampiro");
    }
    if (selecao == 5) {
        mobs[4] = new Mobs("Dragão");
    }

}