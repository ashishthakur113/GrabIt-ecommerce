import { Search } from 'lucide-react'; 
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchContext } from '../Context/UserContext';

export default function Searchbar() {
  const { searchTerm, setSearchTerm } = useContext(searchContext);
  const [inputValue, setInputValue] = useState('');
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();


 useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setProducts(data.products); 
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  }
  fetchData();
}, []);


  useEffect(() => {
    const search = inputValue.trim().toLowerCase();
    if (!search) {
      setSuggestions([]);
      return;
    }
    const filtered = products.filter((item) => {
      return (
        item.title.toLowerCase().includes(search) ||
        item.brand?.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)
      );
    });
    setSuggestions(filtered.slice(0, 5));
  }, [inputValue, products]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        setSearchTerm(inputValue);
        localStorage.setItem('searchTerm', inputValue);
        navigate('/search');
        setSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (text) => {
    setInputValue(text);
    setSearchTerm(text);
    localStorage.setItem('searchTerm', text);
    navigate('/search');
    setSuggestions([]);
  };

  useEffect(() => {
    if (location.pathname !== '/search') {
      setInputValue('');
      setSuggestions([]);
    }
  }, [location.pathname]);

  return (
    <div className="relative w-full max-w-[600px] xl:min-w-[400px]">
      <div className="flex items-center h-10 bg-white rounded-md px-3 mx-auto">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="search"
          placeholder="Search product,  category"
          className="flex-1 outline-none font-serif bg-transparent text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute bg-white z-50 w-full mt-1 shadow-lg rounded-md overflow-hidden max-h-60 overflow-y-auto">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSuggestionClick(item.title)}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-black"
            >
              {item.title} <span className="text-gray-400">({item.category})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
