// function doPost(e) {
//     var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1');
//     var params = e.parameter;
    
//     sheet.appendRow([params.nome, params.email, params.telefone]);
    
//     return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
//   }


document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var form = e.target;
    var formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbxjJgOINyg_MJq9goklNTeJRfd3tycNYp-q-XyDAY0AQ5s9iokfVBHMi6mNghdfnC7c/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Cadastro realizado com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao realizar cadastro.');
    });
});