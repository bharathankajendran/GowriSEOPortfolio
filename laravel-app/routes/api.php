<?php

use Illuminate\Support\Facades\Route;
use App\Models\Project;
use App\Models\Service;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// GET /api/projects - Returns JSON list of case studies
Route::get('/projects', function () {
    $projects = Project::orderBy('order', 'asc')->get();
    return response()->json([
        'success' => true,
        'count' => $projects->count(),
        'data' => $projects,
    ]);
});

// GET /api/services
Route::get('/services', function () {
    return response()->json([
        'success' => true,
        'data' => Service::orderBy('order', 'asc')->get(),
    ]);
});

// POST /api/contact - Single point contact intake
Route::post('/contact', [ContactController::class, 'submit']);
