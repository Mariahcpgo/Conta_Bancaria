import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{

    private _aniversario: number;


	constructor(aniversario: number, numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo)
		this._aniversario = aniversario;

	}

    public aniversario(_aniversario: number) {
        return this._aniversario;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Dia do aniversario: " + this._aniversario)
        
    }

}