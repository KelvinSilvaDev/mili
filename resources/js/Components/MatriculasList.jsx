import React from 'react';

const MatriculasList = ({ matriculas }) => {
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-2xl font-bold text-center my-4">Listagem de Matrículas</h2>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            ID da Aluna
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Data da Matrícula
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {matriculas.map((matricula, index) => (
                        <tr key={index}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{matricula.aluna_id}</td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {new Date(matricula.data_matricula).toLocaleDateString("pt-BR")}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{matricula.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MatriculasList;
