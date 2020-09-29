import { RNUSBPrinter } from 'react-native-usb-printer';
import { NativeModules} from 'react-native';
import { Buffer } from 'buffer';

class PrintService {
    
    //constructor() {
    //     var devices = await RNUSBPrinter.getUSBDeviceList();
    // let printedSelected = await RNUSBPrinter.connectPrinter(devices[0].vendor_id, devices[0].product_id);
    // }

    connectPrinter = async(index) => {
        var devices = await RNUSBPrinter.getUSBDeviceList();
        return await RNUSBPrinter.connectPrinter(devices[index].vendor_id, devices[index].product_id);
    }

        
  printText(value) {
    RNUSBPrinter.printText(value);
  }

  printAndCut(value) {
    RNUSBPrinter.printBillTextWithCut(value);
  }

  openCashDrawer() {
    var buf = new Uint8Array([27,112,0,50,250]);      
    var b64encoded = Buffer.from(buf).toString('base64');
       NativeModules.RNPrinter.printRawData(b64encoded);
  }
}

export default PrintService;