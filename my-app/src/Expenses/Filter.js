import './styles/Filter.css'
const Filter = (props) => {

    const handleDropdownChange = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="filter_control">
            <label>Filter by year</label>
            <select value={props.selectedYear} onChange={handleDropdownChange}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    );
}

export default Filter;