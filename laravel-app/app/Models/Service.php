<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $table = 'services';

    protected $fillable = [
        'slug',
        'title',
        'description',
        'icon_name',
        'features',
        'order',
    ];

    protected $casts = [
        'features' => 'array',
    ];
}
