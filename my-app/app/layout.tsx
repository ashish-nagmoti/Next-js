import React from 'react';
function Layout({children}:{children: React.ReactNode}){
    return(<html lang="en"><body>{children}</body></html>);
}
export default Layout;