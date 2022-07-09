from brownie import VRFv2Consumer, accounts

def main():
    #account = accounts.add(config["wallets"]["from_key"])
    vrf_contract = VRFv2Consumer[-1]
    try:
        print(f"El numero aleatorio solicitado es, {(vrf_contract.s_randonWords(0) % 20)+1}")
    except:
        print("Debes esperar por lo menos 1 minuto")