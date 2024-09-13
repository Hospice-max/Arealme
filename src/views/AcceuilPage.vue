<script setup>
import { ref } from "vue";
import AbilityPage from "./AbilityPage.vue";

// Liste des nombres avec des valeurs associées
const number = [
    { digit: '3', value: 3 },
    { digit: '5', value: 5 },
    { digit: '10', value: 10 },
    { digit: '15', value: 15 },
    { digit: '20', value: 20 },
    { digit: '💪30', value: 30 },
    { digit: '😂100', value: 100 },
];

const taked = ref(3);  // Valeur initiale sélectionnée
const showAbility = ref(false);  // Contrôle de l'affichage de la page Ability
const isContentHidden = ref(false);  // Cache le contenu principal

// Affiche la page Ability
const showAbilityPage = () => {
    showAbility.value = true;
};

// Démarre le test et cache le contenu principal
const startTest = () => {
    isContentHidden.value = true;
    setTimeout(() => showAbilityPage(), 300);  // Déclenche l'affichage de la page Ability après 300ms
};
</script>

<template>
    <!-- Conteneur principal avec centrage et pleine hauteur d'écran -->
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">

        <!-- Contenu principal, caché si le test est démarré -->
        <div v-if="!isContentHidden"
            class="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg transition-all duration-500 ease-in-out transform"
            :class="{ 'opacity-0 scale-90': isContentHidden }">

            <!-- Barre de navigation -->
            <nav class="flex justify-between items-center mb-8">
                <button class="text-gray-600">
                    <img src="/src/assets/Menu.png" alt="Menu" class="h-6" />
                </button>
                <div class="flex items-center space-x-4">
                    <span class="font-bold text-gray-900">ZONE</span>
                    <span class="text-orange-500 font-bold">MOI</span>
                    <img src="/src/assets/Chevron.png" alt="Chevron" class="h-4" />
                    <button class="text-gray-600 hover:text-orange-500 font-bold">Test d'aptitude</button>
                </div>
                <button class="text-gray-600">
                    <img src="/src/assets/Timer.png" alt="Timer" class="h-6" />
                </button>
            </nav>

            <!-- Titre et description -->
            <article>
                <h1 class="text-2xl font-bold text-center text-green-700 mb-6">Test de temps de réaction</h1>

                <!-- Liste des boutons numérotés -->
                <ul class="flex justify-center space-x-4 mb-4">
                    <li v-for="(dig, index) in number" :key="index">
                        <button
                            class="px-4 py-2 rounded-lg text-white bg-gray-300 hover:bg-[#3a577f] transition duration-300"
                            :class="{
                                'bg-[#3a577f]': taked == dig.value,
                                'pointer-events-none': isContentHidden // Empêche les interactions avec les boutons après sélection
                            }" @click="taked = dig.value">
                            {{ dig.digit }}
                        </button>

                    </li>
                </ul>

                <!-- Description textuelle -->
                <p class="text-gray-700 text-base leading-6 mb-4">
                    Si vous vous êtes déjà demandé si votre cerveau pouvait traiter rapidement des informations
                    visuelles, ce test
                    est pour vous ! Quand le cercle <span class="font-bold text-red-500">rouge</span> devient
                    <span class="font-bold text-green-500">vert</span>, cliquez aussi vite que possible !
                </p>

                <p class="text-gray-700 text-base leading-6 mb-4">
                    Le temps de réaction moyen à un stimulus visuel est d'environ 250 ms (millisecondes).
                    Si vous pensez pouvoir battre des records, n'hésitez pas à nous envoyer une vidéo de vos résultats !
                </p>

                <!-- Bouton Commencer -->
                <div class="text-center">
                    <button
                        class="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 text-lg transition duration-300 transform hover:scale-105"
                        @click="startTest">
                        Commencer
                    </button>
                </div>
            </article>
        </div>

        <!-- Page Ability, affichée lorsque le test commence -->
        <AbilityPage v-if="showAbility" class="transition-all duration-500 ease-in-out transform" />
    </div>
</template>
