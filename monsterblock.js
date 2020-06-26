import ActorSheet5eNPC from "../../systems/dnd5e/module/actor/sheets/npc.js";

export class MonsterBlock5e extends ActorSheet5eNPC {

	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			classes: ["monsterblock", "sheet", "actor"],
			template: "modules/monsterblock/actor-sheet.html",
			width: 600,
			height: 600,
			tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
		});
	}
	
	 activateListeners(html) {
		 //
	 }
}

Hooks.on("init", () => {
	console.log(`Monster Block | Initialized.`);
});

Actors.registerSheet("dnd5e", MonsterBlock5e, {
    types: ["npc"],
    makeDefault: false
});