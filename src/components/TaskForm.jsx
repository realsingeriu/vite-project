import React from 'react';

export default function TaskForm() {
	return (
		<header className='app_header'>
			<form>
				<input type='text' className='task_input' placeholder='Enter your task' />

				<div className='task_form_bottom_line'>
					<button className='tag'>HTML</button>
					<button className='tag'>CSS</button>
					<button className='tag'>JavaScript</button>
					<button className='tag'>React</button>

					<select className='task_status'>
						<option value='todo'>할일</option>
						<option value='todo'>진행중</option>
						<option value='todo'>완료</option>
					</select>
					<button type='submit' className='task_submit'>
						+ 추가
					</button>
				</div>
			</form>
		</header>
	);
}