import { Editor } from '@monaco-editor/react';
import { FC, memo } from 'react';

import './CodeEditor.scss';

const CodeEditorComponent: FC = () => {
    return (
        <div className='editor-container'>
            <Editor
                height='90vh'
                theme='vs-dark'
                defaultLanguage='javascript'
                defaultValue='// место для вашего кода'
            />
        </div>
    );
};

export const CodeEditor = memo(CodeEditorComponent);