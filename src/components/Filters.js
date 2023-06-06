import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Offcanvas, Button } from "react-bootstrap";
import "../css/Filters.css";

function Filters({ filters, setFilters, handleChange, handleReset }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="menu pt-5 container">
                <div className="filter-buttons row ml-3 d-flex">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex mt-3 ps-2">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <ImSearch />
                            </span>
                            <input
                                className="form-control me-2 border-none"
                                id="search-input"
                                name="search"
                                type="text"
                                value={filters.search}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        search: e.target.value
                                    })
                                }
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="d-flex mt-3 ps-2">
                            <label className="input-group-text" htmlFor="sort">
                                <i className="fas fa-sort"></i>Sort by
                            </label>
                            <select
                                name="sort"
                                id="sort"
                                className="form-select border-none"
                                value={filters.sort}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        sort: e.target.value
                                    })
                                }
                            >
                                <option value="none">Recommended</option>
                                <option value="asc">Ascending price</option>
                                <option value="desc">Descending price</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;
