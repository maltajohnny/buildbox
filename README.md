Sejam Bem vindos ao Buildbox Job Interview Project 
==================
<p align="center">
 <img src="https://i.postimg.cc/sDwLFd5d/buildbox-it-solutions-logo.jpg" alt=""  width="300" height="300" /> 
</p>

O que será necessário ter:



* Editor de Código fonte  - Utilizado | [Visual Studio Code][0]
* Node | [Nodejs][1]
* Git  | [Git][2]  




A seguir, teremos informações importantes como:
```
- Realizar clone do Projeto
- Abri-lo em seu vscode
- Instalar todas as dependências necessárias
- Rodar os testes (Chrome & CLI)

- OBS: Neste teste subiram arquivos que não seriam versionados no dia a dia por contar dados sensíveis.
  Essas informações seriam gravadas em secrets no próprio github ou AzureDevops. Sendo assim, o arquivo
  cypress.env.json NÃO SERIA versionado.

```
Github Actions
==================
<p align="center">
 <img src="https://i.postimg.cc/XJDwcbh3/Captura-de-Tela-2024-04-15-a-s-04-10-03.png" alt=""  width="1280" height="720" /> 
</p>


Clonando o projeto
==================

Em seu computador, defina o melhor local onde deseja salvar este projeto (Ex: pasta "Documentos"). Siga os passos abaixo para realizar o clone do projeto em seu computador:

Utilizando Windows
==================

1. Abra o Command-Dos:
```
CTR + R > digite cmd e aperte ENTER
```
2. Com o DOS aberto, navegue até o diretório desejado (Ex: Docuementos):
```
cd Documentos
```
3. Clone o projeto:
```
 git clone https://github.com/maltajohnny/buildbox.git
```

Utilizando Mac
==================
1. Abra o terminal:
```
CMD + barra de espaço (spacebar)
```
2. Com o terminal aberto, navegue até o diretório desejado (Ex: Docuements):
```
cd Documents/
```
3. Clone o projeto:
```
 git clone https://github.com/maltajohnny/buildbox.git
```
Abrindo o projeto em seu Vscode
==================

Com o Visual Studio code aberto em seu computador, navegue para abrir o projeto seguindo exemplo abaixo:

* Clique no link para visualizar o exemplo [Visual Studio Code][4]

Em seguida, abra o terminal e digite:
```
npm install
```
* Clique para visualizar o exemplo [Install][5]


Para rodar os seus testes no Chrome, você utilizará o seguinte comando a baixo:
```
npx cypress open
```
Para rodar em modo CLI, você utilizará o seguinte comando abaixo:
```
npm run cy:run
```
<p><br></br></p>

```
```
[0]: https://code.visualstudio.com/download
[1]: https://nodejs.org/en/download
[2]: https://git-scm.com/downloads
[4]: https://ibb.co/YBfNGmg
[5]: https://ibb.co/7QVLRp2
