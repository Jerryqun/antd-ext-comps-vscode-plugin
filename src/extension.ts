// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "antd-ext-comps-vscode-plugin" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('antd-ext-comps-vscode-plugin.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from antd-ext-comps-vscode-plugin!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

// import * as vscode from 'vscode';

// export function activate(context: vscode.ExtensionContext) {
//   const provider = vscode.languages.registerCompletionItemProvider(
//     ['typescriptreact', 'javascriptreact'], // 作用于 tsx 和 jsx 文件
//     {
//       provideCompletionItems(document, position) {
//         // 获取光标所在行文本到光标位置的字符串
//         const linePrefix = document.lineAt(position).text.substr(0, position.character);

//         // 判断是否以 ext_f 结尾
//         if (!linePrefix.endsWith('ext_f')) {
//           return undefined;
//         }

//         // 创建补全项
//         const completionItem = new vscode.CompletionItem('Insert TSX snippet for ext_f');
//         completionItem.kind = vscode.CompletionItemKind.Snippet;

//         // TSX 代码片段（支持换行）
//         completionItem.insertText = new vscode.SnippetString(
//           `const MyComponent = () => {
//   return (
//     <div>
//       <h1>Hello from TSX snippet!</h1>
//       <p>Inserted by ext_f completion.</p>
//     </div>
//   );
// };

// export default MyComponent;`
//         );

//         completionItem.detail = 'TSX 代码片段';
//         completionItem.documentation = new vscode.MarkdownString('输入 `ext_f` 后的自动补全，插入 TSX 代码片段');

//         return [completionItem];
//       },
//     },
//     // 不用指定触发字符，通过判断 text 判断触发
//   );

//   context.subscriptions.push(provider);
// }

// export function deactivate() {}

