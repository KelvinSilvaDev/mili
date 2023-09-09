<?php

namespace App\Http\Controllers;

use App\Models\Aluna;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlunasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $alunas = Aluna::all();
        return Inertia::render('Students', ['alunas' => $alunas]);

        // return response()->json($alunas);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $aluna = new Aluna();

        $request->validate([
            'name' => 'required',
            'tel' => 'required',
            'CPF' => 'required|unique:alunas',
            'birthDate' => 'required|date',
            'address' => 'required',
            'cnh' => 'required',
            'hasVehicle' => 'sometimes|boolean', // Valida o campo hasVehicle diretamente

            // Continue with the rest of your rules...
        ]);

        $RA = rand(10000, 99999);

        $requestData = $request->all();
        $hasVehicle = $request->has('hasVehicle') && $request->input('hasVehicle') == 'on' ? 1 : 0;


        $requestData['data_cadastro'] = now();
        $requestData['birthDate'] = \Carbon\Carbon::createFromFormat('Y-m-d', $requestData['birthDate'])->startOfDay();

        $requestData['RA'] = $RA;
        $requestData['data_saida'] = null;

        if ($request->hasFile('foto') && $request->file('foto')->isValid()) {
            $requestImage = $request->foto;
            $extension = $requestImage->extension();
            $imageName = md5($requestImage->getClientOriginalName() . strtotime("now")) . "." . $extension;
            $requestImage->move(public_path('img/students'), $imageName);
            $aluna->foto = $imageName; // Salva o nome do arquivo da imagem no banco de dados
        }



        $requestData['name'] = $request->input('name'); // Adicionar o campo 'name' ao array

        $aluna->fill($requestData);
        $aluna->foto = $imageName;
        $aluna->save();

        return redirect()->route('alunas')->with('msg', 'Aluna cadastrada com sucesso!');
    }


    public function create()
    {
        return Inertia::render('CreateStudent');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Aluna  $aluna
     * @return \Illuminate\Http\Response
     */
    public function show(Aluna $aluna)
    {
        // return response()->json($aluna);
        return Inertia::render('AlunaDetail', ['aluna' => $aluna]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Aluna  $aluna
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Aluna $aluna)
    {
        $request->validate([
            'RA' => 'required|unique:alunas,RA,' . $aluna->id,
            'nome' => 'required',
            'CPF' => 'required|unique:alunas,CPF,' . $aluna->id,
            'data_nascimento' => 'required|date',
            // Continue with the rest of your rules...
        ]);

        $aluna->update($request->all());

        return response()->json($aluna);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Aluna  $aluna
     * @return \Illuminate\Http\Response
     */
    public function destroy(Aluna $aluna)
    {
        $aluna->delete();

        return response()->json(null, 204);
    }


    public function test()
    {
        $aluna = Aluna::find(1); // substitua pelo ID da aluna

        $aulas = $aluna->aulas;
        $escalaEmocional = $aulas->first()->escalaEmocional;

        return Inertia::render('Teste', [
            'aluna' => $aluna,
            'aulas' => $aulas,
            'escalaEmocional' => $escalaEmocional,
        ]);
    }
}
