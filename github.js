class Github{
    constructor(){
        this.client_id = '95cf12426faab2639690';
        this.client_secret = 'dbb3c940fc9e02e74ed728291821400f5b4c5c70';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        
        return {
            profile
        }
    }
}