from audio import wake_word, mic_listener, tts
from models import llm_inference
from utils import logger

def main():
    print("Listening for wake word...")
    while True:
        if wake_word.detect():
            print("Wake word detected. Listening for input...")
            user_input = mic_listener.transcribe()
            if user_input:
                response = llm_inference.generate_response(user_input)
                print(f"LLM: {response}")
                tts.speak(response)

if __name__ == "__main__":
    main()
