from brownie import PriceConsumerV3

def read ():
    priceconsumer = PriceConsumerV3[-1]
    priceconsumer = round(priceconsumer.getLatestPrice()/1e8,2)
    print(f"El precio de BTC/USD es {priceconsumer}")

def main():
    read()