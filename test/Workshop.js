const {expect} = require('chai')
// const { ethers } = require('hardhat')

describe('Workshop Contract', function() {
    it('Contract returns name', async () => {
        
        const WorkshopManger = ethers.getContractFactory('WorkshopManager')

        const contract = await WorkshopManger.deploy()

        const name = 'Intro to ethers.js'

        expect(await contract.printName()).to.equal(name)
    })
    // it('Adds a new workshop', async () => {

    // })
})