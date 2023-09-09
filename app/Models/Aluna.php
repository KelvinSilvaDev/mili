<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluna extends Model
{
    use HasFactory;



    // protected $fillable = ['RA', 'nome', 'CPF', 'data_nascimento', 'endereco'];

    protected $fillable = [
        'name',
        'tel',
        'email',
        'CPF',
        'birthDate',
        'address',
        'neighborhood',
        'complement',
        'postalCode',
        'register',
        'religion',
        'cnh',
        'data_saida',
        'foto',
        'profession',
        'schooling',
        'hasVehicle',
        'vehicle',
        'licenseTime',
        'timeNotDriving',
        'hasTrained',
        'timeTrained',

    ];

    const CREATED_AT = 'data_cadastro';
    const BirthDate = 'data_nascimento';


    // protected $fillable = [
    //     'RA',
    //     'nome',
    //     'CPF',
    //     'data_nascimento',
    //     'data_cadastro',
    //     'data_saida',
    //     'foto',
    //     'endereco',
    //     'CNH',
    // ];

    public function matriculas()
    {
        return $this->hasMany(Matricula::class);
    }

    public function notas()
    {
        return $this->hasMany('App\Models\Nota', 'id_aluna');
    }

    public function aulas()
    {
        return $this->hasMany(Aula::class);
    }
}
