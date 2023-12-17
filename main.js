import {encodeKeyPairs} from './encodekeys.js';
import {languages} from './translation.js';

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

    clearInput () {
        const clearButtonIndex = this.HTMLElement.getAttribute('data-clear-button-index');
        const inputs = [encodeInput, decodeInput];
        inputs[clearButtonIndex].HTMLElement.value = '';
    }

    copyOutput () {
        const copyButtonIndex = this.HTMLElement.getAttribute('data-copy-button-index');
        const outputs = [encodedOutput, decodedOutput];
        const languageIndex = +selectLanguage.HTMLElement.value;

        if (outputs[copyButtonIndex].HTMLElement.value.trim() == '') {
            this.HTMLElement.innerText = languages[languageIndex][18];
            this.HTMLElement.classList.remove('btn-outline-secondary');
            this.HTMLElement.classList.add('btn-outline-danger');
            setTimeout(() => {
                this.HTMLElement.innerText = languages[languageIndex][3];
                this.HTMLElement.classList.add('btn-outline-secondary');
                this.HTMLElement.classList.remove('btn-outline-danger');
            }, 3000)
        } else {
            navigator.clipboard.writeText(outputs[copyButtonIndex].HTMLElement.value);
            this.HTMLElement.innerText = languages[languageIndex][19];
            this.HTMLElement.classList.remove('btn-outline-secondary');
            this.HTMLElement.classList.add('btn-outline-success');
            setTimeout(() => {
                this.HTMLElement.innerText = languages[languageIndex][3];
                this.HTMLElement.classList.add('btn-outline-secondary');
                this.HTMLElement.classList.remove('btn-outline-success');
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
        let languageIndex = +selectLanguage.HTMLElement.value;

        const itemsToTranslate = document.querySelectorAll('.item_to_translate');

        for (let i = 0; i < itemsToTranslate.length; i++) {
            itemsToTranslate[i].innerHTML = languages[languageIndex][i];
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
        clearEncodeInputButton.clearInput();
    }
    if (e.target === decodeButton.HTMLElement) {
        decodeButton.decode(decodeInput.HTMLElement.value.trim())
    }
    if (e.target === clearDecodeInputButton.HTMLElement) {
        clearDecodeInputButton.clearInput();
    }
    if (e.target === copyEncodedButton.HTMLElement) {
        copyEncodedButton.copyOutput();
    } 
    if (e.target === copyDecodedButton.HTMLElement) {
        copyDecodedButton.copyOutput();
    }
    if (e.target === themeToggleButton.HTMLElement || e.target === themeToggleButton.HTMLElement.children[0] || e.target === themeToggleButton.HTMLElement.children[0].children[0]) {
        themeToggleButton.changeTheme();
    }
});

selectLanguage.HTMLElement.addEventListener('change', () => {
    selectLanguage.changeLanguage();
});