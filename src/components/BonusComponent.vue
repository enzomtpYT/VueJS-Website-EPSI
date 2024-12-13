<template>
    <div>
        <h1>Section 1:</h1>
        <div class="container">
            <div class="pform">
                <p class="discl">Disclaimer: Cet api ne fonctione que sur les utilisateurs discord présent sur ce serveur discord : <a class="discl" href="https://discord.gg/ZJuFDzbPJh">https://discord.gg/ZJuFDzbPJh</a> (Dont moi, voici mon id: 221273966457782283)</p>
                <form @submit.prevent="validateUser">
                    <label for="userid">User ID:</label>
                    <input type="text" id="userid" v-model="userid" @input="validateUser">
                    <span v-if="useridError" class="error">{{ useridError }}</span>
                </form>
                <div class="resultscard" v-if="results">
                    <h2>Réponse API Discord:</h2>
                    <div class="lanyard">
                        <div class="profile">
                            <h2>Profile:</h2>
                            <img class="pfp" :src="pfp" alt="User Avatar" />
                            <p>{{ username }} | {{ tag }}</p>
                            <p>{{ olinestatus }}</p>
                        </div>
                        <div class="activity">
                            <h2>Activité:</h2>
                            <div class="row">
                                <img class="actimg" :src="actimg" alt="Activity Image" />
                                <div>
                                    <p>{{ activity }}</p>
                                    <p>{{ state }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 class="mt-5">JSON:</h2>
                    <pre><p class="results">{{ results }}</p></pre>
                </div>
            </div>
        </div>
        <div class="divider mt-5 mb-5"></div>
        <h1>Bonus:</h1>
        <div class="container">
            <div class="pform">
                <h1 class="mt-5">Message de Chuck Norris:</h1>
                <a class="chukapi" id="chuckapi">{{ chukapires }}</a>
                <button class="reloadbtn" @click="chuckapi">Get Chuck Norris Joke</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        // Definition de toutes le variables
        return {
            userid: '',
            useridError: '',
            results: '',
            pfp: '',
            username: '',
            tag: '',
            olinestatus: '',
            activity: '',
            state: '',
            actimg: '',
            chukapires: ''
        };
    },
    mounted() {
        // Code à exécuter au chargement de la page (import de lanyardjs)
        if (!window.lanyard) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/0x5841524f4e/js-lanyard/lanyard.js';
            script.onload = () => console.log('Lanyard script loaded successfully.');
            script.onerror = () => console.error('Failed to load the Lanyard script.');
            document.head.appendChild(script);
        } else {
            console.log('Lanyard script already loaded.');
        }
        this.chuckapi();
    },
    methods: {
        // Definitions des fonctions
        validateUser() {
            if (/^\d{17,18}$/.test(this.userid)) {
                this.socket();
            } else {
                this.useridError = 'L\'ID utilisateur doit contenir uniquement des chiffres et être composé de 17 à 18 caractères.';
            }
        },
        async socket() {
            this.useridError = '';
            if (this.userid === '') {
                this.useridError = 'Veuillez entrer un ID utilisateur';
            } else {
                try {
                    let lanwebsock
                    if (lanwebsock) {
                        lanwebsock.close();
                    }
                    lanwebsock = lanyard({
                        userId: this.userid,
                        socket: true,
                        onPresenceUpdate: this.updateUser // presenceData => updateUser(data)
                    })
                } catch (error) {
                    this.useridError = 'Erreur lors de la récupération des résultats.';
                    console.error('Lanyard error:', error);
                }
            }
        },
        updateUser(data) {
            if (!data || !data.discord_user) {
                this.useridError = 'Erreur: Les données de l\'utilisateur sont introuvables.';
                this.results = '';
                this.pfp = '';
                this.username = '';
                this.tag = '';
                this.olinestatus = '';
                this.activity = '';
                this.state = '';
                this.actimg = '';
                return;
            } else {
                this.results = JSON.stringify(data, null, 2);
                this.pfp = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`;
                this.username = data.discord_user.username;
                this.tag = data.discord_user.clan.tag || 'No Clan';
                this.olinestatus = data.discord_status;
                this.activity = `${data.activities[0].name} | ${data.activities[0].details}` || 'No Activity';
                this.state = data.activities[0].state || 'No State';
                if (data.activities[0].assets && data.activities[0].assets.large_image) {
                    const largeImage = data.activities[0].assets.large_image;
                    if (largeImage.startsWith('mp:external')) {
                        this.actimg = `https://media.discordapp.net/external/${largeImage.split('external/')[1]}`;
                    } else {
                        this.actimg = `https://cdn.discordapp.com/app-assets/${data.activities[0].application_id}/${largeImage}.png?size=160`;
                    }
                } else {
                    this.actimg = '';
                }
            }
        },
        chuckapi() {
            fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                this.chukapires = data.value;
            })
            .catch(error => {
                console.error('Chuck Norris API error:', error);
                this.chukapires = 'Erreur lors de la récupération de la blague de Chuck Norris.';
            });
        }
    }
};
</script>

<style>
.lanyard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 3px solid #00ff80;
    padding: 10px;
}
.profile {
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.activity {
    width: 50%;
    align-items: center;
    justify-content: center;
}
.row {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.pfp {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.actimg {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 5px;
}
.discl {
    font-size: 0.8em;
    color: #ff0000;
    margin-top: 10px;
}
.chukapi {
    font-size: 1.2em;
    font-weight: bold;
    color: #00ff80;
    background-color: #1100ff60;
    padding: 5px;
    border: 4px solid #00ff80;
    width: 75%;
    text-align: center;
    margin: 0 auto;
}
.reloadbtn {
    font-size: 1.2em;
    font-weight: bold;
    width: 25%;
    text-align: center;
    margin: 0 auto;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 4px solid #00ff80;
}
</style>