
def lengthOfLongestSubstring(s: str) -> int:
    """
    encuentra el string mas largo sin repetir caracteres

    bbb => b
    bwbew -> wbe
    waewrsda = aewrsda 
    """
    result = ""
    new_str = ""

    i = 0
    while i < len(s):
        if s[i] in new_str:
            new_str = s[i]
        else:
            new_str += s[i]
       
        if len(new_str) > len(result):
            result = new_str

        i = i+1
    return len(result)
