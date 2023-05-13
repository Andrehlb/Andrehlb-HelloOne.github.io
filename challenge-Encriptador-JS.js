function processText() {
    const inputText = document.getElementById('text-area-1').value;
    const action = document.querySelector('input[name="action"]:checked').value;
    let outputText = '';

    if (action === 'encrypt') {
        outputText = encrypt(inputText);
    } else {
        outputText = decrypt(inputText);
    }

    document.getElementById('text-area-2').value = outputText;
}

function encrypt(text) {
    const map = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let encrypted = '';

    for (let char of text) {
        if (map[char]) {
            encrypted += map[char];
        } else {
            encrypted += char;
        }
    }

    return encrypted;
}

function decrypt(text) {
    const map = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let decrypted = text;

    for (let key in map) {
        decrypted = decrypted.split(key).join(map[key]);
    }

    return decrypted;
}

function copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = document.getElementById('text-area-2').value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Texto copiado para a área de transferência!');
}
