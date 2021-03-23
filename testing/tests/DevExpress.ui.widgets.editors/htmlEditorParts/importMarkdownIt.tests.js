SystemJS.config({
    map: {
        'markdown-it': '/testing/helpers/quillDependencies/noMarkdownIt.js'
    }
});

define(function(require) {
    const MarkdownConverter = require('ui/html_editor/converters/markdown');

    QUnit.module('Import 3rd party', function() {
        QUnit.test('it throw an error if the markdown -> html converter script isn\'t referenced', function(assert) {
            assert.throws(
                function() { new MarkdownConverter(); },
                function(e) {
                    return /(E1041)[\s\S]*(Markdown-it)/.test(e.message);
                },
                'The markdown-it script isn\'t referenced'
            );
        });

        QUnit.test('initialize markdown-it from window', function(assert) {
            // eslint-disable-next-line spellcheck/spell-checker
            const prevWinMarkdownIt = window.markdownit;

            // eslint-disable-next-line spellcheck/spell-checker
            window.markdownit = {
                Converter: function() {
                    this.initialized = true;
                }
            };

            const converter = new MarkdownConverter();

            assert.ok(converter._markdown2Html.initialized);

            // eslint-disable-next-line spellcheck/spell-checker
            window.markdownit = prevWinMarkdownIt;
        });
    });
});
