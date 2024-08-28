// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DecentralisedNFT is ERC721URIStorage {
    uint256 private _tokenIds;
    string private _baseURIExtended;

    event CreatedNFT(uint256 indexed tokenId, string tokenURI);

    // Make the constructor payable
    constructor() payable ERC721("DecentralisedNFT", "DNFT") {
        _setBaseURI("ipfs://");
    }

    function _setBaseURI(string memory baseURI) private {
        _baseURIExtended = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseURIExtended;
    }

    function mint(string memory _tokenURI) public returns (uint256) {
        uint256 newItemId = _tokenIds;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        emit CreatedNFT(newItemId, _tokenURI);
        _tokenIds += 1;
        return newItemId;
    }
}
