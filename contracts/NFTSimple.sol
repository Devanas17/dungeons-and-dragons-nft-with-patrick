// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721 {
    constructor() ERC721("MyNFT", "MNFT")  {

    }
}