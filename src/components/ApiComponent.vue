<template>
    <div>
        <h1>Api:</h1>
        <div class="container">
            <div class="pform">
                <form @submit.prevent="validateForm">
                    <label for="url">Url:</label>
                    <input type="text" id="url" v-model="url">
                    <span v-if="urlError" class="error">{{ urlError }}</span>

                    <label for="method">Méthode:</label>
                    <select id="method" v-model="method">
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                        <option value="PATCH">PATCH</option>
                        <option value="OPTIONS">OPTIONS</option>
                        <option value="HEAD">HEAD</option>
                    </select>
                    <span v-if="methodError" class="error">{{ methodError }}</span>

                    <label for="parameters">Paramètres:</label>
                    <textarea id="parameters" v-model="parameters"></textarea>
                    <span v-if="parametersError" class="error">{{ parametersError }}</span>

                    <button type="submit">Envoyer</button>
                    <span v-if="formMessage" :style="{ color: formMessageColor }" class="formMessage">{{ formMessage }}</span>
                </form>
                <div class="resultscard" v-if="results">
                    <h2>Résultats:</h2>
                    <pre><p class="results">{{ results }}</p></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        // Definition de toutes le variables
        return {
            url: '',
            method: 'GET',
            parameters: '',
            urlError: '',
            methodError: '',
            parametersError: '',
            formMessage: '',
            formMessageColor: '',
            results: ''
        }
    },
    methods: {
        // Definitions des fonctions
        // Validation de l'url avec regex
        validateURL(url) {
            const re = /^(http|https):\/\/[^ "]+$/;            
            return re.test(url);
        },
        // Validation du formulaire
        validateForm() {
            this.urlError = '';
            this.methodError = '';
            this.parametersError = '';
            this.formMessage = '';
            this.formMessageColor = '';
            this.results = '';
            // Verifie l'url avec  la méthode validateURL
            if (!this.url) {
                this.urlError = 'Url requis';
            } else if (!this.validateURL(this.url)) {
                this.urlError = 'L\'url n\'est pas valide';
            }
            // Verifie la méthode http(s)
            if (!this.method) {
                this.methodError = 'Méthode requise';
            }
            // Si il n'y a pas d'erreurs envoie la requete
            if (!this.methodError && !this.urlError) {
                this.sendApiRequest(this.url, this.method, this.parameters);
            }
        },
        sendApiRequest(url, method, parameters) {
            // Si la méthode est GET ou HEAD, ajouter les paramètres à l'URL
            if (method == 'GET' || method == 'HEAD') {
                const queryParams = new URLSearchParams(parameters).toString();
                url += '?' + queryParams;
                parameters = null;
            } else {
                try {
                    parameters = JSON.parse(parameters);
                } catch (error) {
                    this.parametersError = 'Paramètres invalides: ' + error;
                    return;
                }
            }
            // Envoie la requete
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: parameters ? JSON.stringify(parameters) : null
            })
            // Si la requete est un succès envoyer les données à la méthode results
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.results = JSON.stringify(data, null, 2);
            })
            // Si la requete est un échec envoyer l'erreur à la méthode results
            .catch(error => {
                console.error('Error:', error);
                this.results = 'Erreur: ' + error;
            });
        }
    }
}
</script>

<style>
.resultscard {
    padding-top: 20px;
    width: 65%;
    text-align: left;
    padding: 0px 30px 30px 30px;
}
.results {
    padding: 5px;
    font-size: 1.2em;
    font-weight: bold;
    border: 4px solid #00ff80;
    color: #00ff80;
    background-color: #1100ff60;
    width: 100%;
    height: 100%;
    overflow: auto;
}
@media screen and (max-width: 1200px) {
    .resultscard {
        font-size: 0.8em;
        width: 100%;
    }
    .pform {
        flex-direction: column;
    }
}

</style>