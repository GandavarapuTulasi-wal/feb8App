import PropTypes from 'prop-types'
function AddNos(props){
    return (
        <div className="addNo">
            <h3>first Number:{props.number1}</h3>
            <h3>second Number:{props.number2}</h3>
            <h1>sum is {props.number1+props.number2}</h1>
        </div>
    )
}
AddNos.propTypes={
    number1:PropTypes.number,
    number2:PropTypes.number,
}
export default AddNos