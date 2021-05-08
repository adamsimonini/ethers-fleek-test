const {expect} = require('chai')
// const { ethers } = require('hardhat')

describe('Workshop Contract', function() {

    let WorkshopManager
    let contract

    beforeEach(async () => {
        WorkshopManager =  await ethers.getContractFactory('WorkshopManager')

        contract = await WorkshopManager.deploy()
    })
    
    it('Contract returns name', async () => {
        let name = 'Intro to ethers.js'
        expect(await contract.printName()).to.equal(name)
    })

    it('Adds a new workshop', async () => {
        let title = 'workshop 1'
        let author = 'author 1'

        await contract.add(title, author)

        // let workshop1 = contract.workshops[1]

        // console.log(contract.workshops)
    })
    it('Returns an array of workshops', async () => {

        let workshopList = await contract.getWorkshops();
        console.log(workshopList)
    })
})