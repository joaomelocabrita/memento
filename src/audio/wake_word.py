import pvporcupine
import pyaudio
from config import WAKE_WORD_PATH

def detect():
    porcupine = pvporcupine.create(keyword_paths=[WAKE_WORD_PATH])
    pa = pyaudio.PyAudio()
    stream = pa.open(...)

    pcm = stream.read(512)
    result = porcupine.process(pcm)
    return result >= 0
