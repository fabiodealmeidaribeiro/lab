window.addEventListener('DOMContentLoaded', () => {
    fetch('text.txt').then(response => {
        if (!response['ok'])
            throw new Error(response['status']);
        return response.text();
    }).then(result => {
        [ ...result.match(/<([^>]+)>/g) ].map(index => {
            const Term = document.createElement('p');
            Term.appendChild(document.createTextNode('<' + index.replace(/<|>/g, '') + '>'));
            document.querySelector('main').appendChild(Term)
        });
    }).catch(error => {
        console.error(error['message']);
    });
});