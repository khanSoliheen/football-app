import { FC } from 'react';
import { FilterField } from '../Interface/Interface';

interface FilterProps {
  fields: FilterField[];
  onFilter: (filters: Record<string, string>) => void;
}

export const Filter: FC<FilterProps> = ({ fields, onFilter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilter({ [name]: value });
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fields.length && fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type={field.type || 'text'}
              name={field.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};