// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity ^0.8.4;

contract musicStruct is ERC721 {
    uint public musicId;
    string public title;
    string public artist;
    uint public etherPrice;
    uint public tokenPrice;
    address payable musicOwner;
    uint public totalEtherRaised;
    uint public totalTokenRaised;
    uint public currentEthers;
    uint public currentTokens;
    uint public buyers;
    mapping(address => uint) buyerToAmountEther;
    mapping(address => uint) buyerToAmountToken;

    IERC20 public token;
    string public TOKEN_URI;
    uint256 private s_tokenCounter;

    constructor(
        string memory _title,
        string memory _artist,
        uint _etherPrice,
        uint _tokenPrice,
        uint _id,
        string memory _tokenUri
    ) ERC721("EtherTunesMusicNFT", "ETMNFT") {
        s_tokenCounter = 0;
        title = _title;
        artist = _artist;
        etherPrice = _etherPrice * 1e18;
        tokenPrice = _tokenPrice * 1e18;
        musicId = _id;
        musicOwner = payable(tx.origin);
        TOKEN_URI = _tokenUri;
        token = IERC20(0x5c3dE5E47Bf0C3E0eFa5c5504e838895074F627f);
    }

    function mintNft() public {
        _safeMint(tx.origin, s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function buyMusicWithEther() external payable {
        require(msg.value >= etherPrice, "Insufficient fund");
        totalEtherRaised += msg.value;
        currentEthers += msg.value;
        buyerToAmountEther[tx.origin] += etherPrice;
        mintNft();
        buyers++;
    }

    function buyMusicWithToken() external {
        require(
            token.transferFrom(tx.origin, address(this), tokenPrice),
            "Insufficient fund"
        );
        totalTokenRaised += tokenPrice;
        currentTokens += tokenPrice;
        buyerToAmountToken[tx.origin] += tokenPrice;
        mintNft();
        buyers++;
    }

    function withdrawEthers() external {
        require(tx.origin == musicOwner, "not owner of event");
        musicOwner.transfer(currentEthers);
        currentEthers = 0;
    }

    function withdrawTokens() external {
        require(tx.origin == musicOwner, "not owner of event");
        token.transfer(musicOwner, currentTokens);
        currentTokens = 0;
    }
}
