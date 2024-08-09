let currentScene = 1;
const totalScenes = 32;

function showScene(sceneNumber) {
    for (let i = 1; i <= totalScenes; i++) {
        document.getElementById(`scene${i}`).classList.add('hidden');
    }
    document.getElementById(`scene${sceneNumber}`).classList.remove('hidden');
}

function nextScene() {
    if (currentScene < totalScenes) {
        currentScene++;
        showScene(currentScene);
    }
}

function prevScene() {
    if (currentScene > 1) {
        currentScene--;
        showScene(currentScene);
    }
}

function playSound(soundName) {
    const sound = new Audio(`sounds/${soundName}.mp3`);
    sound.play();
}

// Initialize the first scene
showScene(currentScene);
