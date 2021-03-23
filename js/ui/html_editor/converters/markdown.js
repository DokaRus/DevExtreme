
import TurnDown from 'turndown';
import MarkdownIt from 'markdown-it';

import { getWindow } from '../../../core/utils/window';
import Errors from '../../widget/ui.errors';
import converterController from '../converterController';

class MarkdownConverter {
    constructor() {
        const window = getWindow();
        const turndown = window?.TurndownService || TurnDown;
        // eslint-disable-next-line spellcheck/spell-checker
        const markdownIt = window?.markdownit || MarkdownIt;

        if(!turndown) {
            throw Errors.Error('E1041', 'Turndown');
        }

        if(!markdownIt) {
            throw Errors.Error('E1041', 'Markdown-it');
        }

        this._html2Markdown = new turndown();

        if(this._html2Markdown?.addRule) {
            this._html2Markdown.addRule('emptyLine', {
                filter: (element) => {
                    return element.nodeName.toLowerCase() === 'p' && element.innerHTML === '<br>';
                },
                replacement: function() {
                    return '<br>';
                }
            });
        }

        this._markdown2Html = new markdownIt({
            breaks: true
        });
    }

    toMarkdown(htmlMarkup) {
        return this._html2Markdown.turndown(htmlMarkup || '');
    }

    toHtml(markdownMarkup) {
        let markup = this._markdown2Html.render(markdownMarkup || '');

        if(markup) {
            markup = markup.replace(new RegExp('\\r?\\n', 'g'), '');
        }

        return markup;
    }
}

converterController.addConverter('markdown', MarkdownConverter);

export default MarkdownConverter;
