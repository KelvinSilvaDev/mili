import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from 'axios';
import { router } from "@inertiajs/react";

export default function CreateMatricula({ auth, alunas }) {
    const [alunaId, setAlunaId] = useState('');
    const [dataMatricula, setDataMatricula] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('aluna_id', alunaId);
        formData.append('data_matricula', dataMatricula);
        formData.append('status', status);

        axios.post('/matriculas', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            router.get('/matriculas')
        }).catch(error => {
            console.error(error);
        });
    }


    const handleSelectAluna = (e) => {
        setAlunaId(e.target.value)
    }

    useEffect(()=>{
        console.log(alunaId)
    },[alunaId])

    return (
        <AuthenticatedLayout user={auth.user}>
        <div className="container mx-auto px-4 sm:px-8 max-w-md">
            <h1 className="text-2xl font-bold text-center my-4">Criar Matrícula</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="aluna_id">Aluna:</label>
                    <select className="p-2 border rounded" value={alunaId} onChange={e => setAlunaId(e.target.value)}>
                        <option value="">Selecione uma aluna</option>
                        {alunas.map((aluna) => (
                            <option value={aluna.id} key={aluna.id}>
                                {aluna.nome}
                            </option>
                        ))}
                    </select>

                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="data_matricula">Data da Matrícula:</label>
                    <input className="p-2 border rounded" type="date" value={dataMatricula} onChange={e => setDataMatricula(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="status">Status:</label>
                    <input className="p-2 border rounded" type="text" value={status} onChange={e => setStatus(e.target.value)} />
                </div>
                <input className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-400" type="submit" value="Criar Matrícula" />
            </form>
        </div>
    </AuthenticatedLayout>
    );
}
