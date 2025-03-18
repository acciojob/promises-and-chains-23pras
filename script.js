//your JS code here. If required.

document.getElementById('voteForm').addEventListener('submit',(event)=>{
	event.preventDefault();

	const age = document.getElementById('age').value.trim();
	const name = document.getElementById('name').value.trim();

	if(!age || !name){
		alert("Please enter valid details");
	}

	const ageNum = Number(age);
    const VoteEligibility = new Promise((res,rej)=>{
		setTimeout(()=>{
			if(ageNum>18){
				res(`Welcome, .${name} You can vote.`)
			}
			else{
				rej(`Oh sorry . You aren't old enough.`)
			}
		},4000)
	});

	VoteEligibility.then((message)=>{
		alert(message);
	}).catch((err)=>{
		alert(err)
	})


	
	
})
