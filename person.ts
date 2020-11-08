import Mobs from "./mobs";

export default class Personagem {
    constructor(
        public nome: string,
        public HPMax: number,
        public vida: number,
        public destreza: number,
        public ataque: number,
        public esquiva: number,
        public defesa: number,
        public stamina: number,
        public xp: number,
        public xpNecessario: number
    ) { }
    status(): string {
        return (
            "\nNome: " +
            this.nome +
            ("\nHP: " + this.vida + '/' + this.HPMax) +
            ("\nDestreza: " + this.destreza) +
            ("\nAtaque: " + this.ataque) +
            ("\nDefesa: " + this.defesa) +
            ("\nEsquiva: " + this.esquiva) +
            ("\nStamina: " + this.stamina) +
            ("\nExperiência: " + this.xp.toFixed(2) + '/' + this.xpNecessario.toFixed(2))
        );
    }
    up(): void {
        this.HPMax += 2 + Math.round(Math.random() * 10);
        this.destreza += 2 + Math.round(Math.random() * 5);
        this.ataque += 2 + Math.round(Math.random() * 5);
        this.esquiva += 2 + Math.round(Math.random() * 5);
        this.defesa += 2 + Math.round(Math.random() * 5);

    }
    matou(mobs: Mobs): string {
        let xpGanho
        
        this.xp += mobs.xp;

        xpGanho = `\nVocê ganhou ${mobs.xp} de experiência`
        while (this.xp >= this.xpNecessario) {
            xpGanho += "\nLevel Up!! \n" + this.status() + "\n |  |  |  |\n V  V  V  V\n"
            this.up();
            this.xpNecessario *= 1.3
            xpGanho += this.status();
        }
        return (xpGanho);
    }
    descansar(): string {
        this.stamina = 100;
        this.vida = this.HPMax;
        return ("HP Recuperado!");
    }
    atacar(mobs: Mobs): string {
        let dano = 0;
        let acerto = false;
        let frase = '';

        if (Math.random() * (this.ataque + this.destreza) > Math.random() * (mobs.esquiva + mobs.destreza)) {
            acerto = true;
            dano = this.ataque - mobs.defesa;
            if (this.ataque <= mobs.defesa) {
                dano = 1;
            }
            mobs.vida -= dano;
        }

        if (acerto) {
            frase = (`${mobs.nome} recebeu um golpe: ${dano}`);
        }
        else {
            frase = (`${mobs.nome} esquivou.`);
        }


        if (mobs.vida > 0) {
            frase += ('\n' + mobs.contraAtaque(this));
        }
        else {
            frase += (`\n${mobs.nome} foi derrotado!`)
        }


        if (this.vida <= 0) {
            frase += '\nVocê foi derrotado!'
        }
        return (frase);
    }

    Batalha(mobs: Mobs): string[] {

        let logBatalha: string[] = []
        mobs.vida = mobs.HPMax;


        for (let i = 0; this.vida > 0 && mobs.vida > 0; i++) {
            logBatalha.push(this.atacar(mobs));

        };

        if (this.vida <= 0) {
            this.vida = 1;
        }
        else {           
            logBatalha.push(this.matou(mobs));
        }

        logBatalha.push('Fim da Batalha!!!')
        return (logBatalha);
    }
}