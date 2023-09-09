import { useState } from 'react';
import { Search } from 'lucide-react';


export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = event => {
        event.preventDefault();
        console.log(searchTerm); // Aqui você pode implementar a lógica de pesquisa.
    }

    return (
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                className="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Search..."
            />
            <button
                type="submit"
                className="flex items-center justify-center h-10 w-10 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
            >
                <Search/>
            </button>
        </form>
    );
}
