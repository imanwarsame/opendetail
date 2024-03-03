import { IDetailObject } from '../../types/detailobject';
import { Input } from 'antd';
const { Search } = Input;

interface IDetailSearchFilterProps {
	objects: IDetailObject[];
	onFilter: (objects: IDetailObject[]) => void;
}

export const DetailSearchFilter: React.FC<IDetailSearchFilterProps> = ({ objects, onFilter }) => {
	const onSearchFilter = (value: string) => {
		const filteredObjects = objects.filter((object) => object.name.toLowerCase().includes(value.toLowerCase()));
		onFilter(filteredObjects);
	};

	return <Search onChange={(e) => e && onSearchFilter(e.target.value)} />;
};

