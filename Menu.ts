import leia = require('readline-sync')
import { colors } from './Src/Util/Colors';
import { Conta } from './Src/Model/Conta';


export function main() {

let opcao: number;

let c1: Conta = new Conta(1, 123, 1, "Mariah Caroline", 10000);
c1.visualizar();

c1.sacar(15000);
c1.visualizar();

c1.depositar(5000);
c1.visualizar();

while(true) {
 
    console.log(colors.bg.black, colors.fg.bluestrong, "*****************************************");
    console.log("                                         ");
    console.log("       BANCO DO BRAZIL COM Z             ");
    console.log("                                         ");
    console.log("  *****************************************");
    console.log("                                         ");
    console.log("    1. Criar conta                       ");
    console.log("    2. Listar todas as contas            ");
    console.log("    3. Buscar conta por numero           ");
    console.log("    4. Atualizar dados da conta          ");
    console.log("    5. Apagar conta                      ");
    console.log("    6. Sacar                             ");
    console.log("    7. Depositar                         ");
    console.log("    8. Transferir valores entre contas   ");
    console.log("    9. Sair                              ");
    console.log("                                         ");
    console.log("  *****************************************");
    console.log("                                         ", 
    colors.reset);

    console.log("Entre com a opcao desejada: ");
    opcao = leia.questionInt("");

    if(opcao == 9) {
        console.log("\nBanco do Brazil com Z - O seu futuro comeca aqui!");
        about();
        process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar conta\n\n");
        break;
        
      case 2:
        console.log("\n\nListar todas as contas\n\n");
        break;
        
      case 3:
        console.log("\n\nConsultar dados da conta - Por numero\n\n");
        break;

      case 4:
        console.log("\n\nAtualizar dados da conta\n\n");
        break;

      case 5:
        console.log("\n\nApagar uma conta\n\n");
        break;

      case 6:
        console.log("\n\nSaque\n\n");
        break;

      case 7:
        console.log("\n\nDeposito\n\n");
        break;

      case 8:
        console.log("\n\nTransferir valores entre contas \n\n");
        break;
        default:
            console.log("\nOpcao invalida!\n");
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

main();