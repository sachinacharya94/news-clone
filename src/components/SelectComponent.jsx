import { Select } from "antd";

// Filter option.label match the user type input

const SelectComponent = ({ options, onChange }) => (
  <Select
    showSearch
    className="h-[40px] min-w-36"
    placeholder="Filter by categories..."
    optionFilterProp="children"
    onChange={onChange}
    filterOption={(input, option) => (option?.label ?? "").includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "")
        .toLowerCase()
        .localeCompare((optionB?.label ?? "").toLowerCase())
    }
    options={options}
  />
);
export default SelectComponent;