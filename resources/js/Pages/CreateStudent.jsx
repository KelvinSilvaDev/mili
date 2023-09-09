import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from 'axios';
import { router } from "@inertiajs/react";

export default function CreateStudent({ auth }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [complement, setComplement] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [register, setRegister] = useState('');
    const [religion, setReligion] = useState('');
    const [profession, setProfession] = useState('');
    const [schooling, setSchooling] = useState('');
    const [cnh, setCnh] = useState('');
    const [hasVehicle, setHasVehicle] = useState();
    const [vehicle, setVehicle] = useState('');
    
    const [licenseTime, setLicenseTime] = useState('');
    const [timeNotDriving, setTimeNotDriving] = useState('');

    const [hasTrained, setHasTrained] = useState();
    const [timeTrained, setTimeTrained] = useState('');


    const [tel, setTel] = useState('')
    const [CPF, setCPF] = useState('');

    const [foto, setFoto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('address', address);
        formData.append('neighborhood', neighborhood);
        formData.append('complement', complement);
        formData.append('email', email);
        formData.append('birthDate', birthDate);
        formData.append('postalCode', postalCode);
        formData.append('register', register);
        formData.append('religion', religion);
        formData.append('profession', profession);
        formData.append('schooling', schooling);
        formData.append('cnh', cnh);
        formData.append('hasVehicle', hasVehicle);
        formData.append('vehicle', vehicle);
        formData.append('licenseTime', licenseTime);
        formData.append('timeNotDriving', timeNotDriving);
        formData.append('hasTrained', hasTrained);
        formData.append('timeTrained', timeTrained);
        formData.append('tel', tel);
        formData.append('CPF', CPF);

        if (foto) {
            formData.append('foto', foto, foto.name);
        }
    
        axios.post('/alunas', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            router.get('/alunas')
            // Handle successful response here
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
                <h1 className="text-2xl font-bold text-center my-4">Cadastro de Aluna</h1>
                <form className="grid grid-cols-2 gap-4 bg-white p-8" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="name">Nome:</label>
                    <input className="p-2 border rounded" type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="address">Endereço:</label>
                    <input className="p-2 border rounded" type="text" value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="postalCode">CEP:</label>
                    <input className="p-2 border rounded" type="text" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="neighborhood">Bairro:</label>
                    <input className="p-2 border rounded" type="text" value={neighborhood} onChange={e => setNeighborhood(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="complement">Complemento:</label>
                    <input className="p-2 border rounded" type="text" value={complement} onChange={e => setComplement(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="email">Email:</label>
                    <input className="p-2 border rounded" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="register">RG:</label>
                    <input className="p-2 border rounded" type="text" value={register} onChange={e => setRegister(e.target.value)} />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="CPF">CPF:</label>
                    <input className="p-2 border rounded" type="text" value={CPF} onChange={e => setCPF(e.target.value)} />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="data_nasc">Data de Nascimento:</label>
                    <input className="p-2 border rounded" type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
                </div>

                <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="religion">Religião:</label>
                    <input className="p-2 border rounded" type="text" value={religion} onChange={e => setReligion(e.target.value)} />
                </div>

                <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="profession">Profissão:</label>
                    <input className="p-2 border rounded" type="text" value={profession} onChange={e => setProfession(e.target.value)} />
                </div>

                <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="schooling">Escolaridade:</label>
                    <select name="schooling" id="schooling" onChange={e=> setSchooling(e.target.value)}>
                        <option value="Ensino Fundamental">Ensino Fundamental</option>
                        <option value="Ensino Médio">Ensino Médio</option>
                        <option value="Ensino Superior">Ensino Superior</option>
                        <option value="Pós-Graduação">Pós-Graduação</option>
                    </select>
                </div>

                {/* <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="hasVehicle">Possui Veículo:</label>
                    <select name="hasVehicle" id="hasVehicle">
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                    </select>
                </div> */}

                <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="vehicle">Veículo:</label>
                    <select name="vehicle" id="vehicle">
                        <option value="AUTO">
                            Automático
                        </option>
                        <option value="MANUAL">
                            Manual
                        </option>
                    </select>
                </div>

                <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="licenseTime">Tempo de CNH:</label>
                    <input className="p-2 border rounded" type="text" value={licenseTime} onChange={e => setLicenseTime(e.target.value)} />
                </div>

                <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="timeNotDriving">Tempo sem Dirigir:</label>
                    <input className="p-2 border rounded" type="text" value={timeNotDriving} onChange={e => setTimeNotDriving(e.target.value)} />
                </div>

                <div className="flex flex-col" >
                    <label className="text-sm font-semibold" htmlFor="hasTrained">Já fez algum treinamento?</label>
                    <select name="hasTrained" id="hasTrained" onChange={e=> setHasTrained(e.target.value)}>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="timeTrained">Há quanto tempo?</label>
                    <input className="p-2 border rounded" type="text" value={timeTrained} onChange={e => setTimeTrained(e.target.value)} />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="tel">Telefone:</label>
                    <input className="p-2 border rounded" type="tel" value={tel} onChange={e => setTel(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="cnh">CNH:</label>
                    <input className="p-2 border rounded" type="text" value={cnh} onChange={e => setCnh(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="hasVehicle">Possui Veículo:</label>
                    <select className="p-2 border rounded" value={hasVehicle} onChange={e => setHasVehicle(e.target.value)}>
                        <option value="1">Sim</option>
                        <option value="0">Não</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="vehicle">Veículo:</label>
                    <input className="p-2 border rounded" type="text" value={vehicle} onChange={e => setVehicle(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold" htmlFor="foto">Foto:</label>
                    <input className="p-2 border rounded" type="file" onChange={e => setFoto(e.target.files[0])} />
                </div>
                <input className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-400" type="submit" value="Concluir" />
            </form>

            </div>
        </AuthenticatedLayout>
    );
}
