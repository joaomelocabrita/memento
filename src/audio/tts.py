import subprocess
from config import VOICE_MODEL_PATH

def speak(text):
    with open("output.txt", "w") as f:
        f.write(text)
    subprocess.run(["piper", "--model", VOICE_MODEL_PATH, "--input", "output.txt", "--output", "response.wav"])
    subprocess.run(["aplay", "response.wav"])
