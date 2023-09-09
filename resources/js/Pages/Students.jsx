import EmptyState from '@/Components/EmptyState';
import PrimaryButton from '@/Components/PrimaryButton';
import AlunasList from '@/Components/StudentsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Students({ auth, alunas }) {
    console.log(alunas)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Alunas</h2>}
        >
            <Head title="Alunas" />


            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                    <div className='flex justify-end'>
                        <Link href='/alunas/create'>
                            <PrimaryButton>
                                Cadastrar Aluna
                            </PrimaryButton>
                        </Link>
                    </div>
                    {alunas.length < 1 && <EmptyState />}
                    {alunas.length >= 1 && <AlunasList alunas={alunas} />}
                </div>
            </div>

        </AuthenticatedLayout>
    )
}