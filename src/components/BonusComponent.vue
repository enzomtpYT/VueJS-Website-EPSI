<template>
    <div>
        <h1>Nous contactez:</h1>
        <div class="container">
            <div class="pform">
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
    </div>
</template>

<script>
export default {
    data() {
        // Definition de toutes le variables
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
        // Definitions des fonctions
        // Validation du formulaire
        validateForm() {
            this.nameError = this.emailError = this.messageError = '';
            // Verifie si le nom est vide ou a moins de 3 caracteres
            if (!this.name && this.name.length <= 3) {
                this.nameError = 'Le nom est requis. Et doit avoir au moins 3 caractères.';
            }
            // Verifie si l'email est vide ou n'est pas valide
            if (!this.email) {
                this.emailError = 'L\'email est requis.';
            } else if (!this.validEmail(this.email)) {
                this.emailError = 'L\'email n\'est pas valide.';
            }
            // Verifie si le message est vide ou a moins de 3 caracteres
            if (!this.message && this.message.length <= 3) {
                this.messageError = 'Le message est requis. Et doit avoir au moins 3 caractères.';
            }
            // Si il ,n'y a pas d'erreurs envoie le message
            if (!this.nameError && !this.emailError && !this.messageError) {
                this.sendWebhook(this.name, this.email, this.message);
            }
        },
        // Validation de l'email avec regex
        validEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
            return re.test(email);
        },
        // Envoie du message via le webhook discord
        sendWebhook(name, email, message) {
            const url = "https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb";
            // Crééer le message avec embed
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
            // Envoie le message
            fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            // Si le message est envoyé avec succès affiche un message de succès
            }).then(() => {
                this.name = this.email = this.message = '';
                this.formMessage = 'Message envoyé avec succès!';
                this.formMessageColor = 'green';
            //  Si il y a une erreur affiche un message d'erreur
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
</style>