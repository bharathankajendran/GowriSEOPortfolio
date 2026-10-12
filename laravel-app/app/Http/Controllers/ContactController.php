<?php

namespace App\Http\Controllers;

use App\Models\ContactSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Handle incoming contact inquiries from the single monolithic form.
     */
    public function submit(Request $request)
    {
        // 1. Validate Form Input
        $validator = Validator::make($request->all(), [
            'name'    => 'required|string|max:100',
            'email'   => 'required|email|max:150',
            'subject' => 'required|string|max:200',
            'service' => 'nullable|string|max:100',
            'message' => 'required|string|max:2000',
        ]);

        if ($validator->fails()) {
            if ($request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation error',
                    'errors'  => $validator->errors(),
                ], 422);
            }

            return redirect()->back()->withErrors($validator)->withInput();
        }

        // 2. Persist to MySQL Database via Eloquent Model
        $submission = ContactSubmission::create([
            'name'    => $request->input('name'),
            'email'   => $request->input('email'),
            'subject' => $request->input('subject'),
            'service' => $request->input('service', 'Digital Marketing Strategy'),
            'message' => $request->input('message'),
            'status'  => 'PENDING',
        ]);

        // 3. Dispatch Email Notification (Single-channel connection configured in .env)
        try {
            Mail::raw(
                "New Lead Received:\n\nName: {$submission->name}\nEmail: {$submission->email}\nService: {$submission->service}\nSubject/Company: {$submission->subject}\n\nMessage:\n{$submission->message}",
                function ($message) use ($submission) {
                    $message->to(config('mail.from.address', 'contact@g2vertex.com'))
                            ->subject("[G2VERTEX Inquiry] {$submission->service} - {$submission->name}");
                }
            );
        } catch (\Exception $e) {
            \Log::warning("Email notification delivery failed: " . $e->getMessage());
        }

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Thank you! Your message has been received.',
                'data'    => $submission,
            ]);
        }

        return redirect()->back()->with('success', 'Thank you! Your inquiry has been sent successfully.');
    }
}
