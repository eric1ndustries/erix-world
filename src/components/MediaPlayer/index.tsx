import * as Tone from 'tone'

const erixPlayer = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();

export default function MediaPlayer({url}: { url: string}) {
    return (
        <div>
                 
        </div>
    )
}
