// import {
// } from './script-main.js';
// import * as scriptmain from './script-main.js';
window.addEventListener('DOMContentLoaded', () => {

    // ID do arquivo do Google Docs que você deseja ler
    const FileID = '1ud5pOtz1DT-ETej4bjiVoLJvUUq6UcCSRkuLmuzCG3M';
    // URL da API do Google Drive para acessar o conteúdo do arquivo
    const DriveApiUrl = `https://www.googleapis.com/drive/v3/files/${ FileID }?alt=media`;
    // Token de acesso OAuth 2.0
    const AccessToken = 'AIzaSyBW8lSfjuOFvouDaRSVCdfpj4lTimbFDcE'; // Substitua pelo seu token de acesso válido
    // Configuração do cabeçalho da solicitação
    const Headers = {
        Authorization : `Bearer ${ AccessToken }`,
    };
    // Realizar a solicitação HTTP GET para obter o conteúdo do arquivo
    fetch(DriveApiUrl, { Headers }).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        };
        return response.text();
    }).then(result => {
        console.log(result);
        // Faça algo com o texto do arquivo aqui
    }).catch(error => {
        console.error(error);
    });

});