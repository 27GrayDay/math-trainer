import correctSound from "./correct.mp3";
import wrongSound from "./wrong.mp3";

class AudioPlayer {

    private readonly correct = new Audio(correctSound);
    private readonly wrong = new Audio(wrongSound);

    private enabled = true;

    constructor() {
        this.setVolume(0.5);
    }

    setEnabled(enabled: boolean) {
        this.enabled = enabled;
    }

    isEnabled() {
        return this.enabled;
    }

    setVolume(volume: number) {
        this.correct.volume = volume;
        this.wrong.volume = volume;
    }

    playCorrect() {
        if (!this.enabled) return;

        this.correct.currentTime = 0;
        void this.correct.play();
    }

    playWrong() {
        if (!this.enabled) return;

        this.wrong.currentTime = 0;
        void this.wrong.play();
    }
}

export const audioPlayer = new AudioPlayer();