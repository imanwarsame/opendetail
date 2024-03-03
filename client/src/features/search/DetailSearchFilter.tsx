import { useEffect, useState } from 'react';
import { IDetailObject } from '../../types/detailobject';
import { Input, Select } from 'antd';
import { Locations } from '../../enums/locations';
const { Search } = Input;

interface IDetailSearchFilterProps {
	objects: IDetailObject[];
	onFilter: (objects: IDetailObject[]) => void;
}

export const DetailSearchFilter: React.FC<IDetailSearchFilterProps> = ({ objects, onFilter }) => {
	const [searchString, setSearchString] = useState<string | undefined>(undefined);
	const [location, setLocation] = useState<string | undefined>(undefined);
	const [cost, setCost] = useState<1 | 2 | 3 | undefined>(undefined);

	const onSearchFilter = (objects: IDetailObject[], value: string | undefined) => {
		if (!value) return objects;

		return objects.filter((object) => JSON.stringify(object).toLowerCase().includes(value.toLowerCase()));
	};

	const onFilterLocation = (objects: IDetailObject[], value: string | undefined) => {
		if (!value) return objects;

		return objects.filter(
			(object) => object.metadata.location && object.metadata.location.toLowerCase() === value.toLowerCase()
		);
	};

	const onCostFilter = (objects: IDetailObject[], value: 1 | 2 | 3 | undefined) => {
		if (!value) return objects;

		return objects.filter((object) => object.metadata.cost === value);
	};

	useEffect(() => {
		let filteredObjects = objects;

		filteredObjects = onSearchFilter(filteredObjects, searchString);
		filteredObjects = onFilterLocation(filteredObjects, location);
		filteredObjects = onCostFilter(filteredObjects, cost);

		console.log(filteredObjects);

		onFilter(filteredObjects);
	}, [searchString, location, cost, objects, onFilter]);

	return (
		<div className='detail-search-filter'>
			<Search
				className='detail-search-filter-search'
				onChange={(e) => setSearchString(e.target.value)}
				value={searchString}
			/>
			<Select
				value={undefined}
				className='detail-search-filter-select'
				options={Object.values(Locations).map((label) => {
					return { label, value: label };
				})}
				defaultValue={'country'}
				allowClear
				onChange={(value) => setLocation(value)}
			/>
			<Select
				value={undefined}
				className='detail-search-filter-select'
				options={[
					{ label: '€', value: 1 },
					{ label: '€€', value: 2 },
					{ label: '€€€', value: 3 }
				]}
				defaultValue={'Cost'}
				onChange={(value) => setCost(value ? (Number(value) as 1 | 2 | 3) : undefined)}
				allowClear
				onClear={() => setCost(undefined)}
			/>
		</div>
	);
};
