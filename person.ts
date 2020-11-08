import Mobs from "./mobs";

export default class Personagem {
    constructor(
        private _nome: string,
        private _HPMax: number,
        private _vida: number,
        private _destreza: number,
        private _ataque: number,
        private _esquiva: number,
        private _defesa: number,
        private _stamina: number,
        private _xp: number,
        private _xpNecessario: number,
        private _level: number
    ) { }

    
    public get nome() : string {
        return this._nome;
    }
    public get HPMax() : number {
        return this._HPMax;
    }
    public get vida() : number {
        return this._vida;
    }
    public get destreza() : number {
        return this._destreza
    }
    public get ataque() : number {
        return this._ataque
    }
    public get esquiva() : number {
        return this._esquiva
    }
    public get defesa() : number {
        return this._defesa
    }
    public get xp() : number {
        return this._xp
    }


    public set setVida(valor : number) {
        this._vida = valor;
    }


    status(): string {
        return (
            "\nNome: " +
            this._nome +
            ("\nNivel: " + this._level) +
            ("\nHP: " + this._vida + '/' + this._HPMax) +
            ("\nDestreza: " + this._destreza) +
            ("\nAtaque: " + this._ataque) +
            ("\nDefesa: " + this._defesa) +
            ("\nEsquiva: " + this._esquiva) +
            ("\nStamina: " + this._stamina) +
            ("\nExperiência: " + this._xp + "\n")       
        );
    }
    up(): void {
        this._HPMax += 2 + Math.round(Math.random() * 10);
        this._destreza += 2 + Math.round(Math.random() * 5);
        this._ataque += 2 + Math.round(Math.random() * 5);
        this._esquiva += 2 + Math.round(Math.random() * 5);
        this._defesa += 2 + Math.round(Math.random() * 5);
        this._level += 1;

    }
    matou(mobs: Mobs): string {
        let xpGanho
        
        this._xp += mobs.xp;

        xpGanho = `\nVocê ganhou ${mobs.xp} de experiência`
        while (this._xp >= this._xpNecessario) {
            xpGanho += "\nLevel Up!! \n" + "\n |  |  |  |\n V  V  V  V\n"
            this.up();
            this._xpNecessario *= 2
            xpGanho += this.status();
        }
        return (xpGanho);
    }
    descansar(): string {
        this._stamina = 100;
        this._vida = this._HPMax;
        return ("HP Recuperado!");
    }
    atacar(mobs: Mobs): string {
        let dano = 0;
        let acerto = false;
        let frase = '';

        if (Math.random() * (this._ataque + this._destreza) > Math.random() * (mobs.esquiva + mobs.destreza)) {
            acerto = true;
            dano = this._ataque - mobs.defesa;
            if (this._ataque <= mobs.defesa) {
                dano = 1;
            }
            mobs.setVida = mobs.vida - dano;
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


        if (this._vida <= 0) {
            frase += '\nVocê foi derrotado!'
        }
        return (frase);
    }

    Batalha(mobs: Mobs): string[] {

        let logBatalha: string[] = []
        mobs.setVida = mobs.HPMax;


        for (let i = 0; this._vida > 0 && mobs.vida > 0; i++) {
            logBatalha.push(this.atacar(mobs));

        };

        if (this._vida <= 0) {
            this._vida = 1;
        }
        else {           
            logBatalha.push(this.matou(mobs));
        }

        logBatalha.push('Fim da Batalha!!!')
        return (logBatalha);
    }

    definirNivel(Nivel: number): void {
        for (let i = 0; i < Nivel-1; i++) {
            this.up();
        }
    }
}