import Tag from './Tag';
import './TaskForm.css';

function TaskForm() {
	return (
		<header className='app_header'>
			<form>
				<input type='text' className='task_input' placeholder='할일을 입력해 주세요.' />
				<div className='task_form_bottom_line'>
					<div>
						<Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="REACT" />
					</div>
 
					<div>
						<select className='task_status'>
							<option value='todo'>할일</option>
							<option value='todo'>진행중</option>
							<option value='todo'>완료</option>
						</select>
						<button type='submit' className='task_submit'>
							+ 추가
						</button>
					</div>
				</div>
			</form>
		</header>
	);
}

export default TaskForm