import {encodeKeyPairs} from './encodekeys.js'

class Element {
    static encodeKeys = encodeKeyPairs;
    static decodeKeys = Object.fromEntries(Object.entries(Element.encodeKeys)
    .map((everyPair) => {return everyPair.reverse()}));
;
    constructor (options) {
        this.selector = options[0];
    }

    get HTMLElement () {
        return document.querySelector(this.selector)
    }
}

class Button extends Element {
    constructor (options) {
        super(options)
    }

    encode (string) {
        const encodedArray = [];
        for (let i = 0; i <= string.length; i++) {
            encodedArray.push(Element.encodeKeys[string[i]]);
        }
        const encodedString = encodedArray.join('');
        encodedOutput.HTMLElement.innerText = encodedString;
    } 

    decode (string) {
        const decodedArray = [];
        for (let i = 0; i <= string.length; i++) {
            decodedArray.push(Element.decodeKeys[string[i]]);
        }
        const decodedString = decodedArray.join('');
        decodedOutput.HTMLElement.innerText = decodedString;
    }

    clearEncodeInput () {
        encodeInput.HTMLElement.value = '';
    }

    clearDecodeInput () {
        decodeInput.HTMLElement.value = '';
    }

    copyEncodedOutput () {
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

    copyDecodedOutput () {
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

    changeTheme () {
        const blocksToChangeColorTheme = document.querySelectorAll('.block_to_change_color');
        const textToCgangeColorTheme = document.querySelectorAll('.text_to_change_color');
        for (let everyBlock of blocksToChangeColorTheme) {
            everyBlock.classList.toggle('bg-dark');
            everyBlock.classList.toggle('bg-light');
        }
        for (let everyText of textToCgangeColorTheme) {
            everyText.classList.toggle('text-dark');
            everyText.classList.toggle('text-white');
        }
        themeToggleButton.HTMLElement.children[0].children[0].classList.toggle('fill_dark');
        themeToggleButton.HTMLElement.children[0].children[0].classList.toggle('fill_light');
    }
}

class Select extends Element {
    constructor (options) {
        super(options)
    }

    changeLanguage () {
        let selectValue = Number(selectLanguage.HTMLElement.value);
        if (selectValue === 1) {
            console.log('EN');
        } if (selectValue === 2) {
            console.log('DE');
        } if (selectValue === 3) {
            console.log('UA');
        }
    }
}

let encodeInput = new Element (['#encode_text_area']);
let decodeInput = new Element (['#decode_text_area']);
let encodedOutput = new Element (['#encoded_output_container']);
let decodedOutput = new Element (['#decoded_output_container']);

let themeToggleButton = new Button(['#theme_toggle_button']);
let encodeButton = new Button (['#encode_button']);
let decodeButton = new Button (['#decode_button']);
let clearEncodeInputButton = new Button (['#clear_encode_input_button']);
let clearDecodeInputButton = new Button (['#clear_decode_input_button']);
let copyEncodedButton = new Button (['#encode_copy_button']);
let copyDecodedButton = new Button (['#decode_copy_button']);

let selectLanguage = new Select(['#language_select']);


document.addEventListener('click', (e) => {
    if (e.target === encodeButton.HTMLElement) {
        encodeButton.encode(encodeInput.HTMLElement.value.trim());
    }
    if (e.target === clearEncodeInputButton.HTMLElement) {
        clearEncodeInputButton.clearEncodeInput();
    }
    if (e.target === decodeButton.HTMLElement) {
        decodeButton.decode(decodeInput.HTMLElement.value.trim())
    }
    if (e.target === clearDecodeInputButton.HTMLElement) {
        clearDecodeInputButton.clearDecodeInput();
    }
    if (e.target === copyEncodedButton.HTMLElement) {
        copyEncodedButton.copyEncodedOutput();
    } 
    if (e.target === copyDecodedButton.HTMLElement) {
        copyDecodedButton.copyDecodedOutput();
    }
    if (e.target === themeToggleButton.HTMLElement || e.target === themeToggleButton.HTMLElement.children[0] || e.target === themeToggleButton.HTMLElement.children[0].children[0]) {
        themeToggleButton.changeTheme();
    }
});

selectLanguage.HTMLElement.addEventListener('change', () => {
    selectLanguage.changeLanguage();
});


// What to improve:
// 1) Write better text in field "Why actually Vyshtak encodeing system?";
// 2) Write new field "How to use?";
// 3) Make optimization of code; 
// 4) Make header with ability to change the theme and language
// 5) Make footer with

