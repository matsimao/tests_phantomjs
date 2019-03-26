# Testes usando [PhantomJs](https://www.npmjs.com/package/phantom)

## Como usar
* Executar no terminal npm install
* Renomear o arquivo .env.example para .env
* Configurar os dados do .env com as credenciais necessarias para os testes

## Testes

* **facebook.js**:
Faz login utilizando as variaveis de ambiente _LOGIN_FACEBOOK_ e _PASS_FACEBOOK_.
Realiza uma capturas de tela:
  * 1º tela de login 
  * 2º tela inicial após o login

* **github.js**:
Faz login utilizando as variaveis de ambiente _LOGIN_GITHUB_ e _PASS_GITHUB_.
Realiza uma capturas de tela:
  * 1º tela de login 
  * 2º tela inicial após o login


* **google.js**:
Acessa a pagina do google.
Realiza uma capturas de tela:
  * 1º tela inicial 
  * 2º logo do google
