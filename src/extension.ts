import * as vscode from 'vscode';
import { snippets } from './config';

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    ['typescript', 'typescriptreact'],
    {
      provideCompletionItems() {
        // 将数组转换为 CompletionItem 数组
        return snippets.map((snippet) => {
          const item = new vscode.CompletionItem(snippet.key);
          item.insertText = new vscode.SnippetString(snippet.content);
          item.documentation = '生成 TSX 组件模板';
          item.kind = vscode.CompletionItemKind.Snippet;
          return item;
        });
      },
    },
    'e' // 触发字符
  );
  context.subscriptions.push(provider);
}
