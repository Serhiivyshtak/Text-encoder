class Element {
    static encodeKeys = {
        'a' : '5',
        'A' : ')',
        'b' : 'q',
        'B' : '=',
        'c' : '3',
        'C' : 'P',
        'd' : 'S',
        'D' : '(',
        'e' : '2',
        'E' : '!',
        'f' : '0',
        'F' : '§',
        'g' : 'u',
        'G' : '"',
        'h' : '8',
        'H' : '/',
        'i' : '1',
        'I' : '$',
        'j' : '4',
        'J' : '%',
        'k' : 'E',
        'K' : 'g',
        'l' : 'A',
        'L' : 'a',
        'm' : 'e',
        'M' : 'G',
        'n' : '+',
        'N' : '-',
        'o' : 'B',
        'O' : ']',
        'p' : 'b',
        'P' : 'F',
        'q' : '#',
        'Q' : 'U', 
        'r' : 'l',
        'R' : ',',
        's' : '.',
        'S' : ':',
        't' : 'i',
        'T' : '`',
        'u' : 't',
        'U' : 'c',
        'v' : 'Q',
        'V' : '>',
        'w' : 'j',
        'W' : 'T',
        'x' : '<', 
        'X' : '^',
        'y' : 'V',
        'Y' : '°',
        'z' : 'd',
        'Z' : 'R',
        '!' : 'z',
        '"' : 'w', 
        "'" : 'v',
        '§' : '6',
        '%' : '|',
        '&' : '9',
        '/' : '&',
        '(' : 'D',
        ')' : '[',
        '=' : 'O',
        '?' : 'N',
        '+' : 'n',
        '*' : 'Y',
        '-' : '}',
        '#' : 'o',
        '.' : 'I',
        ',' : 'p',
        ':' : 'y',
        ';' : 'f',
        '>' : '7',
        '<' : 'Z',
        '{' : 'h',
        '}' : ';',
        '[' : 'W',
        ']' : 'J',
        '@' : 'X',
        ' ' : 'M',
        '_' : 'm',
        '0' : 'L',
        '1' : '{', 
        '2' : 'k',
        '3' : 'x',
        '4' : 's',
        '5' : '~',
        '6' : 'K',
        '7' : 'C',
        '8' : 'H',
        '9' : 'r',  
    } 
    static decodeKeys = Object.fromEntries(Object.entries(Element.encodeKeys)
    .map((everyPair) => {return everyPair.reverse()}));
;
    constructor (option) {
        this.selector = option;
    }

    get HTMLElement () {
        return document.querySelector(this.selector)
    }

    static encode (string) {
        const encodedArray = [];
        for (let i = 0; i <= string.length; i++) {
            encodedArray.push(Element.encodeKeys[string[i]]);
        }
        const encodedString = encodedArray.join('');
        encodedOutput.HTMLElement.innerText = encodedString;
    } 

    static decode (string) {
        const decodedArray = [];
        for (let i = 0; i <= string.length; i++) {
            decodedArray.push(Element.decodeKeys[string[i]]);
        }
        const decodedString = decodedArray.join('');
        decodedOutput.HTMLElement.innerText = decodedString;
    }

    static clearEncodeInput () {
        encodeInput.HTMLElement.value = '';
    }

    static clearDecodeInput () {
        decodeInput.HTMLElement.value = '';
    }

    static copyEncodedOutput () {
        if (encodedOutput.HTMLElement.value.trim() == '') {
            copyEncodedButton.HTMLElement.innerText = 'output is empty';
            copyEncodedButton.HTMLElement.classList.remove('btn-outline-secondary');
            copyEncodedButton.HTMLElement.classList.add('btn-outline-danger');
            setTimeout(() => {
                copyEncodedButton.HTMLElement.innerText = 'copy';
                copyEncodedButton.HTMLElement.classList.add('btn-outline-secondary');
                copyEncodedButton.HTMLElement.classList.remove('btn-outline-danger');
            }, 3000)
        } else {
            navigator.clipboard.writeText(encodedOutput.HTMLElement.value);
            copyEncodedButton.HTMLElement.innerText = 'copied';
            copyEncodedButton.HTMLElement.classList.remove('btn-outline-secondary');
            copyEncodedButton.HTMLElement.classList.add('btn-outline-success');
            setTimeout(() => {
                copyEncodedButton.HTMLElement.innerText = 'copy';
                copyEncodedButton.HTMLElement.classList.add('btn-outline-secondary');
                copyEncodedButton.HTMLElement.classList.remove('btn-outline-success');
            }, 3000)
        }
    }

    static copyDecodedOutput () {
        if (decodedOutput.HTMLElement.value.trim() == '') {
            copyDecodedButton.HTMLElement.innerText = 'output is empty';
            copyDecodedButton.HTMLElement.classList.remove('btn-outline-secondary');
            copyDecodedButton.HTMLElement.classList.add('btn-outline-danger');
            setTimeout(() => {
                copyDecodedButton.HTMLElement.innerText = 'copy';
                copyDecodedButton.HTMLElement.classList.add('btn-outline-secondary');
                copyDecodedButton.HTMLElement.classList.remove('btn-outline-danger');
            }, 3000)
        } else {
            navigator.clipboard.writeText(decodedOutput.HTMLElement.value);
            copyDecodedButton.HTMLElement.innerText = 'copied';
            copyDecodedButton.HTMLElement.classList.remove('btn-outline-secondary');
            copyDecodedButton.HTMLElement.classList.add('btn-outline-success');
            setTimeout(() => {
                copyDecodedButton.HTMLElement.innerText = 'copy';
                copyDecodedButton.HTMLElement.classList.add('btn-outline-secondary');
                copyDecodedButton.HTMLElement.classList.remove('btn-outline-success');
            }, 3000)
        }
    }
}



let encodeButton = new Element ('#encode_button');
let decodeButton = new Element ('#decode_button');
let encodeInput = new Element ('#encode_text_area');
let decodeInput = new Element ('#decode_text_area');
let encodedOutput = new Element ('#encoded_output_container');
let decodedOutput = new Element ('#decoded_output_container');
let clearEncodeInputButton = new Element ('#clear_encode_input_button');
let clearDecodeInputButton = new Element ('#clear_decode_input_button');
let copyEncodedButton = new Element ('#encode_copy_button');
let copyDecodedButton = new Element ('#decode_copy_button');


document.addEventListener('click', (e) => {
    if (e.target == encodeButton.HTMLElement) {
        Element.encode(encodeInput.HTMLElement.value.trim());
    }
    if (e.target == clearEncodeInputButton.HTMLElement) {
        Element.clearEncodeInput();
    }
    if (e.target == decodeButton.HTMLElement) {
        Element.decode(decodeInput.HTMLElement.value.trim())
    }
    if (e.target == clearDecodeInputButton.HTMLElement) {
        Element.clearDecodeInput();
    }
    if (e.target == copyEncodedButton.HTMLElement) {
        Element.copyEncodedOutput();
    } 
    if (e.target == copyDecodedButton.HTMLElement) {
        Element.copyDecodedOutput();
    }
})



// What to improve:
// 1) Write better text in field "Why actually Vyshtak encodeing system?";
// 2) Write new field "How to use?";
// 3) Make optimization of code; 
// 4) Make header with ability to change the theme and language
// 5) Make footer with 