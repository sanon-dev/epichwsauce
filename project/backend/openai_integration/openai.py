import openai

def get_resources(parsed_text):
    openai.api_key = "YOUR_API_KEY_HERE"

    prompt = "List out search queries I would need to search in order to complete the following assignment:\n"
    fullprompt  = prompt + parsed_text

    response = openai.Completion.create(engine=model, prompt=fullprompt, max_tokens=50)
    
    # Extract the resources from the OpenAI response and return them
    resources = extract_resources(response)
    return resources

def extract_resources(response):
    # Extract the resources from the OpenAI response
    resources = response.choices[0].text.split('\n')
    return resources