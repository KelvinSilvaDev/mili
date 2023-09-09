// SidebarNavLink.jsx

import { Link } from '@inertiajs/react';

export default function SidebarNavLink({ href, active = false, Icon, children, isExpanded,...props }) {
    // Pegamos a rota atual do Inertia.js e verificamos se ela é igual à rota do link.
    const isActive = route().current(href.replace("/", ""));
    // className={`flex items-center space-x-2 py-2 px-3 rounded transition-colors duration-200
    // ${isActive ? 'text-black bg-gray-100' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
    return (
        <Link
            href={href}
            {...props}
            className={
                'flex items-center space-x-2 py-2 px-3 rounded transition-colors duration-200' +
                (active
                    ? 'text-black bg-gray-100'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-black')
            }
        >
            <Icon size={18} />
            {isExpanded && (
                <span>{children}</span>
            )}
        </Link>
    );
}
