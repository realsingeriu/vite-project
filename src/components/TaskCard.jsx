import Tag from './Tag';
import deleteIcon from '../assets/delete.png';
import React, {useState} from 'react';
import './TaskCard.css';

export default function TaskCard({ title, tags, handleDelete, index, handleMemo}) {
	
	const [editMemo, setEditMemo] = useState(false);
  const [memo, setMemo] = useState('');
	
	const handleMemoEdit = () => {
    setEditMemo(true);
  };

  const handleMemoSave = () => {
    setEditMemo(false);
    handleMemoChange(index, memo);
  };
	
	return (
		<article className='task_card'>
			<p className='task_text'>{title}</p>

			<div className='task_card_bottom_line'>
				<div className='task_card_tags'>

					{tags.map((tag, index) => (
						<Tag tagName={tag} key={index} selected={true} />
						))}
					
					
				</div>
				{/* 메모 기능 추가  */}
				<div className='task_memo'>
          {editMemo ? (
            <>
              <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
              <button onClick={handleMemoSave}>저장</button>
            </>
          ) : (
            <>
             <div onClick={handleMemoEdit}>
                {memo ? (
                  <>
                    <strong>내용:</strong> {memo}
                  </>
                ) : (
                  '메모 추가'
                )}
              </div>
            </>
          )}
        </div>

				<div className='task_delete'>
					<img onClick={() => handleDelete(index)} className='delete_icon' src={deleteIcon} alt='' />
				</div>
			</div>
		</article>
	);
}