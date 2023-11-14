import * as vscode from 'vscode';
import { join } from 'path';

export function activate(context: vscode.ExtensionContext) {

	let mdView = vscode.commands.registerCommand('fed-ponavljanje-za-ispit.mdView', () => {
		const mdFile = vscode.Uri.file(join(context.extensionPath, 'assets/pon.md'));
		vscode.commands.executeCommand("markdown.showPreview", mdFile);
	});

	let mdViewNoPic = vscode.commands.registerCommand('fed-ponavljanje-za-ispit.mdViewNoPic', () => {
		const mdFile = vscode.Uri.file(join(context.extensionPath, 'assets/pon-np.md'));
		vscode.commands.executeCommand("markdown.showPreview", mdFile);
	});

	context.subscriptions.push(mdView, mdViewNoPic);
}

export function deactivate() {}
