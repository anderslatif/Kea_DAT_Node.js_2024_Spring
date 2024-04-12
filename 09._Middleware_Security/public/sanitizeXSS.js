function sanitizeXSS(string) {
    return string.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

const safeText = sanitizeXSS('<script>alert("XSS")</script>');

console.log(safeText);
