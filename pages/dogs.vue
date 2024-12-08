<template>
    <div class="dogsPage">
        <div class="textAboutAlabay">
            <h1>Наши алабайчики</h1>
        </div>
        <div class="content">
            <div class="alabai">
                <div class="leaderAlex">
                    <h2>Вожак - Алекс</h2>
                    <img src="../assets/images/Alex.svg" alt="">
                    <span>Алекс - вожак стаи, знает все дороги Сургута.
                        Из-за своего возраста двигается со средней скоростью
                        и имеет выносливость ниже среднего.</span>
                </div>
                <div class="madJack">
                    <h2>Безумный - Джек</h2>
                    <img src="../assets/images/Jack.svg" alt="">
                    <span>Джек - безумец, какого вы еще не видали.
                        Джек настолько быстр, что за ним не уследят ваши глаза.
                        Скорость самая высокая, выносливость тоже, но при доставке,
                        ваш заказ может пострадать.</span>
                </div>
                <div class="stubbornSF">
                    <h2>Упёртый - Сф</h2>
                    <img src="../assets/images/SF.svg" alt="">
                    <span>Сф - упертый, самый молодой из стаи. Настолько упертый,
                        что довезет заказ, несмотря на трудности. Скорость низкая, выносливость
                        средняя. Но стоит отдать должное за его стремление.</span>
                </div>
                <div class="fatJonny">
                    <h2>Толстяк - Джонни</h2>
                    <img src="../assets/images/Jonny.svg" alt="">
                    <span>Джонни - толстяк, самый крупный из стаи. сносит все на своем пути,
                        лишь бы довезти заказ. При этом не портя вашу еду. скорость высокая,
                        выносливость средняя. Из-за лишнего веса, может сделать перерыв на короткий
                        промежуток времени.</span>
                </div>
                <div class="cutieSam">
                    <h2>Ласковый - Сэм</h2>
                    <img src="../assets/images/Sam.svg" alt="">
                    <span>Сэм - ласковый мальчик. Любит, чтобы после доставки
                        его похвалили и погладили. Очень расстраивается, если этого не делают.
                        Выносливость и скорость - средняя.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.dogsPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
}

.content {
    margin-top: 28px;
    padding: 20px;
    width: 100%;
}

.textAboutAlabay {
    width: 100%;
    max-width: 1000px;
    height: 90px;
    margin-top: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    color: #333;
}

.alabai {
    display: flex;
    justify-content: space-evenly;
    gap: 28px;
    padding-top: 45px;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    flex-wrap: wrap;
}

.alabai div {
    margin-top: 45px;
    width: 248px;
    height: 258px;
    text-align: center;
    position: relative;
    transition: transform 0.3s ease;
    text-align: left;
}

.alabai img {
    width: 300px;
    height: 300px;
    object-fit: cover;
}

.alabai h2 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
}

.alabai span {
    margin-top: 10px;
    font-size: 26px;
    color: #555;
    margin-top: 10px;
}
</style>