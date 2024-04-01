

def number_to_sms_text(numbs: int) -> str : 
    """trasnforma combinaciones de botones
    de numero de tlf antiguo a posibles palabras"""

    phone_pad = {
        "1": ".,",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
        "0": " ",
    }

    text = []
    str_numbs = str(numbs)
    rep = 0
    for i,v in enumerate(str_numbs):
        if i > 0 and str_numbs[i] == str_numbs[i-1]:
            rep += 1
            if rep == len(phone_pad[str(v)]):
                rep = 0
                text.append(phone_pad[str(v)][rep] )
            else:
                text[len(text)-1] = phone_pad[str(v)][rep] 
        else:
            rep = 0
            text.append(phone_pad[str(v)][rep] )

    message = "".join(text)
    print(message)
    return message


number_to_sms_text(4433555555666096667775553)