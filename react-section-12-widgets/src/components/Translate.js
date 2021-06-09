import { useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


const options = [
    {
        label: 'Bulgarian',
        value: 'bg'
    },
    {
        label: 'Africaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },

]

const Translate = () => {

    const [language, setLanguage] = useState(options[0])

    const [text, setText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedText(text)
        }, 1000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={debouncedText} language={language} />
        </div>
    );
}
export default Translate;