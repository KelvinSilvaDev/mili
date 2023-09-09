<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matricula extends Model
{
    use HasFactory;

    protected $fillable = [
        'aluna_id',
        'data_matricula',
        'status',
        'cnh',
    ];

    public function aluna()
    {
        return $this->belongsTo(Aluna::class);
    }

    public function pagamentos()
    {
        return $this->hasMany(Pagamento::class);
    }
}
