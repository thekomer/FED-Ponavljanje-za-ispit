import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// console.log('Your extension "fed-ponavljanje-za-ispit" is now active!');
	let fed = vscode.commands.registerCommand('fed-ponavljanje-za-ispit.FED', () => {
		vscode.window.showInformationMessage('Hello World from FED ponavljanje za ispit!');
	});

	context.subscriptions.push(fed);
}

export function deactivate() {}
