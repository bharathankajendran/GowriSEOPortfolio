<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Service;
use App\Models\Experience;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Display the monolithic Portfolio Single Page Application (SPA).
     */
    public function index(Request $request)
    {
        // 1. Fetch data from MySQL database
        $projects = Project::orderBy('order', 'asc')->get();
        $services = Service::orderBy('order', 'asc')->get();
        $experiences = Experience::orderBy('order', 'asc')->get();
        $testimonials = Testimonial::where('featured', true)->latest()->get();

        $activeTab = $request->query('tab', 'home');

        // 2. Return the main monolithic Blade view
        return view('portfolio.index', compact(
            'projects',
            'services',
            'experiences',
            'testimonials',
            'activeTab'
        ));
    }

    /**
     * Display full case study details for a project.
     */
    public function showProject(string $slug)
    {
        $project = Project::where('slug', $slug)->firstOrFail();
        $allProjects = Project::select('slug', 'title')->orderBy('order', 'asc')->get();

        return view('portfolio.project-detail', compact('project', 'allProjects'));
    }
}
