<script setup>

</script>

<template>
    <div class="div">
        <nav>
            <RouterLink  to="#"><img src="/src/assets/Menu.png" alt="Menu"></RouterLink>

            <RouterLink to="#">ZONE MOI</RouterLink>

            <span><img src="/src/assets/Chevron.png" alt=""></span>

            <RouterLink to="#">Test d'aptitude</RouterLink>

            <RouterLink class="timer" to="#"><img src="/src/assets/Timer.png" alt="Timer"></RouterLink>
        </nav>
        
        <div>
            <article>
                <h1>Test de temps de réaction | Rapports statistiques + vidéo des records du monde</h1>
                <div>
                    <ul>
                        <span>Attempts :</span>
                        <li><button>3</button></li>
                        <li><button>5</button></li>
                        <li><button>10</button></li>
                        <li><button>15</button></li>
                        <li><button>20</button></li>
                        <li><button>💪30</button></li>
                        <li><button>😂100</button></li>
                    </ul>
        
                    <p>Si vous vous êtes déjà demandé si votre cerveau était capable de traiter rapidement des informations
                        visuelles ou non, ce quiz simple est fait pour vous ! La règle est très simple : lorsque lerougele
                        cercle tournevert, appuyez/cliquez sur le bouton gauche de la souris sur l'écran aussi vite que possible
                        !
                    </p>
                    <p>Le temps de réaction moyen à un stimulus visuel est d'environ 250 ms (millisecondes) et la plupart des
                        gens peuvent atteindre jusqu'à 200 ms avec un peu d'entraînement. Le temps de réaction documenté le plus
                        rapide à un stimulus visuel est de 120 millisecondes, ce qui constitue un record extrêmement difficile à
                        battre. Si vous pensez avoir ce qu'il faut pour faire mieux, n'hésitez pas à télécharger une vidéo de
                        vous en train de faire ce test sur Youtube et à nous envoyer le lien. Vous pouvez repasser ce test
                        autant de fois que vous le souhaitez sans aucun impact sur votre score final !
                    </p>
                </div>
                <div>
                    <button><RouterLink to="#">Commencer</RouterLink></button>
                    <p>Défi des joueurs professionnels</p>
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        gap: 1.5%;
        background: rgba(229, 229, 229);
    }
   
    img{
        display: flex;
        justify-content: center;
        height: 1.6rem;
        background-color: inherit;
        color: rgba(229, 229, 229);;
        background: rgba(229, 229, 229);
        box-sizing: border-box;
    }
    .timer{
        
    }
    h1{
        background-color: rgba(24, 128, 56) ;
        color: white;
        text-align: center;
    }
    ul {
        display: flex;
        list-style: none;
        gap: 2%;
        
    }
   
</style>