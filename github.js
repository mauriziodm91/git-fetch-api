class Github{
    constructor(){
        this.client_id = '95cf12426faab2639690';
        this.client_secret = '2456381f913830fa1e53f8760223d7c266bf31d3';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        
        return {
            profile
        }
    }
}