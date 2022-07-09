from brownie import config, network, VRFv2Consumer, accounts


def main():
    account = accounts.add(config["wallets"]["from_key"])
    vrf_contract = VRFv2Consumer[-1]
    print(vrf_contract)

    try:
        tx = vrf_contract.requestRandomWords({"from":account})
        tx.wait(1)
    except:
        print("Debes agregar fondos a tu subscripcion vrf")
        return
    print("Solicitud Realizada")