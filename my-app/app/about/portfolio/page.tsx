import React from 'react';
import Link from "next/link";
function Page(){
    return(<div>
        <h1>Portfolio Users</h1>
        <ul className="mt-10">
            <li>
                <Link href="/about/portfolio/1">User 1</Link>
            </li>
            <li>
                <Link href="/about/portfolio/2">User 2</Link>
            </li>
            <li>
                <Link href="/about/portfolio/3">User 3</Link>
            </li>
            <li>
                <Link href="/about/portfolio/4">User 4</Link>
            </li>
        </ul>
    </div>);
}
export default Page;