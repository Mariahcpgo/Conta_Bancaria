import leia = require('readline-sync')
import { colors } from './Src/Util/Colors';
import { Conta } from './Src/Model/Conta';
import { ContaPoupanca } from './Src/Model/ContaPoupanca';
import { ContaCorrente } from './Src/Model/ContaCorrente';
import { ContaController } from './Src/Controller/ContaController';


export function main() {

let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
let titular: string;

const tipoContas = ['Conta Corrente', 'Conta Poupança'];

const contas: ContaController = new ContaController();

const CCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 1, 123, "Mariah Garcia", 10000, 5000);
contas.cadastrar(CCorrente);

const CPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 1, 123, "Caroline Oliveira", 5000, 10)
contas.cadastrar(CPoupanca);


while(true) {
 
    console.log(colors.bg.black, colors.fg.bluestrong, "                                  ");
    console.log("*****************************************");
    console.log("                                         ");
    console.log("       BANCO DO BRAZIL COM Z             ");
    console.log("                                         ");
    console.log("*****************************************");
    console.log("                                         ");
    console.log("    1. Criar conta                       ");
    console.log("    2. Listar todas as contas            ");
    console.log("    3. Buscar conta por numero           ");
    console.log("    4. Atualizar dados da conta          ");
    console.log("    5. Apagar conta                      ");
    console.log("    6. Sacar                             ");
    console.log("    7. Depositar                         ");
    console.log("    8. Transferir valores entre contas   ");
    console.log("    9. Buscar Conta por Titular          ");
    console.log("    0. Sair                              ");
    console.log("                                         ");
    console.log("*****************************************");
    console.log("                                         ", 
    colors.reset);

    console.log("Entre com a opcao desejada: ");
    opcao = leia.questionInt("");

    if(opcao == 0) {
        console.log("\nBanco do Brazil com Z - O seu futuro comeca aqui!");
        about();
        process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar conta\n\n");

        console.log("Digite o numero da agencia: ")
        agencia = leia.questionInt("")
        
        console.log("Digite o Nome do Titular: ")
        titular = leia.question("")

        console.log("Informe o tipo da Conta: ")
        tipo = leia.keyInSelect(tipoContas, "", { cancel: false }) + 1

        console.log("Digite o Saldo da Conta: ")
        saldo = leia.questionFloat("")

        switch (tipo) {
          case 1:
              console.log("Digite o Limite da Conta: ")
              limite = leia.questionFloat("")
              contas.cadastrar(
                  new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
              )
              break;
          case 2:
              console.log("Digite o dia do aniversário da Conta: ")
              aniversario = leia.questionInt("")
              contas.cadastrar(
                  new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
              )
              break;
      }

      keyPress()
      break;
        
      case 2:
        console.log("\n\nListar todas as contas\n\n");
        contas.listarTodas();
        keyPress();
        break;
        
      case 3:
        console.log("\n\nConsultar dados da conta - Por numero\n\n");
        numero = leia.questionInt("")
        contas.procurarPorNumero(numero);
        keyPress();
        break;

      case 4:
        console.log("\n\nAtualizar dados da conta\n\n");

        console.log("Digite o Número da Conta: ");
        numero = leia.questionInt("")

        let conta = contas.buscarNoArray(numero)

        if (conta !== null) {
          console.log("Digite o Número da Agência: ")
          agencia = leia.questionInt("")
          
          console.log("Digite o Nome do Titular: ")
          titular = leia.question("")

          tipo = conta.tipo

          console.log("Digite o Saldo da Conta: ")
          saldo = leia.questionFloat("")
          
          switch (tipo) {
            case 1:
              console.log("Digite o Limite da Conta: ")
              limite = leia.questionFloat("")
              contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
              break;
              
            case 2:
              console.log("Digite o dia do aniversário da Conta: ")
              aniversario = leia.questionInt("")
              contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
              break;
                    }

        }else {
            console.log("A Conta não foi Encontrada!")
        }

      keyPress()
      break;

      case 5:
        console.log("\n\nApagar uma conta\n\n");

        console.log("Digite o Número da Conta: ")
        numero = leia.questionInt("")

        contas.deletar(numero);

      keyPress()
      break;

      case 6:
        console.log("\n\nSaque\n\n");

        console.log("Digite o Numero da Conta: ")
        numero = leia.questionInt("")

        console.log("Digite o Valor do Saque: ")
        valor = leia.questionFloat("")

        contas.sacar(numero, valor);

        keyPress();
        break;

      case 7:
        console.log("\n\nDeposito\n\n");

        console.log("Digite o Numero da Conta: ")
        numero = leia.questionInt("")

        console.log("Digite o Valor do Deposito: ")
        valor = leia.questionFloat("")

        contas.depositar(numero, valor);

        keyPress();
        break;

      case 8:
        console.log("\n\nTransferir valores entre contas \n\n");
        
        console.log("Digite o Numero da Conta de Origem: ")
        numero = leia.questionInt("")

        console.log("Digite o Numero da Conta Destino: ")
        numeroDestino = leia.questionInt("")

        console.log("Digite o Valor do Deposito: ")
        valor = leia.questionFloat("")

        contas.transferir(numero, numeroDestino, valor);
        
        keyPress();
        break;

      case 9:
        console.log("\n\nConsultar conta por titular\n\n");

        console.log("Digite o Nome do Titular: ")
        titular = leia.question("")

        contas.procurarPorTitular(titular);

        keyPress();
        break;

        default:
            console.log("\nOpcao invalida!\n");
            keyPress();
            break;

    }
}}

export function about(): void {
    console.log(colors.bg.black, colors.fg.gray, "\n*********************************************")
    console.log("\nProjeto desenvolvido por: Mariah Caroline");
    console.log("\nGeneration Brasil - generation@generation.org");
    console.log("\ngithub.com/conta_bancaria");
    console.log("\n*********************************************", colors.reset);
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  leia.prompt();
}

main();