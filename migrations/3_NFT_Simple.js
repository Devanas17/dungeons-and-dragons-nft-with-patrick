const NFTSimple = artifacts.require('NFTSimple');
// const {LinkToken} = require("@chainlink/contracts/truffle/v0.4/LinkToken");

module.exports = async (deployer, network, [defaultAccount]) => {
    if (!network.startWith("goerli")) {
        LinkToken.setProvider(deployer.provider)
        try {
            await deployer.deploy(LinkToken, {from: defaultAccount})            
            await deployer.deploy(RandomNumberConsumer, LinkToken.address)
        } catch (error) {
            console.log(error)
        }
    } else {
        deployer.deploy(NFTSimple)
    }
}