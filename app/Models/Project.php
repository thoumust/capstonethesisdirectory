<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'ipregistry', 
        'title', 
        'tech_adviser', 
        'authors', 
        'course',
        'specialization', 
        'year', 
        'acm', 
        'full_document', 
        'pub_mat',
        'itso_form', 
        'source_code', 
        'best_proj', 
        'keywords', 
        'status'
    ];
}
