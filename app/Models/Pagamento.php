<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pagamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'matricula_id',
        'valor_pago',
        'data_pagamento',
        // Outros campos relevantes
    ];

    // Defina os relacionamentos aqui, por exemplo:
    public function matricula()
    {
        return $this->belongsTo(Matricula::class);
    }
}
