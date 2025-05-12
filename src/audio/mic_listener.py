import whisper

model = whisper.load_model("base")

def transcribe():
    # Record audio
    # Save as temp.wav
    result = model.transcribe("temp.wav")
    return result["text"]
import whisper

model = whisper.load_model("base")

def transcribe():
    # Record audio
    # Save as temp.wav
    result = model.transcribe("temp.wav")
    return result["text"]
