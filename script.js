function transformText() {
    let input = document.getElementById('inputText').value;

    document.getElementById('lowerCase').textContent = input.toLowerCase();
    document.getElementById('upperCase').textContent = input.toUpperCase();
    document.getElementById('camelCase').textContent = toCamelCase(input);
    document.getElementById('pascalCase').textContent = toPascalCase(input);
    document.getElementById('snakeCase').textContent = toSnakeCase(input);
    document.getElementById('kebabCase').textContent = toKebabCase(input);
    document.getElementById('trim').textContent = input.replace(/\s+/g, '');
}

function toCamelCase(str) {
    return str
        .replace(/\s(.)/g, function (match, group1) {
            return group1.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (match, group1) {
            return group1.toLowerCase();
        });
}

function toPascalCase(str) {
    return str
        .replace(/\s(.)/g, function (match, group1) {
            return group1.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (match, group1) {
            return group1.toUpperCase();
        });
}

function toSnakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
}

function toKebabCase(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}