# Conta Banco

Este é um projeto simples em Java para simular a criação de uma conta bancária via terminal. O usuário poderá inserir os dados da conta e visualizar as informações formatadas em forma de tabela.

## Tecnologias Utilizadas

- Java
- Scanner (para entrada de dados pelo terminal)

## Como Executar

1. Clone este repositório ou copie os arquivos para seu ambiente de desenvolvimento.
2. Compile o código com:
   ```sh
   javac App.java
   ```
3. Execute o programa com:
   ```sh
   java App
   ```
4. Siga as instruções no terminal para inserir os dados da conta.

## Funcionalidades

- O usuário deve fornecer:
  - Número da agência (máximo de 4 dígitos)
  - Número da conta (máximo de 4 dígitos)
  - Nome do cliente
  - Saldo inicial
- O sistema valida o número da agência e da conta, garantindo que não ultrapassem 4 dígitos.
- Após a inserção dos dados, o sistema exibe as informações formatadas em forma de tabela.

## Exemplo de Saída

```
+----------------------+----------------------+----------------------+----------------------+
| Nome Cliente        | Agência             | Conta               | Saldo               |
+----------------------+----------------------+----------------------+----------------------+
| Mario Andrade      | 067-8               | 1021                | 237.48              |
+----------------------+----------------------+----------------------+----------------------+
```


