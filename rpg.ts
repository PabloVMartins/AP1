import Personagem from "./person";
import Mobs from "./mobs";
import prompt from "prompt-sync";

let person: Personagem = new Personagem("Suyside", 15, 15, 15, 13, 13, 13, 50, 0, 5);

let mobs: Mobs[] = []

mobs[0] = (new Mobs("Slime", 5 + Math.random() * 10, 0, 5 + Math.random() * 15, 5 + Math.round(Math.random() * 10), 3 + Math.random() * 10, 3 + Math.round(Math.random() * 10), 5));
mobs[1] = (new Mobs("Goblin", 15 + Math.random() * 15, 0, 10 + Math.random() * 30, 10 + Math.round(Math.random() * 20), 6 + Math.random() * 15, 6 + Math.round(Math.random() * 15), 10));
mobs[2] = (new Mobs("Orc", 30 + Math.random() * 20, 0, 20 + Math.random() * 50, 20 + Math.round(Math.random() * 30), 12 + Math.random() * 20, 12 + Math.round(Math.random() * 20), 20));
mobs[3] = (new Mobs("Vampiro", 60 + Math.random() * 30, 0, 40 + Math.random() * 75, 40 + Math.round(Math.random() * 40), 24 + Math.random() * 30, 24 + Math.round(Math.random() * 30), 40));
mobs[4] = (new Mobs("Dragão", 240 + Math.random() * 50, 0, 120 + Math.random() * 100, 120 + Math.round(Math.random() * 50), 96 + Math.random() * 50, 96 + Math.round(Math.random() * 50), 100000000));


let teclado = prompt();
let option: number = 0;

while (option != 9 /*&& mobs[4].vida > 0*/) {
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

                mobs[0] = (new Mobs("Slime", 5 + Math.random() * 10, 0, 5 + Math.random() * 15, 5 + Math.round(Math.random() * 10), 3 + Math.random() * 10, 3 + Math.round(Math.random() * 10), 5));
                mobs[1] = (new Mobs("Goblin", 15 + Math.random() * 15, 0, 10 + Math.random() * 30, 10 + Math.round(Math.random() * 20), 6 + Math.random() * 15, 6 + Math.round(Math.random() * 15), 10));
                mobs[2] = (new Mobs("Orc", 30 + Math.random() * 20, 0, 20 + Math.random() * 50, 20 + Math.round(Math.random() * 30), 12 + Math.random() * 20, 12 + Math.round(Math.random() * 20), 20));
                mobs[3] = (new Mobs("Vampiro", 60 + Math.random() * 30, 0, 40 + Math.random() * 75, 40 + Math.round(Math.random() * 40), 24 + Math.random() * 30, 24 + Math.round(Math.random() * 30), 40));
                mobs[4] = (new Mobs("Dragão", 240 + Math.random() * 50, 0, 120 + Math.random() * 100, 120 + Math.round(Math.random() * 50), 96 + Math.random() * 50, 96 + Math.round(Math.random() * 50), 100000000));

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
/*if (mobs[4].vida <= 0) {
    console.log();
    console.log("+=========================================================+");
    console.log(`| Parabéns! Venceu Derrotou o Dragão, e salvou o mundo!!! |`);
    console.log("+=========================================================+");
}*/