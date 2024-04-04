def any_string_to_int(string: str | int) -> int:  # DONE
    """algo"""
    if string is str:
        result = int("".join([i for i in str(string) if i.isdecimal()]))
        return result
    return int(string)


def rever_int(num: int | str) -> int:  # DONE
    """reverse int"""
    newarr = list(str(any_string_to_int(num)))
    newarr.reverse()
    return int("".join(newarr))
