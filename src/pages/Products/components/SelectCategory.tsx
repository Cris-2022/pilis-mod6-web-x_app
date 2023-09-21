import { categories } from '@/utils/productCategory';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { Option } from '../ProductAdd/typesProductForm';


interface Props {
  controler: any
};

export const SelectCategory = ({ controler }: Props) => {
  const options: Option[] = categories.map((category) => (
    {
      value: category.value,
      label: category.name
    }
  ));

  return (
    <Controller
      name='categories'
      control={controler}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
        />
      )}
    />
  );
};
