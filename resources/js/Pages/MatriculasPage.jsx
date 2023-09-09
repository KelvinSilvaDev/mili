import EmptyState from '@/Components/EmptyState';
import MatriculasList from '@/Components/MatriculasList';
import PrimaryButton from '@/Components/PrimaryButton';
import AlunasList from '@/Components/StudentsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function MatriculasPage({ auth, matriculas }) {
    console.log(matriculas)
    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Matriculas</h2>}
        >
            <Head title="Matriculas" />


            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                    <div className='flex justify-end'>
                        <Link href='/matriculas/create'>
                            <PrimaryButton>
                                Nova Matricula
                            </PrimaryButton>
                        </Link>
                    </div>
                    {matriculas.length < 1 && <EmptyState />}
                    {matriculas.length >= 1 && <MatriculasList matriculas={matriculas} />}
                    {/* {matriculas.length >= 1 && JSON.stringify(matriculas)} */}
                </div>
            </div>




        </AuthenticatedLayout>
    )
}