from brownie import accounts, Numbers, config

def set_number():
    account = accounts.add(config['wallets']['from_key'])
    print("Vamos a desplegar usando la cuenta {account}")
    
    savenumber = Numbers[-1]
    tx = savenumber.setNumber(20, {"from": account})

def main ():
    set_number()