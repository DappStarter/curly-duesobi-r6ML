require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stone deny noise hospital give end army gesture'; 
let testAccounts = [
"0x8309d1a170e54ce752bfd688f5304aab172761c24262b114812d897af8fb1ef3",
"0x7977807bb452ad8b20e668466856409ab7a96b2179d25db807363170e2a6b4fe",
"0x01e258161c58f2e15198a5bbed96d600994c92e2325d39fdbb781624ef591e57",
"0x744f87c54443692b4ea07f5d3a821f5427bf5023d06ae3c96edc42c9df9143f8",
"0x457544da79b81c623d0751e545d2c60c19d25d12ab3195e79565a7a9858dbc21",
"0x1692a371d7d7abcd3c0cdfa3080074f9a7f72b2ea696f5a10a3f8fa517133e54",
"0x3a5b31983d22e2b82a1f5eeee3af16c2fe69860cc6507090ebb110148420d801",
"0xd6c4d7e32617a0e947fb6c13d528329547ff3d5220c6badc5c77297b141e6ba6",
"0x48a64add8bf69e9f8459e6c595b79f7a785c9771df3d5d4485abd9e90ab4cc49",
"0xb0ec013cabe3f3ddb2518b2f1ba911b5fb6a12af2e1ef7fcd2dfb62aef705529"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

