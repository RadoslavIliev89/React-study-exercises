import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header'

import { useState, useEffect } from 'react';

const items = [
    {
        title: 'What is React',
        snippet: 'React is a front end JavaScript framework '
    },
    {
        title: 'Why use React',
        snippet: 'React is a  favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        snippet: 'You use React to creating components'
    }
]

const options = [
    { label: 'The Color Red', value: 'red' },
    { label: 'The Color Green', value: 'green' },
    { label: 'A Shade of Blue', value: 'blue' }
]


const App = () => {

    const [selected, setSelected] = useState(options[0]);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
        showPublicPath(currentPath)
    }
    useEffect(() => {
        window.addEventListener('popstate', onLocationChange)
    }, [])
    const showPublicPath = (path) => {

        if (window.location.pathname === '/') {
            return <Accordion items={items} />
        }
        else if (window.location.pathname === '/list') {
            return <SearchBar />
        }
        else if (window.location.pathname === '/dropdown') {
            return <Dropdown selected={selected}
                onSelectedChange={setSelected}
                options={options} />
        }
        else if (window.location.pathname === '/translate') {
            return <Translate />
        }
    }
    return (
        <div>
            <Header />
            {showPublicPath()}
            {/* <button onClick={() => setDropdown(!showDropdown)}>Toggle dropdown</button>
            { showDropdown ?
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
                : null} */}
        </div>
    );
}
export default App;