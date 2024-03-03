import { useEffect, useState } from 'react';
import { IDetailObject } from '../../types/detailobject';
import { Dropdown, Input, Select } from 'antd';
const { Search } = Input;

interface IDetailSearchFilterProps {
	objects: IDetailObject[];
	onFilter: (objects: IDetailObject[]) => void;
}

export const DetailSearchFilter: React.FC<IDetailSearchFilterProps> = ({ objects, onFilter }) => {
	const [searchString, setSearchString] = useState<string | undefined>(undefined);
	const [location, setLocation] = useState<string | undefined>(undefined);

	const onSearchFilter = (objects: IDetailObject[], value: string | undefined) => {
		if (!value) return objects;

		return objects.filter((object) => JSON.stringify(object).toLowerCase().includes(value.toLowerCase()));
	};

	const filterLocation = (objects: IDetailObject[], value: string | undefined) => {
		if (!value) return objects;

		return objects.filter((object) => object.metadata.location.toLowerCase() === value.toLowerCase());
	};

	useEffect(() => {
		let filteredObjects = objects;

		filteredObjects = onSearchFilter(filteredObjects, searchString);
		filteredObjects = filterLocation(filteredObjects, location);

		console.log(filteredObjects);

		onFilter(filteredObjects);
	}, [searchString]);

	return (
		<div className='detail-search-filter'>
			<Search
				className='detail-search-filter-search'
				onChange={(e) => setSearchString(e.target.value)}
				value={searchString}
			/>
			<Select />
		</div>
	);
};
