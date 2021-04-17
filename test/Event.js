const {expect} = require('chai')
// const { ethers } = require('hardhat')

describe('Event Contract', function() {
    it('Contract returns value of name', async () => {
        const {owner} = ethers.getSigners()

        const Event = await ethers.getContractFactory('Event')

        const hardhatEvent = await Event.deploy()

        const name = "Toronto JS Event";

        expect(await hardhatEvent.printName()).to.equal(name)
    })
})