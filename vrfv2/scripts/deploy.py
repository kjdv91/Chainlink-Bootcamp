from brownie import config, network, VRFv2Consumer, accounts


def main():
    account = accounts.add(config["wallets"]["from_key"])
    print(account)
    vrfConsumer =  VRFv2Consumer.deploy(865,{"from":account})
    return vrfConsumer