import { ContaRepository } from "../Repository/ContaRepository";
import { Conta } from "../Model/Conta";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();

    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if(buscarConta !== null)
        buscarConta.visualizar();

        else
            console.log("Conta não foi Encontrada!")
        
    }

    listarTodas(): void {
        for (let conta of this.listaContas){
        conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi adicionada!")
    }

    atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero);

        if(buscarConta !== null){
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
            console.log(`A Conta numero ${conta.numero} foi Atualizada com exito!`)
        
        } else
        console.log("A Conta não foi Encontrada!")
        
    }

    deletar(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if(buscarConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscarConta), 1)
            console.log(`A conta numero ${numero} foi excluida com exito`)

        } else
        console.log("Conta não foi encontrada!")
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    public gerarNumero(): number{
        return ++ this.numero
    }

    public buscarNoArray(numero: number): Conta | null{
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
       }

       return null;
    }
}