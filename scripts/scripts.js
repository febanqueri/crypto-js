function encrypt() {
    var input = document.getElementById('text-input').value;
    var encrypted = btoa(input);
    document.getElementById('encrypted-output').value = encrypted;
}
  
function decrypt() {
var encrypted = document.getElementById('encrypted-output').value;
var decrypted = atob(encrypted);
document.getElementById('decrypted-output').value = decrypted;
}

