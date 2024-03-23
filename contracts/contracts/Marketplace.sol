// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

import {NFTAsset} from "./NFTAsset.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Stake {

    address public nftAsset;
    address public usdcAddress;

    constructor(
        address _nftAsset,
        address _usdcAddress,
    ) {
        nftAsset = _nftAsset;
        usdcAddress = _usdcAddress;
    }

    event Buy(
        address indexed buyer,
        address asset,
        uint256 discount,
        uint256 price
        string frameId
    );


    function buyAsset(address asset, uint256 discount, uint256 price, stream memory frameId) public {
        NFTAsset nft = NFTAsset(nftAsset);
        IERC20 usdc = IERC20(usdcAddress);

        usdc.transferFrom(msg.sender, address(this), price);

        nft.safeMint(msg.sender);

        emit Buy(msg.sender, asset, discount, price, frameId);

    }
}