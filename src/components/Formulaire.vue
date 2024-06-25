<script setup>

</script>

<template>
    <div class="body">
        <div class="div">
            <form>
                <span>Bravo! Vous êtes classé n°2 ! S'il vous plaît entrez votre nom:</span><br>
                <input type="text" required>
            </form>
            <div class="button">
                <RouterLink class="btn1" to="#">D'ACCORD</RouterLink>
    
                <RouterLink class="btn2" to="#">Annuler</RouterLink>
            </div>
        </div>
    
    </div>
</template>

<style scoped>
.body {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 20px;
    border: 1px solid rgb(252, 16, 16);
    background-color: rgba(45, 43, 43, 0.342);
    display: flex;
    justify-content: center;
    align-items: center;
}

.div {
    text-align: center;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(255, 255, 255);
    padding: 30px;
    border-radius: 5px;
    width: 30%;

}

input {
    max-width: 100%;
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 3px;
    margin-top: 8px;
}

.button {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    gap: 3%;
    padding: 8px;
}

.btn1 {
    background-color: rgb(13, 110, 253);
    color: white;
    padding: 8px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
}

.btn2 {
    background-color: white;
    color: rgb(13, 110, 253);
    padding: 10px;
    border: 1px solid rgb(13, 110, 253);
    border-radius: 4px;
    text-decoration: none;
}
</style>