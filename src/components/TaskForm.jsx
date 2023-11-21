import { useState } from 'react';
import Tag from './Tag';
import './TaskForm.css';

function TaskForm({setTasks}) {
	const [taskData, setTaskData] = useState({
		task: '',
		status: 'todo',
		tags: [],
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTaskData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(taskData);
		setTasks((prev) => {
			return [...prev, taskData]; // 새 task 추가 
		});
		// TaskData를 리셋하기 
		setTaskData({
			task: '',
			status: 'todo',
			tags: [],
		});
	};

	//선택한 태그를 tags에 추가한다. (있으면 삭제 없으면 추가)
	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filterTags = taskData.tags.filter((item) => item !== tag);
			setTaskData((prev) => {
				return { ...prev, tags: filterTags };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] };
			});
		}
	};

		// 현재 선택된 태그아이템중 tag가 있으면 true 없으면 false 반환
		const checkTag = (tag) => {
			return taskData.tags.some((item) => item === tag);
		};

	return (
		<header className='app_header'>
			<form onSubmit={handleSubmit}>
			<input
					type='text'
					onChange={handleChange}
					value={taskData.task}
					name='task'
					className='task_input'
					placeholder='할일을 입력해 주세요.'
				/>
				<div className='task_form_bottom_line'>
					<div>
						<Tag tagName="HTML" selectTag={selectTag} selected={checkTag('HTML')}/>
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag('CSS')}/>
            <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag('JavaScript')}/>
            <Tag tagName="REACT" selectTag={selectTag} selected={checkTag('REACT')}/>
					</div>
 
					<div>
						<select
							className='task_status'
							name='status'
							value={taskData.status}
							onChange={handleChange}
						>
							<option value='todo'>할일</option>
							<option value='doing'>진행중</option>
							<option value='done'>완료</option>
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