import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Buy } from "../generated/schema"
import { Buy as BuyEvent } from "../generated/Marketplace/Marketplace"
import { handleBuy } from "../src/marketplace"
import { createBuyEvent } from "./marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let buyer = Address.fromString("0x0000000000000000000000000000000000000001")
    let asset = Address.fromString("0x0000000000000000000000000000000000000001")
    let discount = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
    let frameId = "Example string value"
    let newBuyEvent = createBuyEvent(buyer, asset, discount, price, frameId)
    handleBuy(newBuyEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Buy created and stored", () => {
    assert.entityCount("Buy", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "asset",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "discount",
      "234"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "Buy",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "frameId",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
