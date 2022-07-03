import { FaAngleLeft, FaAngleRight} from "react-icons/fa";


/*
    A placeholder component for the pagination of the page
*/

function Pagination() {
    return(
        <div className = "pagination">
            <p className = "pageButtons">
                <FaAngleLeft/>
            </p>
            <p>
                50 of 150
            </p>
            <p className = "pageButtons">
                <FaAngleRight/>
            </p>
        </div>
    );
}

export default Pagination;