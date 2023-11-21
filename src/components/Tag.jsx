import './Tag.css';

export default function Tag({tagName, selectTag, selected}) {
  const tagStyle = {
		HTML: { backgroundColor: '#fda821' },
		CSS: { backgroundColor: '#15d4c8' },
		JavaScript: { backgroundColor: '#ffd12c' },
		REACT: { backgroundColor: '#4cdafc' },
		default: { backgroundColor: '#f9f9f9' },
	};
  
  return (
    <button 
    className='tag' 
    type='button' 
    style={selected ? tagStyle[tagName] : tagStyle.default}
    onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
    
  );
}
