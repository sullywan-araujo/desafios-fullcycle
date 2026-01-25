# Desafio: Nginx com Node.js e MySQL

Neste desafio, aplicamos o conceito de **Proxy Reverso**. O Nginx recebe as requisições na porta `8080` e as repassa para uma aplicação Node.js, que por sua vez interage com um banco de dados MySQL.

### Arquitetura:
1.  **Nginx**: Atua como a porta de entrada, protegendo e gerenciando as chamadas para o backend.
2.  **Node.js**: Aplicação responsável por gerar nomes aleatórios e listar os registros do banco.
3.  **MySQL**: Banco de dados que armazena a tabela `people`.

### Como rodar:
```bash
docker-compose up -d