import React from 'react';
function Layout({children}:{children: React.ReactNode}){
    return(<html lang="en"><body><p>About layout</p>{children}</body></html>);
}
export default Layout;