import { Link } from '@inertiajs/react';
import { GraduationCap, Home, LogIn } from 'lucide-react';

import { useState } from 'react';
import ApplicationLogo from './ApplicationLogo';
import SidebarNavLink from './SidebarNavLink';
import NavLink from './NavLink';

export default function Sidebar({ isExpanded, setIsExpanded }) {

    const handleSetExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <aside className={`${isExpanded ? 'w-64' : ' w-24'} bg-white border-r border-gray-100 flex-shrink-0 transition-all duration-200`}>
            <div className="w-full relative bg-white border-r border-gray-100 h-1/5 flex justify-between items-center px-5 text-black">
                <div className="shrink-0 flex items-center">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                </div>
                <button onClick={handleSetExpanded} className="absolute top-12 -right-4 px-2 py-1 bg-white border rounded-full w-10 font-bold antialiased z-50">
                    {isExpanded ? '<' : '>'}
                </button>
            </div>
            <div className="w-full h-4/5 bg-gray-200">
                {/* Conteúdo da Sidebar quando expandida */}
                <nav className="mt-5 space-y-2">
                    <SidebarNavLink href={route('dashboard')} active={route().current('dashboard')} Icon={Home} isExpanded={isExpanded}>
                        Início
                    </SidebarNavLink>
                    <SidebarNavLink href={route('alunas')} active={route().current('alunas')} Icon={GraduationCap} isExpanded={isExpanded}>
                        Alunas
                    </SidebarNavLink>
                    {/* criar rota de matriculas */}
                    <SidebarNavLink href={route('matriculas')} active={route().current('matriculas')} Icon={GraduationCap} isExpanded={isExpanded}>
                        Matrículas
                    </SidebarNavLink>

                    {/* Adicione mais links de navegação aqui */}
                </nav>
            </div>
        </aside>
    );
}
