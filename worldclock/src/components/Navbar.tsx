import React from 'react'
import './Navbar.css'
import Logo from '../assets/download.png'
import { useNavigate } from 'react-router-dom'

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [query, setQuery] = React.useState<string>('');
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Search query:', query);
    }
  };

  return (
    <div className='Navbar'>
      <img src={Logo} alt='logo' className='logo' />
      <input type="text" placeholder="Search..." className="search-input" value={query} onChange = {(e) => setQuery(e.target.value)} onKeyDown={handleKey}/>
      <button className='Nav-btn' onClick={() => navigate('/Home')}> Home </button>
      <button className='Nav-btn' onClick={() => navigate('/Contact')}> Contact </button>
      <button className='Nav-btn' onClick={() => navigate('/About')}> About </button>
    </div>
  )
}

export default Navbar
