import React from 'react'


function Header({ children }) {
    return (
        <header>

            <div style={{display: 'flex', justifySelf: 'right'}}>
            {/* <BrowserRouter>
                
                <Routes path='/' element={<Content/>}>
                    <Route to='/form' element={<Form />}></Route>
                </Routes>
                
            </BrowserRouter> */}
            </div>
           

            {children}
        </header>
    )
}

export default Header;