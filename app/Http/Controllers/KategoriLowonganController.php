<?php

namespace App\Http\Controllers;

use App\Kategori_lowongan;
use Session;
use Illuminate\Http\Request;

class KategoriLowonganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kat  = Kategori_lowongan::all();
        return view('kategori.index', compact('kat'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
         return view('kategori.create');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $this->validate($request,[
            'nama_kategori' => 'required|max:45'
        ]);

        $kat = new Kategori_lowongan;
        $kat->nama_kategori = $request->nama_kategori;
        $kat->save();
        return redirect()->route('kategori.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Kategori_lowongan  $kategori_lowongan
     * @return \Illuminate\Http\Response
     */
    public function show(Kategori_lowongan $kategori_lowongan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Kategori_lowongan  $kategori_lowongan
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
         $kat = Kategori_lowongan::findOrFail($id);
        return view('kategori.edit',compact('kat'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Kategori_lowongan  $kategori_lowongan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
         $this->validate($request,[
            'nama_kategori' => 'required|'
        ]);
        $kat = Kategori_lowongan::findOrFail($id);
        $kat->nama_kategori = $request->nama_kategori;
        $kat->save();
        Session::flash("flash_notification", [
        "level"=>"success",
        "message"=>"Berhasil mengedit <b>$kat->nama_kategori</b>"
        ]);
        return redirect()->route('kategori.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Kategori_lowongan  $kategori_lowongan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $kat = Kategori_lowongan::findOrFail($id);
        $kat->delete();
        Session::flash("flash_notification", [
        "level"=>"success",
        "message"=>"Data Berhasil dihapus"
        ]);
        return redirect()->route('kategori.index');
    }
}
