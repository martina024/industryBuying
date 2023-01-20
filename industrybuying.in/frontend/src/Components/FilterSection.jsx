import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
0.
const FilterSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortyBy] = useState(searchParams.get("sortBy") || "");
  const [category, setCategory] = useState(searchParams.getAll("category") || []);

  const handleChange = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      //add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  const handleSortBy = (e) => {
    setSortyBy(e.target.value);
  };
  useEffect(() => {
    const params = {};
    category && (params.category = category);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [category, setSearchParams, sortBy]);
console.log(category);
  return (
    <div>
      <h2>CATEGORY</h2>
      <div>
        <input
          type="checkbox"
          value="Agriculture Garden & Landscaping"
          defaultChecked={category.includes("Agriculture Garden & Landscaping")}
          onChange={handleChange}
        />
        <label>Agriculture</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Furniture, Hospitality and Food Service"
          defaultChecked={category.includes("Furniture, Hospitality and Food Service")}
          onChange={handleChange}
        />
        <label>Furniture</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("IT & Electronics")}
          value="IT & Electronics"
          onChange={handleChange}
        />
        <label>IT & Electronics</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Office Supplies")}
          value="Office Supplies"
          onChange={handleChange}
        />
        <label>Office Supplies</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Electrical")}
          value="Electrical"
          onChange={handleChange}
        />
        <label>Electrical</label>
      </div>
      <h2>Sort</h2>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            value="desc"
            name="sortBy"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;