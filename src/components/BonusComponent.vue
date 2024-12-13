<template>
    <div>
        <h1>Section 1:</h1>
        <div class="container">
            <div class="pform">
                <form @submit.prevent="validateUser">
                    <label for="userid">User ID:</label>
                    <input type="text" id="userid" v-model="userid" @input="validateUser">
                    <span v-if="useridError" class="error">{{ useridError }}</span>
                </form>
                <div class="resultscard" v-if="results">
                    <h2>Résultats:</h2>
                    <div class="lanyard">
                        <div class="profile">
                            <img class="pfp" :src="pfp" alt="User Avatar" />
                            <p>{{ username }} | {{ tag }}</p>
                            <p>{{ olinestatus }}</p>
                        </div>
                        <div class="activity">
                            <img class="actimg" :src="actimg" alt="Activity Image" />
                            <div>
                                <p>{{ activity }}</p>
                                <p>{{ state }}</p>
                            </div>
                        </div>
                    </div>
                    <pre><p class="results">{{ results }}</p></pre>
                </div>
            </div>
        </div>
        <div class="divider mt-5 mb-5"></div>
        <h1>Bonus:</h1>
        <div class="container">
            <div class="pform">
                <!-- Bonus content goes here -->
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
            olinestatus: ''
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
    }
};
</script>

<style>
.lanyard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    border: 1px solid #ccc;
}
.profile {
    width: 50%;
    align-items: center;
    justify-content: center;
}
.activity {
    width: 50%;
    align-items: center;
    justify-content: center;
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
}
</style>