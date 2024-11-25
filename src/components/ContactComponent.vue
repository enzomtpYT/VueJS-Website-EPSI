<template>
    <div>
        <h1>Nous contactez:</h1>
        <div class="contactform">
            <form @submit.prevent="validateForm">
                <label for="name">Nom:</label>
                <input type="text" id="name" v-model="name">
                <span v-if="nameError" class="error">{{ nameError }}</span>

                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email">
                <span v-if="emailError" class="error">{{ emailError }}</span>

                <label for="message">Message:</label>
                <textarea id="message" v-model="message"></textarea>
                <span v-if="messageError" class="error">{{ messageError }}</span>
                
                <button type="submit">Envoyer</button>
                <span v-if="formMessage" :style="{ color: formMessageColor }" class="formMessage">{{ formMessage }}</span>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            nameError: '',
            emailError: '',
            messageError: '',
            formMessage: '',
            formMessageColor: ''
        };
    },
    methods: {
        validateForm() {
            this.nameError = this.emailError = this.messageError = '';

            if (!this.name && this.name.length <= 3) {
                this.nameError = 'Le nom est requis. Et doit avoir au moins 3 caractères.';
            }
            if (!this.email) {
                this.emailError = 'L\'email est requis.';
            } else if (!this.validEmail(this.email)) {
                this.emailError = 'L\'email n\'est pas valide.';
            }
            if (!this.message && this.message.length <= 3) {
                this.messageError = 'Le message est requis. Et doit avoir au moins 3 caractères.';
            }

            if (!this.nameError && !this.emailError && !this.messageError) {
                this.sendWebhook(this.name, this.email, this.message);
            }
        },
        validEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
            return re.test(email);
        },
        sendWebhook(name, email, message) {
            const url = "https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb";
            const data = {
              "content": null,
              "embeds": [
                {
                  "title": "Nouveau Message!",
                  "color": 8912728,
                  "fields": [
                    {
                      "name": `${name} - ${email}`,
                      "value": message,
                    }
                  ]
                }
              ],
              "attachments": []
            }
            fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            }).then(() => {
                this.name = this.email = this.message = '';
                this.formMessage = 'Message envoyé avec succès!';
                this.formMessageColor = 'green';
             }).catch(() => {
                this.formMessage = 'Une erreur est survenue lors de l\'envoi du message.';
                this.formMessageColor = 'red';
                this.$refs.formMessage.style.color = 'red';
            });
        }
    }
};
</script>

<style>
.contactform {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #3b2858;
    padding: 15px 30px 30px 30px;
    border-radius: 10px;
    width: 50%;
}
label {
    font-size: 1.5em;
    text-align: left;
    font-weight: bold;
    padding: 5px 0;
}
input, textarea {
    font-size: 1.5em;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #3b2858;
    color: black;
}
button {
    font-size: 1.5em;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #3b285800;
    background-color: #00ff80;
    color: #3b2858;
    transition: 0.05s;
}
button:hover {
    background-color: #3b2858;
    color: #00ff80;
    border: 1px solid #00ff80;
}
button:active {
    transform: scale(0.95);
}
.error {
    color: red;
    font-size: 0.9em;
}
.formMessage {
    padding-top: 10px;
    font-size: 1.5em;
}
</style>