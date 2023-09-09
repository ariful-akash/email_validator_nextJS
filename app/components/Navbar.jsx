import Link from "next/link";

const Navbar = () => {


    return (
       
        <div className="navBar navbar navbar-expand-sm fixed-top">
            <ul className="listDisplay">
                  

                <li className="list float-right">
                    <Link href="/registration"  className="list">Registration</Link>                   
                </li>

                <li className="list float-right">
                    <Link href="/dashboard"  className="list">Dashboard</Link>                   
                </li>              
                          

            </ul>
        

        
        </div>

    );
};

export default Navbar;