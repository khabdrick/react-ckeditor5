import Editor from '@ckeditor/ckeditor5-core/src/editor/editor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Google from './my-plugin';

class MyCustomEditor extends Editor {
    static create(element) {
        return new MyCustomEditor(element);
    }

    constructor(element) {
        super(element);

        this.config.plugins = [
            Essentials,
            Bold,
            Italic,
            Underline,
            Paragraph,
            Google
        ];

        this.config.toolbar = [
            'bold',
            'italic',
            'underline',
            'myCustomButton'
        ];
    }
}

export default MyCustomEditor;
