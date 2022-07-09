from brownie import accounts, config,  PriceConsumerV3


def main():
    account = accounts.add(config['wallets']['from_key'])
    price = PriceConsumerV3.deploy({"from": account})

    print(f"Vamos a desplegar usando la cuenta {account}")
    return price