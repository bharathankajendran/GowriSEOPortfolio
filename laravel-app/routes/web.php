<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes (Monolithic Single-Page Application)
|--------------------------------------------------------------------------
*/

// Portfolio Homepage SPA
Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.home');

// Project Detail / Full Case Study Page
Route::get('/projects/{slug}', [PortfolioController::class, 'showProject'])->name('portfolio.project');

// Contact Form Submission (Single Point Action)
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');
