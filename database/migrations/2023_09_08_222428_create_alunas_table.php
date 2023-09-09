<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('alunas', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Adicione a coluna 'name'
            $table->string('address'); // Adicione a coluna 'address'
            $table->string('neighborhood'); // Adicione a coluna 'neighborhood'
            $table->string('complement'); // Adicione a coluna 'complement'
            $table->string('email'); // Adicione a coluna 'email'
            $table->string('birthDate'); // Adicione a coluna 'birthDate'
            $table->string('postalCode'); // Adicione a coluna 'postalCode'
            $table->string('register'); // Adicione a coluna 'register'
            $table->string('religion'); // Adicione a coluna 'religion'
            $table->string('profession'); // Adicione a coluna 'profession'
            $table->string('schooling'); // Adicione a coluna 'schooling'
            $table->string('cnh'); // Adicione a coluna 'cnh'
            $table->boolean('hasVehicle'); // Adicione a coluna 'hasVehicle'
            $table->string('vehicle'); // Adicione a coluna 'vehicle'
            $table->string('licenseTime'); // Adicione a coluna 'licenseTime'
            $table->string('timeNotDriving'); // Adicione a coluna 'timeNotDriving'
            $table->boolean('hasTrained'); // Adicione a coluna 'hasTrained'
            $table->string('timeTrained'); // Adicione a coluna 'timeTrained'
            $table->string('tel')->nullable();
            $table->string('cpf');
            $table->date('data_cadastro');
            $table->date('data_saida')->nullable();
            $table->string('foto')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alunas');
    }
};
