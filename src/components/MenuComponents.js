import React,{Component} from 'react';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
            SelectedDish:null
        }
    }
    onDishSelect(dish){
        this.setState({SelectedDish:dish});
    }

    renderDish(dish) {
        
        if (dish != null)
        return(
            <div>{dish.description}</div>
        );
    else
        return(
            <div></div>
        );
    }
    render(){
            const menu=this.props.dishes.map((dish)=>{
            return(
                
            <div  className="col-12 col-md-5 mt-5"  onClick={()=>this.onDishSelect(dish)}>
                <div key={dish.id} className="card">
                    <img  width="100%" className="card-img-top" src={dish.image} alt="Card image cap" />
                        <div className="card-img-overlay">
                            <h5 className="card-title">{dish.name}</h5>
                            
                        </div>
                        
                </div>
               
            </div> 
            );
    })
    
    return(
        <div className="container">
            <div className="row">
                {menu}
                <p>{this.renderDish(this.state.SelectedDish)}</p>
            </div>
        </div>


    );   
}
}
export default Menu;