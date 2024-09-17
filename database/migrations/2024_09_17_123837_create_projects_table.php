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
        
        Schema::create('projects', function (Blueprint $table) {
            $table->timestamps();
            $table->id();
            $table->string('ipregistry');
            $table->string('title');
            $table->string('tech_adviser');
            $table->string(column: 'authors');  
            $table->string(column: 'course');
            $table->string(column: 'specialization');
            $table->string('year');
            $table->string('acm');
            $table->string('full_document');
            $table->string(column: 'pub_mat');
            $table->string('itso_form');
            $table->string('source_code');
            $table->boolean('is_best_proj');
            $table->string('keywords');
            $table->string('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
