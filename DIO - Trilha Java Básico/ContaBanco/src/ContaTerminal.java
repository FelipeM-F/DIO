import java.util.Scanner;

public class ContaTerminal {
    private String agencia;
    private int numero;
    private String nomeCliente;
    private double saldo;

    public void criarConta() {
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("Por favor, digite o número da Agência (máximo 4 dígitos):");
            String inputAgencia = scanner.nextLine().replaceAll("[^0-9]", "");
            if (inputAgencia.length() > 4) {
                System.out.println("Erro: A agência deve ter no máximo 4 dígitos. Tente novamente.");
                continue;
            }
            agencia = inputAgencia.substring(0, inputAgencia.length() - 1) + "-" + inputAgencia.charAt(inputAgencia.length() - 1);
            break;
        }

        while (true) {
            System.out.println("Por favor, digite o número da Conta (máximo 4 dígitos):");
            String inputConta = scanner.nextLine().replaceAll("[^0-9]", "");
            if (inputConta.length() > 4) {
                System.out.println("Erro: O número da conta deve ter no máximo 4 dígitos. Tente novamente.");
                continue;
            }
            numero = Integer.parseInt(inputConta);
            break;
        }
        
        System.out.println("Por favor, digite seu nome:");
        this.nomeCliente = scanner.nextLine();
        
        System.out.println("Por favor, digite o saldo:");
        this.saldo = scanner.nextDouble();
        
        scanner.close();
    }

    public void exibirMensagem() {
        System.out.println("+----------------------+----------------------+----------------------+----------------------+");
        System.out.printf("| %-20s | %-20s | %-20s | %-20s |", "Nome Cliente", "Agência", "Conta", "Saldo");
        System.out.println("\n+----------------------+----------------------+----------------------+----------------------+");
        System.out.printf("| %-20s | %-20s | %-20d | %-20.2f |", nomeCliente, agencia, numero, saldo);
        System.out.println("\n+----------------------+----------------------+----------------------+----------------------+");
    }
}
