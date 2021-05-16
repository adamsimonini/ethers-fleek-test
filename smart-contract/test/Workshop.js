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

        let w1 =  await contract.workshops(0)

        expect(w1.title).to.equal('workshop 1')
        expect(w1.author).to.equal('author 1')
    })
    it('Returns an array of workshops', async () => {

        let title = 'workshop 1'
        let author = 'author 1'

        await contract.add(title, author)

        let title2 = 'workshop 2'
        let author2 = 'author 2'

        await contract.add(title2, author2)

        let workshopList = await contract.getWorkshops()

        let w1 = workshopList[0]
        let w2 = workshopList[1]

        expect(w1.title).to.equal('workshop 1')
        expect(w1.author).to.equal('author 1')

        expect(w2.title).to.equal('workshop 2')
        expect(w2.author).to.equal('author 2')

        expect(workshopList.length).to.equal(2)

    })
})