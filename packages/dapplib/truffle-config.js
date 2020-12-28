require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remain equip imitate private fresh seat'; 
let testAccounts = [
"0x87e5d7e5c7ce4f6ad4521061dfe40b3e10809cdeba19d6583dc10f8822d329e7",
"0xb42187b90b335d77138210cde69e7369d0c46d6b0a3ab2522e617c0a99627eae",
"0xfdd817bbd298bb6d92d2b6c88c7834e7fccfb9bf0702f2b5fd4605904587681e",
"0xeb07968a32a51f22d412a563b40747efa27f5ccf8ea6c634a985d5e1d760e059",
"0x30f09126ca3d2a80588c38b1da34d9547a160a09acbaefd2e975cefb94ea2192",
"0x66874ddaf35e436ca73bcb8fc12446baa2a0468ea0b76486f84a46b130041073",
"0x51bb270a7d99e2e25d0aa17b68b1b38ac9fabdcdb6c303a080a1fb9d4c830fa5",
"0x27a131dc1925a4826de463384a9e7a043d32e8182c2faa16b404bb46f0fb563c",
"0x53914941c05959ed61c5fc63cdb5862b8c750658ce3b3d2638fac92496cd8c03",
"0x1e7f824fefebf5e349d328382396361000996bfd1fcadc233540a9f2eb5eeaf6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
