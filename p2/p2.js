const prev = document.getElementById("prev-song")
const play = document.getElementById("play-song")
const pause = document.getElementById("pause-song")
const next = document.getElementById("next-song")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById('progress-container')
const audio = document.getElementById("audio")
const name = document.getElementById('song-name')
const image = document.getElementById("song-cover")
const volumeBtn = document.getElementById("volume-btn")
const volumeContainer = document.getElementById("volume-container")
const volumeProgress = document.getElementById("volume-progress")


const songs = ['WakeMeUp','BlindingLights','Hide','LucidDreams','WithoutYou']

let songIndex = 2;

loadSong(songs[songIndex])

function loadSong(song){
        name.innerText = song;
        audio.src = `audiofiles/${song}.mp3`
        image.src =  `picfiles/${song}.jpg`
        audio.volume = 0.1;
}

function updatePlayPause(){
        play.classList.toggle('hidden')
        pause.classList.toggle('visible')
}
function updateVolume(e){
        let slider = e.offsetX/100 * 100;
        volumeProgress.style.width = `${slider}%`
        audio.volume = e.offsetX/100;
}

function updateProgress(e){
        const {duration,currentTime} = e.srcElement;
        const progressPercent = currentTime/duration * 100
        progress.style.width = `${progressPercent}%`
}
function setProgress(e){
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = audio.duration
        audio.currentTime = (clickX/width)*duration
}
audio.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener('click',setProgress)

volumeContainer.addEventListener("click",updateVolume)

play.addEventListener('click',()=>{
        updatePlayPause()
        audio.play()
        image.classList.add('running')
})
pause.addEventListener('click',()=>{
        updatePlayPause()
        audio.pause()
        image.classList.remove("running")
})
prev.addEventListener('click',()=>{
        updatePlayPause()
        if(songIndex === 0) return
        songIndex--;
        loadSong(songs[songIndex])
        image.classList.remove("running")
})
next.addEventListener('click',()=>{
        updatePlayPause()
        if(songIndex === songs.length -1) return
        songIndex++;
        loadSong(songs[songIndex])
        image.classList.remove("running")

})