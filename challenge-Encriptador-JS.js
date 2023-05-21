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

// Animação de criptografia

function animateTitle() {
    const titleElement = document.getElementById('main-title');
    const originalTitle = titleElement.textContent;
    const encryptedTitles = [encrypt("Personalizada"), encrypt(encrypt("Personalizada")), encrypt(encrypt(encrypt("Personalizada")))];
    let currentTitleIndex = 0;

    setInterval(() => {
        const newTitle = originalTitle.replace("Personalizada", encryptedTitles[currentTitleIndex]);
        titleElement.textContent = newTitle;
        currentTitleIndex = (currentTitleIndex + 1) % encryptedTitles.length;
    }, 2000); // vai alterar o título a cada 2 segundos
}

window.onload = animateTitle; // chama a função animateTitle quando a página carregar (assim espero hahaha)

