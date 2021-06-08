import axios from 'axios';
import { useState, useEffect } from 'react';
import Accordion from './Accordion';
const SearchBar = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timeoutId);
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: debouncedTerm
                }
            })

            setResult(data.query.search)
        }
        search();
    }, [debouncedTerm])

    // useEffect(() => {

    //     if (term && !result.length) {
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //         }, 1000)
    //         return () => {
    //             clearTimeout(timeoutId)
    //         }
    //     }

    // }, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)} className="input" />
                </div>
            </div>
            <Accordion items={result} />
        </div>

    )

}
export default SearchBar;