// ==UserScript==
// @name        Auto Kick
// @namespace   https://greasyfork.org/users/281093
// @match       https://sketchful.io/
// @grant       none
// @version     0.1
// @author      Bell
// @license     MIT
// @copyright   2020, Bell
// @description Click on a user and then click Auto Kick to automatically kick them when they join.
// ==/UserScript==
/* jshint esversion: 6 */
 
const trackedPlayers = JSON.parse(localStorage.getItem('trackedPlayersAutokick')) || [];
const userModalHeader = document.querySelector('#userModal div.modal-header');
const chat = document.querySelector('#gameChatList');
const buttonTextOff = 'Auto Kick';
const buttonTextOn = 'Stop Kick';
const buttonStyle = `width: 100px; top: 21px; margin-right:
					 16px; position: absolute; right: 110px`;
 
(function addButton() {
	const modalBody = document.querySelector('#userModal div.modal-body');
	const button = document.createElement('button');
	button.setAttribute('class', 'btn btn-danger');
	button.setAttribute('style', buttonStyle);
	button.textContent = buttonTextOff;
	button.id = 'autokickButton';
	button.onclick = toggleTrackedPlayer;
	modalBody.appendChild(button);
})();
 
function toggleTrackedPlayer() {
	const player = document.querySelector('#userModal h3').textContent;
	const button = document.querySelector('#autokickButton');
	const tracked = trackedPlayers.includes(player);
 
	if (tracked) {
		trackedPlayers.splice(trackedPlayers.indexOf(player), 1);
		button.textContent = buttonTextOff;
	}
	else {
		trackedPlayers.push(player);
		button.textContent = buttonTextOn;
		kickPlayer(player);
	}
 
	localStorage.setItem('trackedPlayersAutokick', JSON.stringify(trackedPlayers));
}
 
const updateHeader = (mutations) => {
	mutations.forEach(mutation => {
		const newNodes = mutation.addedNodes;
		if (!newNodes.length) return;
		updateButtonState(newNodes[0]);
	});
};
 
new MutationObserver(updateHeader)
	.observe(userModalHeader, { childList: true, subtree: true });
 
function updateButtonState(nameNode) {
	const player = nameNode.textContent;
	const button = document.querySelector('#autokickButton');
	const tracked = trackedPlayers.includes(player);
	button.textContent = tracked ? buttonTextOn : buttonTextOff;
}
 
const checkChat = (mutations) => {
	mutations.forEach(mutation => {
		const msgNode = mutation.addedNodes[0];
		if (!msgNode || !msgNode.classList.contains('chatAdmin')) return;
		parseSystemMessage(msgNode.textContent);
	});
};
 
new MutationObserver(checkChat).observe(chat, { childList: true });
 
function kickPlayer(name) {
	document.querySelectorAll('.gameAvatarName').forEach(node =>  {
		if (node.textContent.trim() === name.trim()) {
			const id = node.parentElement.parentElement.id.match(/\d+/g)[0];
			window.sendChat('/votekick ' + id);
		}
	});
}
 
function parseSystemMessage(message) {
	if (message.endsWith('joined the room!')) {
		let playerName = message.split((' joined the room!'))[0];
		
		if (!trackedPlayers.includes(playerName)) return;
		setTimeout( () => { 
			kickPlayer(playerName);
		}, 200);
	}
}






// ==UserScript==
// @name         SpeedTest (Automatic)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Autoclick en SpeedTest
// @author       You
// @match        https://www.speedtest.net/*
// @icon         https://www.google.com/s2/favicons?domain=speedtest.net
// @grant        none
// ==/UserScript==
 
(function() {
  'use strict';
   
  setTimeout(function(){
  var ob1=document.getElementsByClassName("start-button")[0];
  var ob2=ob1.getElementsByTagName("a")[0];
  var ob3=ob2.click();
   
  },30000);
  })();