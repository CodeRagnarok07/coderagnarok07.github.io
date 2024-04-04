
def roman_to_decimal(number: str = "cmxlviii") -> int:  # DONE
    """funcion que convierte numero romanos en decimales y alreves"""

    dict_number = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    newlist = [dict_number[v] for v in number.upper()]
    new = 0

    for k, v in enumerate(newlist):
        max_index = len(newlist)-1
        next_element = newlist[k+1] if (k < max_index) else 0

        # new-= v if (v < next) else v
        if v < next_element:
            new -= v
        else:
            new += v
    return new



def romanToInt( s: str) -> int:
        roman= {
            "I":1,
            "V":5,
            "X":10,
            "L":50,
            "C":100,
            "D":500,
            "M":1000,
        }
        numb = 0
        
        for i in range(len(s)):
            
            if i > 0 and i < len(s) and roman[s[i-1]] < roman[s[i]]:
                numb = numb - roman[s[i-1]]*2 + roman[s[i]]
            else:
                numb += roman[s[i]]
            print(numb)
               
        return numb

        
romanToInt("MCMIV")
romanToInt("III")
