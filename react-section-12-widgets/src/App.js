import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';

const items = [
    {
        title: 'What is React',
        content: 'React is a front end JavaScript framework '
    },
    {
        title: 'Why use React',
        content:'React is a  favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content:'You use React to creating components'
    }
]


const App = () => {

    return (
        <div>
            <SearchBar/>
        </div>
    );
}
export default App;