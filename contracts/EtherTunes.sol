// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./eventStruct.sol";
import "./musicStruct.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// ipfs://Qmap7f2XnVipFKX3atBv9nY5GmwUBdxFMWiJLtoUGazT5W
contract EtherTunes {
    IERC20 token;
    uint public eventIds;
    uint public musicIds;
    eventStruct public _eventStruct;
    musicStruct public _musicStruct;

    mapping(uint => eventStruct) public listedEvents;
    mapping(uint => musicStruct) public listedMusic;
    uint reward = 20 * 1e18;

    struct eventCard {
        string theme;
        uint eventId;
        uint endTime;
        uint registrationFeeEther;
        uint registrationFeeToken;
        uint maxAttendees;
        uint currentRegistrants;
        bool withdrawnEther;
        bool withdrawnToken;
        string TOKEN_URI;
    }

    struct musicCard {
        uint musicId;
        string title;
        string artist;
        uint etherPrice;
        uint tokenPrice;
        uint totalEtherRaised;
        uint totalTokenRaised;
        uint currentEthers;
        uint currentTokens;
        uint buyers;
        string tokenUri;
    }

    constructor(address _token) {
        token = IERC20(_token);
    }

    // -----------------EVERTHING EVENTS----------------------------

    // function to list event
    function listEvent(
        string memory theme,
        uint endTime,
        uint regFeeEther,
        uint regFeeToken,
        uint maxAttendees,
        string memory tokenUri
    ) external {
        eventIds++;
        _eventStruct = new eventStruct(
            theme,
            endTime,
            regFeeEther,
            regFeeToken,
            maxAttendees,
            tokenUri,
            eventIds
        );
        listedEvents[eventIds] = _eventStruct;
        token.transfer(address(_eventStruct), maxAttendees * 20 * 1e18);
    }

    // function register for event
    function registerEventWithEther(uint _eventId) external payable {
        eventStruct Event = listedEvents[_eventId];
        (bool success, ) = address(Event).call{value: msg.value}(
            abi.encodeWithSignature("registerWithEther()")
        );
        require(success, "Failed to send Ether to event contract");
    }

    function registerEventWithToken(uint _eventId) external {
        eventStruct Event = listedEvents[_eventId];
        Event.registerWithToken();
    }

    // -------------event withdrawals-----------
    function withdrawEventToken(uint _eventId) external {
        eventStruct Event = listedEvents[_eventId];
        Event.withdrawTokens();
    }

    function withdrawEventEther(uint _eventId) external {
        eventStruct Event = listedEvents[_eventId];
        Event.withdrawEthers();
    }

    // function get event details
    function getEventDetails(
        uint index
    ) internal view returns (eventCard memory) {
        eventStruct Event = listedEvents[index];
        return
            eventCard({
                theme: Event.theme(),
                eventId: Event.eventId(),
                endTime: Event.endTime(),
                registrationFeeEther: Event.registrationFeeEther(),
                registrationFeeToken: Event.registrationFeeToken(),
                maxAttendees: Event.maxAttendees(),
                currentRegistrants: Event.currentRegistrants(),
                TOKEN_URI: Event.TOKEN_URI(),
                withdrawnEther: Event.withdrawnEther(),
                withdrawnToken: Event.withdrawnToken()
            });
    }

    // function to see all events
    function seeEvents() public view returns (eventCard[] memory) {
        eventCard[] memory arr = new eventCard[](eventIds);
        for (uint i = 0; i < eventIds; i++) {
            arr[i] = getEventDetails(i + 1);
        }
        return arr;
    }

    // -------------------- EVERYTHING MUSIC ------------------------------------

    // list music
    function listMusic(
        string memory title,
        string memory artist,
        uint _etherPrice,
        uint _tokenPrice,
        string memory tokenUri
    ) external {
        musicIds++;
        _musicStruct = new musicStruct(
            title,
            artist,
            _etherPrice,
            _tokenPrice,
            musicIds,
            tokenUri
        );
        listedMusic[musicIds] = _musicStruct;
    }

    // buy music with ether
    function buyMusicWithEther(uint _musicId) external payable {
        musicStruct music = listedMusic[_musicId];
        (bool success, ) = address(music).call{value: msg.value}(
            abi.encodeWithSignature("buyMusicWithEther()")
        );
        require(success, "Failed to send Ether to event contract");
        token.transfer(msg.sender, reward);
    }

    // buy music with ether
    function buyMusicWithToken(uint _musicId) external {
        musicStruct music = listedMusic[_musicId];
        music.buyMusicWithToken();
        token.transfer(msg.sender, reward);
    }

    // -------------- Music Withdrawals -----------------
    function withdrawMusicToken(uint _musicId) external {
        musicStruct Music = listedMusic[_musicId];
        Music.withdrawTokens();
    }

    function withdrawMusicEther(uint _musicId) external {
        musicStruct Music = listedMusic[_musicId];
        Music.withdrawEthers();
    }

    // function get music details
    function getMusicDetails(
        uint index
    ) internal view returns (musicCard memory) {
        musicStruct Music = listedMusic[index];
        return
            musicCard({
                musicId: Music.musicId(),
                title: Music.title(),
                artist: Music.artist(),
                etherPrice: Music.etherPrice(),
                tokenPrice: Music.tokenPrice(),
                totalEtherRaised: Music.totalEtherRaised(),
                totalTokenRaised: Music.totalTokenRaised(),
                currentEthers: Music.currentEthers(),
                currentTokens: Music.currentTokens(),
                buyers: Music.buyers(),
                tokenUri: Music.TOKEN_URI()
            });
    }

    // function to see all music
    function seeMusics() public view returns (musicCard[] memory) {
        musicCard[] memory arr = new musicCard[](musicIds);
        for (uint i = 0; i < musicIds; i++) {
            arr[i] = getMusicDetails(i + 1);
        }
        return arr;
    }
}
