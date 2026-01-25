Instalação do go; pode ser feita através da documentação encontrada no site.(https://go.dev/doc/install)# FullCycle Desafios 🚀

Repositório destinado aos desafios práticos do curso FullCycle 3.0 para demonstrar domínio em Docker, Go e outras tecnologias.

## 📁 Desafios Realizados

| Projeto | Tecnologia | Docker Hub |
| :--- | :--- | :--- |
| **Hello World Go** | Go + Multi-stage Build (Scratch) | [Ver Imagem](https://hub.docker.com/r/araujosullywan/hello-fullcycle) |
| **Proxy reverso** | Nginx com Node.js | *Em breve* |

---

## 🛠️ Como executar os desafios

### 1. Hello World (Go)
Este desafio consistiu em criar uma imagem Docker em Go que imprimisse "FullCycle Rocks!!" e tivesse menos de 2MB.

```bash
docker run --rm araujosullywan/hello-fullcycle