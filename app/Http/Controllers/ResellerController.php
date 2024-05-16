<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reseller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class ResellerController extends Controller
{
    /**
     * Menampilkan halaman daftar reseller.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return Reseller::latest()->get();
    }

    /**
     * Menampilkan halaman detail reseller.
     * 
     * @param \App\Models\Reseller $reseller
     * @return \Illuminate\View\View
     */
    public function show(Reseller $reseller)
    {
        return $reseller;
    }

    /**
     * Menyimpan data reseller ke database.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'brand' => 'nullable|string',
            'address' => 'required|string',
            'logo_path' => 'nullable|string',
            'link_social' => 'nullable|string',
        ]);

        $validatedData['is_active'] = false;

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $reseller = Reseller::create($request->all());

        return response()->json($reseller, 201);
    }

    /**
     * Mengupdate data reseller.
     * 
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Reseller $reseller
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'brand' => 'nullable|string',
            'address' => 'required|string',
            'logo_path' => 'nullable|string',
            'link_social' => 'nullable|string',
            'is_active' => 'required|boolean',
        ]);
    
        // Retrieve the existing Reseller record from the database
        $reseller = Reseller::find($id);
    
        if (!$reseller) {
            return response()->json(['error' => 'Reseller not found'], 404);
        }
    
        // Update the attributes of the Reseller with validated data
        $reseller->fill($validatedData);
    
        try {
            $updated = $reseller->save();
    
            if ($updated) {
                return response()->json(['message' => 'Reseller updated successfully'], 200);
            } else {
                return response()->json(['error' => 'Failed to update Reseller'], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update Reseller: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Handle logo file upload.
     *
     * @param \Illuminate\Http\UploadedFile $logo
     * @return string|bool
     */
    public function uploadLogo(Request $request, Reseller $reseller)
    {
        $request->validate([
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logoPath = $logo->storeAs('reseller_logo', 'logo_' . $reseller->id . '.' . $logo->getClientOriginalExtension(), 'public');

            $reseller->update(['logo_path' => '/storage/' . $logoPath]);

            return response()->json(['logo_path' => '/storage/' . $logoPath], 200);
        }

        return response()->json(['error' => 'Logo not provided.'], 400);
    }

    /**
     * Menghapus data reseller (soft delete) dari database.
     * 
     * @param \App\Models\Reseller $reseller
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Reseller $reseller)
    {
        $reseller->delete();

        return response()->json(null, 204);
    }
}