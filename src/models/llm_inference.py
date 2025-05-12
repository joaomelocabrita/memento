from llama_cpp import Llama  # or other LLM runtime
from config import LLM_MODEL_PATH

llm = Llama(model_path=LLM_MODEL_PATH)

def generate_response(prompt):
    personality_prompt = "You are John, a sarcastic engineer. " + prompt
    output = llm(prompt=personality_prompt)
    return output['choices'][0]['text'].strip()
