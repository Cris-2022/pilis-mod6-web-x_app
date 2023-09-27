
const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
          <div className="bg-dark col-12 min-vh-100 d-flex justify-content-between flex-column">
            <h4>Sidebar </h4>

            <ul className="nav nav-pills flex-column">
              <li className="nav-item text-white fs-4">
                <a href="#" className="nav-link text-white f-5" aria-current="page">
                  <span className="ms-2">Dashboard</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4">
                <a href="#" className="nav-link text-white f-5" aria-current="page">
                  <span className="ms-2">Home</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4">
                <a href="#" className="nav-link text-white f-5" aria-current="page">
                  <span className="ms-2">Orders</span>
                </a>
              </li>


            </ul>
          
            
          </div>
      </div>
           
    </div>
  )
}

export default Sidebar