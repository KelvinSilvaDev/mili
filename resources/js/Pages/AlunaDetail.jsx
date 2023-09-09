// resources/js/Pages/AlunaDetail.js

import Authenticated from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const AlunaDetail = ({ aluna, auth }) => {
    console.log(aluna)
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="bg-white p-4 border rounded">
                <h2 className="text-xl font-semibold">Detalhes da Aluna</h2>
                <div className="my-4">
                    <strong>Nome:</strong> {aluna.name}
                </div>
                <div className="my-4">
                    <strong>Endereço:</strong> {aluna.address}
                </div>
                <div className="my-4">
                    <strong>CEP:</strong> {aluna.postalCode}
                </div>
                <div className="my-4">
                    <strong>Bairro:</strong> {aluna.neighborhood}
                </div>
                <div className="my-4">
                    <strong>Complemento:</strong> {aluna.complement}
                </div>
                <div className="my-4">
                    <strong>Email:</strong> {aluna.email}
                </div>
                <div className="my-4">
                    <strong>RG:</strong> {aluna.register}
                </div>
                <div className="my-4">
                    <strong>CPF:</strong> {aluna.cpf}
                </div>
                <div className="my-4">
                    <strong>Data de Nascimento:</strong> {aluna.birthDate}
                </div>
                <div className="my-4">
                    <strong>Religião:</strong> {aluna.religion}
                </div>
                <div className="my-4">
                    <strong>Profissão:</strong> {aluna.profession}
                </div>
                <div className="my-4">
                    <strong>Escolaridade:</strong> {aluna.schooling}
                </div>
                <div className="my-4">
                    <strong>CNH:</strong> {aluna.cnh}
                </div>
                <div className="my-4">
                    <strong>Possui Veículo:</strong> {aluna.hasVehicle ? "Sim" : "Não"}
                </div>
                <div className="my-4">
                    <strong>Veículo:</strong> {aluna.vehicle}
                </div>
                <div className="my-4">
                    <strong>Tempo de CNH:</strong> {aluna.licenseTime}
                </div>
                <div className="my-4">
                    <strong>Tempo sem Dirigir:</strong> {aluna.timeNotDriving}
                </div>
                <div className="my-4">
                    <strong>Já fez algum treinamento?</strong>{" "}
                    {aluna.hasTrained ? "Sim" : "Não"}
                </div>
                <div className="my-4">
                    <strong>Há quanto tempo?</strong> {aluna.timeTrained}
                </div>
                <div className="my-4">
                    <strong>Telefone:</strong> {aluna.tel}
                </div>
                <div className="my-4">
                    <strong>Foto:</strong>{" "}
                    {aluna.foto ? (
                    <img
                    src={`/img/students/${aluna.foto}`} // Construa a URL completa aqui
                    alt="Foto da Aluna"
                    width="100"
                    height="100"
                />
                    ) : (
                    "Não disponível"
                    )}
                </div>
                </div>
        </AuthenticatedLayout>
    );
}

export default AlunaDetail;
