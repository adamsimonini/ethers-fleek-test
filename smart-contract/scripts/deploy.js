//we need hardhat environment//
const hre = require('hardhat')

async function main(){
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile 
    // manually to make sure everything is compiled
    // await hre.run('compile')

    const WorkshopManager = await hre.ethers.getContractFactory('WorkshopManager')
    const workshopManager = await WorkshopManager.deploy()

    await workshopManager.deployed()

    console.log('Workshop Manager is deployed @', workshopManager.address)
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log('Error: ', err)
        process.exit(1)
    })