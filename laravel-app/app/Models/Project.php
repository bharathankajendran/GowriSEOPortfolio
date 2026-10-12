<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $fillable = [
        'slug',
        'title',
        'tagline',
        'category',
        'description',
        'client',
        'duration',
        'thumbnail_url',
        'live_url',
        'github_url',
        'featured',
        'tags',
        'challenges',
        'solution',
        'metrics',
        'architecture',
        'order',
    ];

    protected $casts = [
        'featured' => 'boolean',
        'tags' => 'array',
        'metrics' => 'array',
    ];
}
