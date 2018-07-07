<?php

namespace App\Http\Controllers;

use Session;
use App\Kategori_lowongan;
use App\Perusahaan;
use App\Lowongan;
use Auth;
use Illuminate\Http\Request;

class LowonganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $low = Lowongan::with('Perusahaan','Kategori')->where('user_id', Auth::user()->id)->get(); 
        $low_admin = Lowongan::with('Perusahaan','Kategori')->get();
        return view('lowongan.index',compact('low','low_admin'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $per = Perusahaan::where('user_id',Auth::user()->id)->get();
        $kat = Kategori_lowongan::all();
        return view('lowongan.create',compact('per','kat'));
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
            'nama_low' => 'required|max:25',
            'tgl_mulai' => 'required|',
            'lokasi' => 'required|',
            'gaji' => 'required|',
            'deskripsi_iklan' => 'required|min:30',
            'pers_id' => 'required|',
            'kategori_id' => 'required|'
        ]);
        $low = new Lowongan;
        $low->nama_low = $request->nama_low;
        $low->tgl_mulai = $request->tgl_mulai;
        $low->lokasi = $request->lokasi;
        $low->gaji = $request->gaji;
        $low->deskripsi_iklan = $request->deskripsi_iklan;
        $low->status = 0;
        $low->user_id = Auth::user()->id;
        $low->pers_id = $request->pers_id;
        $low->kategori_id = $request->kategori_id;
        $low->save();
        Session::flash("flash_notification", [
        "level"=>"success",
        "message"=>"Berhasil menyimpan <b>$low->nama_low</b>"
        ]);
        return redirect()->route('lowongan.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Lowongan  $lowongan
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $low= Lowongan::findOrFail($id);
        return view('lowongan.show',compact('low'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Lowongan  $lowongan
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
        $low = Lowongan::findOrFail($id);
        $per = Perusahaan::all();
        $kat = Kategori_lowongan::all();
        $selectedper = Lowongan::findOrFail($id)->pers_id;
        $selectedkat = Lowongan::findOrFail($id)->kategori_id;
        return view('lowongan.edit',compact('per','low','kat','selectedper','selectedkat'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Lowongan  $lowongan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'nama_low' => 'required|max:25',
            'tgl_mulai' => 'required|',
            'lokasi' => 'required|',
            'gaji' => 'required|',
            'deskripsi_iklan' => 'required|min:30',
            'pers_id' => 'required|',
            'kategori_id' => 'required|'
        ]);
        $low = Lowongan::findOrFail($id);
        $low->nama_low = $request->nama_low;
        $low->tgl_mulai = $request->tgl_mulai;
        $low->lokasi = $request->lokasi;
        $low->gaji = $request->gaji;
        $low->deskripsi_iklan = $request->deskripsi_iklan;
        $low->status = 0;
        $low->user_id = Auth::user()->id;
        $low->pers_id = $request->pers_id;
        $low->kategori_id = $request->kategori_id;
        $low->save();
        Session::flash("flash_notification", [
        "level"=>"success",
        "message"=>"Berhasil menyimpan <b>$low->nama_low</b>"
        ]);
        return redirect()->route('lowongan.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Lowongan  $lowongan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $low = Lowongan::findOrFail($id);
        $low->delete();
        Session::flash("flash_notification", [
        "level"=>"success",
        "message"=>"Data Berhasil dihapus"
        ]);
        return redirect()->route('lowongan.index');
    }

    public function konfirmasi_lowongan($id)
    {
        $low= Lowongan::find($id);
        $low->status = 1;
        $low->save();
        return redirect()->route('lowongan.index');
    }
}
