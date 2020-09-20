import Reactor from './reactor'

const BARCODE_CAPTURE_EVENT = 'barcodeCaptured';

class BarcodeService {

    #reactor = new Reactor();
    #barcodeString = "";

    constructor() {
        this.#reactor.registerEvent(BARCODE_CAPTURE_EVENT);  
    }

    pushCharacter(value) {
        if (value == "\n") {
            if (this.#barcodeString != "") {
                this.#reactor.dispatchEvent(BARCODE_CAPTURE_EVENT, this.#barcodeString);
                this.#barcodeString = "";
            }
        }
        else {
            this.#barcodeString += value;
        }
    }

    subscribe(handler) {
        this.#reactor.addEventListener(BARCODE_CAPTURE_EVENT, handler, false);
    }

    unsubscribe(handler) {
        this.#reactor.removeEventListener(BARCODE_CAPTURE_EVENT, handler);
    }
}

let barcodeService = new BarcodeService();

export default barcodeService;