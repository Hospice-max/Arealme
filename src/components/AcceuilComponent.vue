<script setup>
const number = [
    {digit:3},
    {digit:5},
    {digit:10},
    {digit:15},
    {digit:20},
    {digit:'💪30'},
    {digit:'😂100'},
    ]
    
</script>

<template>
    <div>
        <nav>
                <RouterLink  to="#"><img src="/src/assets/Menu.png" alt="Menu"></RouterLink>
                <RouterLink to="#">ZONE MOI</RouterLink>
                <span><img src="/src/assets/Chevron.png" alt=""></span>
                <RouterLink to="#">Test d'aptitude</RouterLink>
                <RouterLink class="timer" to="#"><img src="/src/assets/Timer.png" alt="Timer"></RouterLink>
        </nav>
        
        <div class="div">
            <article>
                <h1>Test de temps de réaction | Rapports statistiques + vidéo des records du monde</h1>
                <div>
                    <ul>
                        <span>Attempts:</span>
                        <li class="list" v-for="(dig, index) in number" :key="index"><RouterLink>{{ dig.digit }}</RouterLink></li>
                    </ul>
                </div>

                <div>
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
                <div class="end">
                    <RouterLink class="start" to="/reactivityTest">Commencer</RouterLink>
                </div>
                <p class="par">Défi des joueurs professionnels</p>
            </article>
        </div>
    </div>
</template>

<style scoped>
    .div{
        position: relative;
        border: 1px solid black;
        padding: 20px;
        max-width: 100%;
        width: 60%;
        margin-top: 3%;
        margin-left: 20%;
        
    }
    nav {
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        gap: 1.5%;
        background: rgba(229, 229, 229);
        padding: 8px;
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
        position: absolute;
        right: 0;
        margin-right: 5px;
    }
    h1{
        margin-top: 0;
        background-color: rgba(24, 128, 56) ;
        color: white;
        justify-content: center;
    }
    ul {
        display: flex;
        list-style: none;
        gap: 2%;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
    }
    .list {
       max-width: 100%;
       width: 48px;
       height: 30px;
       text-align: center;
             
    }

    button{
       border: none; 
       background-color: rgba(229, 229, 229); 
    }

    p{
        font-size: 20px;
    }
    .start{
        background-color: rgb(13, 110, 253);
        color: white;
        padding: 15px;
        border: none;
        border-radius: 4px;
        text-decoration: none;
        max-width: 10%;
        font-size: 20px;
    }
    .end{
        text-align: center;
        padding: 15px;
    }
   .par{
    text-align: center;
   }
</style>