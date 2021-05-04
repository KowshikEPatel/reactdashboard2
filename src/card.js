import Linkicon from './Linkicon'
export default function Card(props){
    return  <div className="col-2">
                <div className="card" style={{"width":"10rem"}}>
                    <div className="card-body">
                        <a className="btn btn-block btn-primary text-uppercase">{props.title}</a>
                        <p className="card-text">{props.currency}{props.value}</p>
                    </div>
                    <Linkicon icontype={props.icon}></Linkicon>
                </div>
            </div>

}