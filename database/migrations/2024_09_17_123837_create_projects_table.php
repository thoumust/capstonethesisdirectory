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
            $table->string('ipRegistration');
            $table->string(column: 'specialization');
            $table->string('title');
            $table->string(column: 'author1');  
            $table->string(column: 'author2');
            $table->string(column: 'author3');
            $table->string(column: 'author4');
            $table->string('technicalAdviser');
            $table->string('yearPublished');
            $table->string('fullDocument');
            $table->string('acmPaper');
            $table->string('sourceCode');
            $table->string('approvalForm');
            $table->string('keywords');
            
            $table->string(column: 'course');
            $table->string(column: 'pub_mat');
            $table->boolean('is_best_proj');
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
