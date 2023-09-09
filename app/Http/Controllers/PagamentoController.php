<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pagamento;

class PagamentoController extends Controller
{
    public function index()
    {
        $pagamentos = Pagamento::all();
        return view('pagamentos.index', compact('pagamentos'));
    }
    public function create()
    {
        return view('pagamentos.create');
    }
}
