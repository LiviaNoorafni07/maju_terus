<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    // /**
    //  * Display a listing of the resource.
    //  */
    // public function index()
    // {
    //     $items = Item::all();
    //     return view('items.index',compact('items'));
    // }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    // public function create()
    // {
    //     return view('ites.create');
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  */
    // public function store(Request $request){
    //     $request->validate([
    //         'Nama Barang' => 'requerid|max:255',
    //         'Kode Barang' => 'nullable|integer',
    //         'deskripsi' => 'required',
    //     ]);
        
    //     Item::create($request->all());

    //     return redirect()->route('items.index')->with('success', 'Item created successfully.');
    // }

    // /**
    //  * Display the specified resource.
    //  */
    // public function show(Item $item)
    // {
    //     //
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    // public function edit(Item $item)
    // {
    //     //
    // }

    // /**
    //  * Update the specified resource in storage.
    //  */
    // public function update(Request $request, Item $item)
    // {
    //     //
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy(Item $item)
    // {
    //     //
    // }
}
