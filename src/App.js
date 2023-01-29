import React, { useState } from 'react';

import SearchInput from './components/SearchInput';
import Table from './components/Table';

import { Users } from './data/users';

const App = () => {
	const [query, setQuery] = useState('');

	const searchKeys = ['name', 'policy'];

	const search = (data) => {
		return data.filter((item) => searchKeys.some((key) => item[key].toLowerCase().includes(query)));
	};

	const onChange = (value) => setQuery(value);

	return (
		<div className='container'>
			<div className='row bg-primary-dark-3'>
				<SearchInput onChange={onChange} />
			</div>

			<div className='row'>{query ? <Table data={search(Users)} /> : 'No Data'}</div>
		</div>
	);
};

export default App;
