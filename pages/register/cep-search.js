const form = document.querySelector('form');
const cep = document.querySelector('#cep');

cep.addEventListener('input', (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');

    if (value.length > 5) {
        value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }
    e.target.value = value;

    if (e.target.value.length === 9) {
        fetchAddress(value);
    } else {
        clearAddressFields();
    }
});

function fetchAddress(cep) {
    const cepNumber = cep.replace('-', '');
    fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('estado').value = data.uf;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('bairro').value = data.bairro;
            } else {
                clearAddressFields();
                console.log('CEP not found.');
            }
        })
        .catch(error => {
            clearAddressFields();
            console.error('Error fetching address:', error);
        });
}

function clearAddressFields() {
    document.getElementById('estado').value = 'SC';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
}
