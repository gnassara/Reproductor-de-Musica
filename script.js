const tipoNumber = 2024
const tipoSTtring = 'Instituto Alfa Carabobo'
const tipoBoolean = false

const tipoUndefined = undefined
const tipoNull = null

const tipoArray = [
    'grecia',
    'angel',
    'jesus',
    'lineth',
    'rosdary',

]

const tipoObjeto = {
raza: 'kacri',
edad: 15,
dueño: 'carlos',
hambre: false,


}

const user = {

    email: 'grecia@gmail.com',
    password: '1234ñ.',
    name: 'grecia nassaralianh',
    username: 'gnassara',
    adderss: {
        city: 'valencia',
        state: 'carabobo',
        country: 'venezuela'
    }
}

console.log(tipoObjeto)

axios.get('https://leonardoapi.onrender.com/songs')
    .then((res) => {

        const songList = res.data.songs
        const trackList = document.getElementById('track-list')

        songList.map((song) => {

            const div = document.createElement('div')
            div.classList.add('clase-para-canciones')

            div.innerHTML = `
                <img src="${song.path.front}" alt="">
                <p>${song.author} - ${song.title}</p>
                <button>
                    <img src="/Assets/multimedia_pause_button_icon_149073 1.png" alt="">
                </button>
                <button>
                    <img src="/Assets/play.png" alt="">
                </button>
                <button>
                    <img src="/Assets/dots_three_outline_vertical_thin_icon_171812 1.png" alt="">
                </button>
            `


            trackList.appendChild(div) 
        })

    })

