<?php

namespace App\Http\Controllers;

use App\Models\Aluna;
use Illuminate\Http\Request;
use App\Models\Matricula;
use Inertia\Inertia;

class MatriculasController extends Controller
{
    public function index()
    {
        $matriculas = Matricula::all();
        return Inertia::render('MatriculasPage', ['matriculas' => $matriculas]);
        // return Inertia::render('Matriculas',['matriculas'=> $matriculas]);
        // return view('matriculas.index', compact('matriculas'));
    }

    public function create()
    {
        // Obtenha as alunas disponíveis para a matrícula e passe para a view
        $alunas = Aluna::all();

        return Inertia::render('CreateMatricula', ['alunas' => $alunas]);

        // return view('matriculas.create', compact('alunas'));
    }

    public function store(Request $request)
    {
        // Valide os dados recebidos
        $request->validate([
            'aluna_id' => 'required',
            'data_matricula' => 'required|date',
            'status' => 'required',
        ]);

        $aluna = Aluna::find($request->aluna_id);

        if (!$aluna) {
            return redirect('/matriculas/create')->with('error', 'Aluna não encontrada.');
        }

        // Crie a nova matrícula
        Matricula::create([
            'aluna_id' => $request->aluna_id,
            'data_matricula' => $request->data_matricula,
            'status' => $request->status,
            'cnh' => $aluna->cnh, // Defina a CNH com base na aluna
        ]);

        // Redirecione para a página de listagem de matrículas
        return redirect('/matriculas')->with('success', 'Matrícula criada com sucesso.');
    }


    public function show(Matricula $matricula)
    {
        return view('matriculas.show', compact('matricula'));
    }

    public function edit(Matricula $matricula)
    {
        // Obtenha as alunas disponíveis para a edição da matrícula e passe para a view
        $alunas = Aluna::all();
        return view('matriculas.edit', compact('matricula', 'alunas'));
    }

    public function update(Request $request, Matricula $matricula)
    {
        // Valide os dados recebidos
        $request->validate([
            'aluna_id' => 'required',
            'data_matricula' => 'required|date',
            'status' => 'required',
            'cnh' => 'required',
        ]);

        // Atualize a matrícula existente
        $matricula->update([
            'aluna_id' => $request->aluna_id,
            'data_matricula' => $request->data_matricula,
            'status' => $request->status,
            'cnh' => $request->cnh,
        ]);

        // Redirecione para a página de detalhes da matrícula ou outra página adequada
        return redirect('/matriculas')->with('success', 'Matrícula atualizada com sucesso.');
    }


    public function destroy(Matricula $matricula)
    {
        // Exclua a matrícula e redirecione para a página de listagem de matrículas
    }
}
