import TableOpertations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const CabinTableOperations = () => {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "no", label: "No discount" },
    { value: "with", label: "With discount" },
  ];
  const sortOptions = [
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-desc", label: "Sort by name (Z-A)" },
    { value: "regularPrice-asc", label: "Sort by price (low first)" },
    { value: "regularPrice-desc", label: "Sort by price (hight first)" },
    { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
    { value: "maxCapacity-desc", label: "Sort by capacity (hight first)" },
  ];

  return (
    <div>
      <Filter filterField="discount" options={filterOptions} />
      <SortBy options={sortOptions} />
      <TableOpertations />
    </div>
  );
};

export default CabinTableOperations;
