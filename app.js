//search 
const github = new Github;

const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;
    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //the alert message goes in here
                } else {
                    //the profile goes in here
                    ui.showProfile(data.profile);
                }
            })
    } else {

    }
});