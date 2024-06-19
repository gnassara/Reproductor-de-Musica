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

        songList.map((song) => {

            console.log(song)  
        })

    })

