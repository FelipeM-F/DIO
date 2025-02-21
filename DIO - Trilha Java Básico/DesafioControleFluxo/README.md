# Desafio Controle de Fluxo

## Descrição
Este projeto é um exercício de controle de fluxo em Java, onde o sistema recebe dois números inteiros via terminal e imprime a sequência de números entre eles. Se o primeiro número for maior que o segundo, uma exceção customizada será lançada.

## Estrutura do Projeto
O projeto é composto por três classes principais:

- **`App.java`**: Classe principal que recebe os dados do usuário e executa a contagem.
- **`Contador.java`**: Contém o método `contar` que valida os números e imprime a sequência.
- **`ParametrosInvalidosException.java`**: Classe de exceção personalizada para validar os parâmetros.

## Como Executar
1. Compile o projeto:
   ```sh
   javac App.java Contador.java ParametrosInvalidosException.java
   ```
2. Execute o programa:
   ```sh
   java App
   ```
3. Insira os valores solicitados no terminal.

## Regras do Programa
- O primeiro número deve ser menor que o segundo.
- Caso contrário, a exceção `ParametrosInvalidosException` é lançada com a mensagem: _"O segundo parâmetro deve ser maior que o primeiro"_.

## Exemplo de Uso
**Entrada:**
```
Digite o primeiro parâmetro:
5
Digite o segundo parâmetro:
10
```
**Saída:**
```
Imprimindo o número 1
Imprimindo o número 2
Imprimindo o número 3
Imprimindo o número 4
Imprimindo o número 5
```

## Tecnologias Utilizadas
- Java 8+
- Terminal (CLI)

