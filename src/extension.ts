import * as vscode from 'vscode';
import { join } from 'path';
import { getWebviewContent } from './webviewContent';

export function activate(context: vscode.ExtensionContext) {
	// console.log('Your extension "fed-ponavljanje-za-ispit" is now active!');
	let test = vscode.commands.registerCommand('fed-ponavljanje-za-ispit.test', () => {
		vscode.window.showInformationMessage('Hello World from FED ponavljanje za ispit!');
	});

	let view = vscode.commands.registerCommand('fed-ponavljanje-za-ispit.view', () => {
		const assetsRoot = vscode.Uri.file(join(context.extensionPath, 'assets'));

		const panel = vscode.window.createWebviewPanel(
			'gitCheatsheet',
			'test.js',
			vscode.ViewColumn.One, {
				localResourceRoots: [assetsRoot],
				enableScripts: true,
				enableFindWidget: true
			}
		);

		const assetsPath = panel.webview.asWebviewUri(assetsRoot);
		const cspSource = panel.webview.cspSource;

		panel.webview.html = getWebviewContent(cspSource, assetsPath);

		panel.webview.onDidReceiveMessage(
			(command: string) => {
				vscode.env.clipboard.writeText(command)
					.then(() => {
						vscode.window.showInformationMessage(`Command copied: ${command}`);
					}, () => {
						vscode.window.showErrorMessage('Copy failed');
					});
			},
			undefined,
			context.subscriptions
		);
	});
	context.subscriptions.push(test, view);
}

export function deactivate() {}
