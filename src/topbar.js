export default function Topbar(){

    return <>
    <nav className="navbar fixed-top flex-md-nowrap bg-dark">
        <a className="text-danger">Brand</a>
        <input type="text" name="search" id="search" className="inputtext"></input>
        <button type="button" className="btn btn-primary">Search</button>
    </nav>

    </>
}