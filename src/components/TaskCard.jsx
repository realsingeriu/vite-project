import Tag from './Tag';
import deleteIcon from '../assets/delete.png';
import './TaskCard.css';

export default function TaskCard({ title, tags, handleDelete, index }) {
	return (
		<article className='task_card'>
			<p className='task_text'>{title}</p>

			<div className='task_card_bottom_line'>
				<div className='task_card_tags'>

					{tags.map((tag, index) => (
						<Tag tagName={tag} key={index} selected={true} />
						))}
					
					
				</div>
				<div className='task_delete'>
					<img onClick={() => handleDelete(index)} className='delete_icon' src={deleteIcon} alt='' />
				</div>
			</div>
		</article>
	);
}