// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity ^0.8.4;

contract eventStruct is ERC721 {
    // state variable
    string public theme;
    uint public eventId;
    // uint public startTime;
    uint public endTime;
    uint public registrationFeeEther;
    uint public registrationFeeToken;
    uint public maxAttendees;
    uint public totalRegFeesEther;
    uint public totalRegFeesToken;
    address payable eventOwner;
    address[] public attendees;
    uint public currentRegistrants;
    uint reward = 20 * 1e18;
    bool public withdrawnEther;
    bool public withdrawnToken;

    IERC20 public token;
    string public TOKEN_URI;
    uint256 private s_tokenCounter;

    constructor(
        string memory _theme,
        uint _endTime,
        uint _regFeeEther,
        uint _regFeeToken,
        uint _maxAttendees,
        string memory _tokenUri,
        uint _eventId
    ) ERC721("EtherTune_Event", "ETNFT") {
        s_tokenCounter = 0;
        theme = _theme;
        endTime = block.timestamp + (_endTime * 1 minutes);
        registrationFeeEther = _regFeeEther * 1e18;
        registrationFeeToken = _regFeeToken * 1e18;
        maxAttendees = _maxAttendees;
        eventOwner = payable(tx.origin);
        TOKEN_URI = _tokenUri;
        token = IERC20(0x5c3dE5E47Bf0C3E0eFa5c5504e838895074F627f);
        eventId = _eventId;
    }

    // register for event function
    function mintNft() public {
        _safeMint(tx.origin, s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function registerWithEther() external payable {
        require(attendees.length <= maxAttendees, "Sold out");
        require(block.timestamp <= endTime, "Registration closed");
        require(msg.value >= registrationFeeEther, "Insufficient fund");
        totalRegFeesEther += registrationFeeEther;
        attendees.push(msg.sender);
        mintNft();
        token.transfer(msg.sender, reward);
        currentRegistrants++;
    }

    function registerWithToken() external {
        require(attendees.length <= maxAttendees, "Sold out");
        require(block.timestamp <= endTime, "Registration closed");
        require(
            token.transferFrom(tx.origin, address(this), registrationFeeToken),
            "insufficient fund"
        );
        totalRegFeesToken += registrationFeeToken;
        attendees.push(tx.origin);
        mintNft();
        token.transfer(tx.origin, reward);
        currentRegistrants++;
    }

    // withdraw function
    function withdrawEthers() external {
        require(tx.origin == eventOwner, "not owner of event");
        require(block.timestamp > endTime, "Registration still on");
        require(withdrawnEther == false, "Already withdrawn");
        eventOwner.transfer(totalRegFeesEther);
        withdrawnEther = true;
    }

    function withdrawTokens() external {
        require(tx.origin == eventOwner, "not owner of event");
        require(block.timestamp > endTime, "Registration still on");
        require(withdrawnToken == false, "Already withdrawn");
        token.transfer(eventOwner, totalRegFeesToken);
        withdrawnToken = true;
        token.transfer(address(token), balanceOf(address(this)));
    }
}
