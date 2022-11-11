document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#Blue').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'blue';
    document.querySelector('#h1').innerHTML = 'Blue'
}

    document.querySelector('#Aqua').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'aqua';
    document.querySelector('#h1').innerHTML = 'Aqua'
}
    document.querySelector('#Black').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'black';
    document.querySelector('#caixaCor').style.color = 'white';
    document.querySelector('#h1').innerHTML = 'Black'
}

    document.querySelector('#BlueViolet').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'blueviolet';
    document.querySelector('#h1').innerHTML = 'BlueViolet'
}

    document.querySelector('#Red').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'red';
    document.querySelector('#h1').innerHTML = 'Red'
}

    document.querySelector('#Yellow').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'yellow';
    document.querySelector('#caixaCor').style.color = 'black';
    document.querySelector('#h1').innerHTML = 'Yellow'
}

    document.querySelector('#Orange').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'orange';
    document.querySelector('#h1').innerHTML = 'Orange'
}

    document.querySelector('#Green').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'green';
    document.querySelector('#h1').innerHTML = 'Green'
}

    document.querySelector('#Pink').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'pink';
    document.querySelector('#h1').innerHTML = 'Pink'
}

    document.querySelector('#Grey').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'grey';
    document.querySelector('#h1').innerHTML = 'Grey'
}

    document.querySelector('#Magenta').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'magenta';
    document.querySelector('#h1').innerHTML = 'Magenta'
}

    document.querySelector('#LightBlue').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'lightblue';
    document.querySelector('#h1').innerHTML = 'LitghtBlue'
}

    document.querySelector('#LightGreen').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'lightgreen';
    document.querySelector('#h1').innerHTML = 'LightGreen'
}

    document.querySelector('#Lime').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'lime';
    document.querySelector('#h1').innerHTML = 'Lime'
}

    document.querySelector('#Brown').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'brown';
    document.querySelector('#h1').innerHTML = 'Brown'
}

    document.querySelector('#Crimson').onclick  = function () {
    document.querySelector('#caixaCor').style.background = 'crimson';
    document.querySelector('#h1').innerHTML = 'Crimson'
}
})

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('select').onchange = function () {
        document.querySelector('#caixaCor').style.background = this.value;
        document.querySelector('#h1').innerHTML = this.value;
    }
    })