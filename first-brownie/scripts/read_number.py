from brownie import accounts, config, Numbers


def read():
    numero = Numbers[-1]
    print(f"El numero de mi  contrato es {numero.number()}")



def main():
    read()