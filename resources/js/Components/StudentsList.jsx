import { Link, router } from '@inertiajs/react';
import React from 'react';


const AlunasList = ({ alunas }) => {
    const handleRowClick = (alunaId) => {
        // Redirecionar para a página de detalhes da aluna com o ID específico
        router.visit(`/alunas/${alunaId}`);
    };

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-2xl font-bold text-center my-4">Listagem de Alunas</h2>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            RA
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Nome
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            CPF
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Data de Nascimento
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Endereço
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            CNH
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Data de Saída
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {alunas.map((aluna) => (
                        <tr key={aluna.id} onClick={() => handleRowClick(aluna.id)} className='cursor-pointer'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{aluna.ra}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{aluna.nome}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{aluna.cpf}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {new Date(aluna.data_nascimento).toLocaleDateString("pt-BR")}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{aluna.endereco}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{aluna.cnh}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{aluna.data_saida || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AlunasList;
