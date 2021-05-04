export default function Sidebar(){

    return <>
                <nav class="col-2 mt-5 bg-dark position-fixed" style={{"height":"600px"}}>
                    <div class="sidebar-sticky">
                    <ul class="nav flex-column">      
                        <li class="nav-item"><a class="nav-link" href="#">Dashboard</a> </li>
                        <li class="nav-item"><a class="nav-link" href="#">Users</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Products</a></li>
                        </ul>
                        </div> 
                    </nav>
    </>
}