from brownie import accounts, config, network, Numbers


def main ():
    account = accounts.add(config['wallets']['from_key'])
    print(f"Vamos a desplegar usando la cuenta {account}")

    savenumber = Numbers.deploy({"from":account})
    return savenumber