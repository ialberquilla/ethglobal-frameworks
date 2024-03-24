import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Buy } from "../generated/Marketplace/Marketplace"

export function createBuyEvent(
  buyer: Address,
  asset: Address,
  discount: BigInt,
  price: BigInt,
  frameId: string
): Buy {
  let buyEvent = changetype<Buy>(newMockEvent())

  buyEvent.parameters = new Array()

  buyEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "discount",
      ethereum.Value.fromUnsignedBigInt(discount)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("frameId", ethereum.Value.fromString(frameId))
  )

  return buyEvent
}
