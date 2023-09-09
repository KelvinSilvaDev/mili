<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AlunasController;
use App\Http\Controllers\MatriculasController;
// App\Http\Controllers\MatriculaController::class
// use App\Http\Controllers\MatriculaController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Index', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/register', function () {
    return Inertia::render('Register');
});

Route::get('/alunas/teste', [AlunasController::class, 'test'])
    ->middleware(['auth', 'verified'])
    ->name('alunas.teste');
Route::get('/alunas/create', [AlunasController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('alunas.create');

Route::post('/alunas', [AlunasController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('alunas.store');

Route::get('/alunas', [AlunasController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('alunas');

Route::get('/alunas/{aluna}', [AlunasController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('alunas.show');

Route::resource('matriculas', MatriculasController::class);

Route::get('/matriculas', [MatriculasController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('matriculas');

// Route::get('/matriculas/create', [MatriculasController::class, 'create'])
//     ->middleware(['auth', 'verified'])
//     ->name('matriculas.create');

// Route::post('/matriculas', [MatriculasController::class, 'store'])

//     ->middleware(['auth', 'verified'])
//     ->name('matriculas.store');

// Route::get('/matriculas/{matricula}', [MatriculasController::class, 'show'])
//     ->middleware(['auth', 'verified'])
//     ->name('matriculas.show');

// Route::get('/matriculas/{matricula}/edit', [MatriculasController::class, 'edit'])
//     ->middleware(['auth', 'verified'])
//     ->name('matriculas.edit');

// Route::put('/matriculas/{matricula}', [MatriculasController::class, 'update'])

//     ->middleware(['auth', 'verified'])
//     ->name('matriculas.update');

// Route::delete('/matriculas/{matricula}', [MatriculasController::class, 'destroy'])
//     ->middleware(['auth', 'verified'])
//     ->name('matriculas.destroy');





Route::resource('relacionamentos', AlunasController::class);


Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::get('/pagamentos', 'PagamentoController@index')->name('pagamentos.index');
Route::get('/pagamentos/create', 'PagamentoController@create')->name('pagamentos.create');
Route::post('/pagamentos', 'PagamentoController@store')->name('pagamentos.store');
Route::get('/pagamentos/{pagamento}', 'PagamentoController@show')->name('pagamentos.show');
Route::get('/pagamentos/{pagamento}/edit', 'PagamentoController@edit')->name('pagamentos.edit');
Route::put('/pagamentos/{pagamento}', 'PagamentoController@update')->name('pagamentos.update');
Route::delete('/pagamentos/{pagamento}', 'PagamentoController@destroy')->name('pagamentos.destroy');

// Route::get('/matriculas', 'MatriculasController@index')->name('matriculas.index');
// Route::get('/matriculas/create', 'MatriculasController@create')->name('matriculas.create');
// Route::post('/matriculas', 'MatriculasController@store')->name('matriculas.store');
// Route::get('/matriculas/{matricula}', 'MatriculasController@show')->name('matriculas.show');
// Route::get('/matriculas/{matricula}/edit', 'MatriculasController@edit')->name('matriculas.edit');
// Route::put('/matriculas/{matricula}', 'MatriculasController@update')->name('matriculas.update');
// Route::delete('/matriculas/{matricula}', 'MatriculasController@destroy')->name('matriculas.destroy');


// use App\Http\Controllers\AlunasController;


// Route::get('/test-relacionamentos', [AlunasController::class, 'testRelacionamentos'])->name('TestRelacionamentos');
