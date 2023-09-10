import {PropTypes} from 'prop-types'
export default function CounterButton({by,increment, decrement}){
    // const buttonStyle={
    //     fontSize:"16px",
    //     backgroundColor:"#00a5ab",
    //     width:"100px",
    //     margin:"10px",
    //     color:"white",
    //     padding:"15px",
    //     borderRadius:"30px"
    // }
       
        // function incrementCounterFunction(){
        //     increment(by)
        // }
    
        // function decrementCounterFunction(){
        //     decrement(by)
        // }
    
        return (
        <div className="Counter">
        {/* <span className="count">{count}</span> */}
        <div>
        <button className="counterButton"
         onClick={()=>increment(by)}
         
         >
            +{by}</button>
            <button className="counterButton"
         onClick={()=>decrement(by)}
         
         >
            -{by}</button>
        </div>
        </div>
        )
    }
    CounterButton.propTypes={
        by:PropTypes.number
    }
    CounterButton.defaultProps={
        by:1
    }