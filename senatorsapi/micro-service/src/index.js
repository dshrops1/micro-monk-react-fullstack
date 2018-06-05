const{send, json} = require('micro');
const {router, get, post} = require('microrouter');
const monk = require('monk');

const url = 'test:Dustbunny1992!@ds243768.mlab.com:43768/mysenators';
const db = monk(url);
const collection = db.get('senators');


db.then(()=>{
	console.log('connected correctly to server');
})

// still going to set up some check up systems later
//such as allowing the person to choose Democrats by typing DEMs democrats demo and variety of other and all will give back Democrat


const grabSenatorsByParty = (async (req, res) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
	//this works maybe make a switch statment to check the case of what to then
	//specify how we are going to search or even send a second value to decide
	let partyChoice = req.params.party;
	let dataToSend = await collection.find({party: partyChoice}).then((docs)=> docs)
	send(res,200, dataToSend);
   

})

const grabSenatorsByGender = (async (req, res) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
	
	let genderChoice = req.params.gender;
	let dataToSend = await collection.find({"person.gender": genderChoice}).then((docs)=> docs)
	send(res,200, dataToSend);
   

})

const allElse = (async (req,res) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
	let dataToSend = await collection.find({}).then((docs)=> docs)
	send(res,200, dataToSend)
})



//will set up all other routs not specified to give back all senators. or maybe a string

module.exports = router(
	get('/party/:party', grabSenatorsByParty),
	get('/gender/:gender', grabSenatorsByGender),
	get('/*', allElse)
	)