// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "antd-ext-comps-vscode-plugin" is now active!'
  );
  //   const disposable = vscode.languages.registerCompletionItemProvider(
  //   // 你可以根据需要改成 'javascript', 'plaintext' 等
  //   [{ language: 'typescriptreact', scheme: 'file' }, { language: 'typescript', scheme: 'file' }, { language: '*', scheme: 'file' }],
  //   {
  //     provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
  //       const line = document.lineAt(position);
  //       const prefix = line.text.substring(0, position.character);
  //       console.log('prefix: ', prefix);
  //       const match = prefix.match(/(\w+)$/);
  //       if (!match || match[1] !== 'abcd') {
  //         return undefined;
  //       }

  //       const item = new vscode.CompletionItem('abcdef', vscode.CompletionItemKind.Snippet);
  //       item.detail = '插入abcdef';
  //       item.insertText = 'abcdef';

  //       // 让补全项替换 abcd
  //       const startPos = position.translate(0, -match[1].length);
  //       item.range = new vscode.Range(startPos, position);

  //       return [item];
  //     }
  //   },
  //   'a', 'b', 'c', 'd' // 这样只要输入这些字母时都会自动触发
  // );

  // context.subscriptions.push(disposable);

  // 注册一个完成项提供者，并设置触发字符为'd'
  const provider = vscode.languages.registerCompletionItemProvider(
    '*',
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        const linePrefix = document
          .lineAt(position)
          .text.slice(0, position.character);
        if (linePrefix.endsWith('abcd')) {
          const completionItem = new vscode.CompletionItem(
            'abcd',
            vscode.CompletionItemKind.Text
          );
          completionItem.insertText = 'abcdefg';
          completionItem.documentation = new vscode.MarkdownString(
            '插入`abcdefg`'
          );
          // 设置替换范围
          const start = new vscode.Position(
            position.line,
            position.character - 4
          );
          const end = position;
          completionItem.range = new vscode.Range(start, end);
          return [completionItem];
        }
        return undefined;
      },
    },
    'd' /* 触发字符 */
  );

  context.subscriptions.push(provider);
}

// This method is called when your extension is deactivated
export function deactivate() {}
