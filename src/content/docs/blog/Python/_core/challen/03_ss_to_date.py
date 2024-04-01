

def ss_to_human(s:int):

    print(f"segundos {s}")

    print(f"ss {s % 60} ==> el resultante de dividir {s} / 60")
    print(f"mm {s // 60 % 60  } ==> {s // 60} y luego sacar el resultante de dividir {s} / 60 minutos")
    print(f"hh {s // 60 // 60  } ==> {s // 60} y luego sacar el resultante de dividir {s} / limite dado horas")

ss_to_human(3640)



def seconds_to_human_time(s):
    nn = lambda n: f'0{n}' if n < 10 else n
 
    HH = s // 60 // 60 
    MM = s // 60 % 60
    SS = s % 60

    print(SS)

    return f'{nn(HH)}:{nn(MM)}:{nn(SS)}'
