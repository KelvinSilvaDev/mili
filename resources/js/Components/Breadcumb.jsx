import React from 'react';
// import { Link } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/react';

const Breadcrumb = () => {
  const route = window();


  console.log(route)
  // Extrair os segmentos da URI da rota atual
  const segments = route().url().split('/').filter(segment => segment !== '');

  return (
    <nav className="bg-gray-200 p-3 rounded">
      <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
        <li className="px-2">
          <Link href="/">Home</Link>
        </li>
        {/* {segments.map((segment, index) => (
          <li key={index} className="px-2">
            <Link href={'/' + segments.slice(0, index + 1).join('/')}>
              {segment}
            </Link>
          </li>
        ))} */}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
