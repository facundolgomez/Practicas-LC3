import PropTypes from "prop-types"; 

const Table = ({brands}) => {
    const table = brands.map(brand => (
        <tr key={brand.brand}>
            <td>{brand.brand}</td>
            <td>{brand.income}</td>
        </tr>
    ));

    const incomeArray = brands.map(brand => brand.income);
    const totalIncome = incomeArray.reduce((acu, act) => acu + act, 0);
    const average = (totalIncome / 3).toFixed(2);

    return (
        <div>
            <table className="classTable">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                    <tr>
                        <td><p><strong>El promedio de ingreso neto es</strong></p></td>
                        <td>{average}</td>
                    </tr>
                
                </tbody>
            </table>
        
        </div>
        
        
    );
};


Table.propTypes = {
    brands: PropTypes.array //especifico las propTypes
}

export default Table;
